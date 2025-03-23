import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

// This is a simple admin API to get all submissions
// In a production app, you would add authentication to this endpoint

const prisma = new PrismaClient()

export async function GET() {
  try {
    const submissions = await prisma.contactFormSubmission.findMany({
      orderBy: {
        submittedAt: "desc",
      },
    })

    return NextResponse.json({
      success: true,
      submissions,
    })
  } catch (error) {
    console.error("Error fetching submissions:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching submissions",
      },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}

