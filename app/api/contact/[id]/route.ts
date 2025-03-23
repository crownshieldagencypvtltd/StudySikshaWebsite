import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    const submission = await prisma.contactFormSubmission.findUnique({
      where: {
        id: id,
      },
    })

    if (!submission) {
      return NextResponse.json(
        {
          success: false,
          message: "Submission not found",
        },
        { status: 404 },
      )
    }

    return NextResponse.json({ submission })
  } catch (error) {
    console.error("Error fetching submission:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching the submission",
      },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Check if the submission exists
    const submission = await prisma.contactFormSubmission.findUnique({
      where: {
        id: id,
      },
    })

    if (!submission) {
      return NextResponse.json(
        {
          success: false,
          message: "Submission not found",
        },
        { status: 404 },
      )
    }

    // Delete the submission
    await prisma.contactFormSubmission.delete({
      where: {
        id: id,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Submission deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting submission:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while deleting the submission",
      },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}

