import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

// Validation schema matching the form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid WhatsApp number." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .optional()
    .or(z.literal("")),
  educationLevel: z
    .string()
    .min(1, { message: "Please select your current education level." }),
  educationLevelOther: z.string().optional(),
  stream: z.string().min(1, { message: "Please select your stream/subject." }),
  streamOther: z.string().optional(),
  careerPath: z
    .string()
    .min(1, {
      message: "Please select your interested course or career path.",
    }),
  careerPathOther: z.string().optional(),
  preferredCollege: z.string().optional(),
  locationPreference: z
    .string()
    .min(1, { message: "Please select your location preference." }),
  additionalQueries: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the request body against our schema
    const validatedData = contactFormSchema.parse(body);
    console.log(
      "Validated data:------------------------------------------->",
      validatedData
    );
    console.log(validatedData.name);
    console.log(validatedData.phone);
    console.log(validatedData.email);
    console.log(validatedData.educationLevel);
    console.log(validatedData.educationLevelOther);
    console.log(validatedData.stream);
    console.log(validatedData.streamOther);
    console.log(validatedData.careerPath);
    console.log(validatedData.careerPathOther);
    console.log(validatedData.preferredCollege);
    console.log(validatedData.locationPreference);
    console.log(validatedData.additionalQueries);
    // Create a new contact form submission in the database
    const submission = await prisma.contactFormSubmission.create({
      data: {
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email || null,
        educationLevel: validatedData.educationLevel,
        educationLevelOther: validatedData.educationLevelOther || null,
        stream: validatedData.stream,
        streamOther: validatedData.streamOther || null,
        careerPath: validatedData.careerPath,
        careerPathOther: validatedData.careerPathOther || null,
        preferredCollege: validatedData.preferredCollege || null,
        locationPreference: validatedData.locationPreference,
        additionalQueries: validatedData.additionalQueries || null,
        submittedAt: new Date(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        submissionId: submission.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while submitting the form",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    // This endpoint could be used for admin purposes to retrieve submissions
    // You might want to add authentication before exposing this
    const submissions = await prisma.contactFormSubmission.findMany({
      orderBy: {
        submittedAt: "desc",
      },
    });

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching submissions",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
