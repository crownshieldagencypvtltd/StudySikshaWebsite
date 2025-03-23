import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Count total submissions
    const count = await prisma.contactFormSubmission.count()

    // Get counts by education level
    const educationLevelCounts = await prisma.contactFormSubmission.groupBy({
      by: ["educationLevel"],
      _count: {
        educationLevel: true,
      },
    })

    // Get counts by career path
    const careerPathCounts = await prisma.contactFormSubmission.groupBy({
      by: ["careerPath"],
      _count: {
        careerPath: true,
      },
    })

    return NextResponse.json({
      success: true,
      totalCount: count,
      educationLevelCounts,
      careerPathCounts,
    })
  } catch (error) {
    console.error("Error fetching submission counts:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching submission counts",
      },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}

