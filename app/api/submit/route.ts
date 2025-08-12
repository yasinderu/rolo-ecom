// app/api/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { formSchema } from "@/lib/validations";

// Config for the service account
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ],
});

// ID of the Google Sheet
const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEET_ID!,
  serviceAccountAuth
);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // 1. Validate the data from the client
    const validatedData = formSchema.safeParse(formData);

    if (!validatedData.success) {
      // If validation fails, return a 400 error with the issues
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: validatedData.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // 2. Load the Google Sheet
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsByTitle['YourSheetName']

    // 3. Append the validated data as a new row
    const { name, email, streetAddress, houseNumber, postalCode } =
      validatedData.data;
    const timestamp = new Date().toISOString();

    await sheet.addRow({
      name,
      email,
      streetAddress,
      houseNumber: houseNumber || "", // Ensure it's not undefined
      postalCode,
      timestamp,
    });

    // 4. Return a success response
    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);

    // 5. Handle potential errors (e.g., Google API issues)
    return NextResponse.json(
      { error: "An internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
