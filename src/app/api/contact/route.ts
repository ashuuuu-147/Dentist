import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  reason: z.string().optional(),
  preferredMethod: z.string().optional(),
  message: z.string().optional(),
  notes: z.string().optional(),
  patientType: z.string().optional(),
  preferredDay: z.string().optional(),
  preferredTime: z.string().optional(),
  insurance: z.string().optional(),
  consent: z.literal(true),
  formType: z.enum(["contact_inquiry", "appointment_request"]).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // In production, this can forward to the office scheduling email or PMS webhook
    console.log("[Georgia Dental Center] Inbound Patient Submission:", {
      type: validatedData.formType || "inquiry",
      patient: validatedData.fullName,
      phone: validatedData.phone,
      email: validatedData.email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received by Georgia Dental Center.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
