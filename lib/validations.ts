import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.email({ message: "Please enter a valid email address." }),
  streetAddress: z.string().min(1, { message: "Street address is required." }),
  houseNumber: z.string().optional(),
  postalCode: z
    .string()
    .min(1, { message: "Postal code is required." })
    .regex(/^\d{5}$/, { message: "Postal code must be 5 digits." }),
});

export type FormData = z.infer<typeof formSchema>;
