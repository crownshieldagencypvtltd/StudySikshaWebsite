-- CreateTable
CREATE TABLE "contact_form_submissions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "educationLevel" TEXT NOT NULL,
    "educationLevelOther" TEXT,
    "stream" TEXT NOT NULL,
    "streamOther" TEXT,
    "careerPath" TEXT NOT NULL,
    "careerPathOther" TEXT,
    "preferredCollege" TEXT,
    "locationPreference" TEXT NOT NULL,
    "additionalQueries" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_form_submissions_pkey" PRIMARY KEY ("id")
);
