import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const formSchema = z
  .object({
    from: z.string().min(2, {
      message: "From location must be at least 2 characters long",
    }),
    to: z.string().min(2, {
      message: "To location must be at least 2 characters long",
    }),
    departDate: z
      .string()
      .regex(dateRegex, {
        message: "Departure date must be in YYYY-MM-DD format",
      })
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Departure date must be a valid date",
      }),
    returnDate: z
      .string()
      .regex(dateRegex, { message: "Return date must be in YYYY-MM-DD format" })
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Return date must be a valid date",
      }),
    ticketType: z.enum(["business", "economy"], {
      required_error: "Please select a ticket type",
    }),
  })
  .refine(
    (data) =>
      new Date(data.returnDate).getTime() >=
      new Date(data.departDate).getTime(),
    {
      message: "Return date cannot be before departure date",
      path: ["returnDate"],
    }
  );
