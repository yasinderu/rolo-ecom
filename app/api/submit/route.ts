import { NextRequest, NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { formSchema } from "@/lib/validations";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ],
});

const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEET_ID!,
  serviceAccountAuth
);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    const validatedData = formSchema.safeParse(formData);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: validatedData.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const { name, email, streetAddress, houseNumber, postalCode } =
      validatedData.data;
    const timestamp = new Date().toISOString();

    await sheet.addRow({
      name,
      email,
      streetAddress,
      houseNumber: houseNumber || "",
      postalCode,
      timestamp,
    });

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);

    return NextResponse.json(
      { error: "An internal server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
