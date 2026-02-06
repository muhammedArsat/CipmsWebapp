-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STUDENT', 'MENTOR', 'PLACEMENT_OFFICER');

-- CreateEnum
CREATE TYPE "Mode" AS ENUM ('ONLINE', 'OFFLINE', 'HYBRID');

-- CreateEnum
CREATE TYPE "InternshipStatus" AS ENUM ('OPEN', 'CLOSED');

-- CreateEnum
CREATE TYPE "StudentInternshipStatus" AS ENUM ('APPLIED', 'ONGOING', 'REJECTED', 'COMPLETED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT,
    "department" TEXT,
    "role" "Role" NOT NULL,
    "profileUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "userId" TEXT NOT NULL,
    "semester" INTEGER,
    "year" INTEGER,
    "cgpa" DECIMAL(3,2),
    "resumeUrl" TEXT,
    "profileCompleted" BOOLEAN NOT NULL DEFAULT false,
    "mentorId" TEXT,

    CONSTRAINT "students_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "mentors" (
    "userId" TEXT NOT NULL,
    "designation" TEXT,
    "experienceYears" INTEGER,

    CONSTRAINT "mentors_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "placement_officers" (
    "userId" TEXT NOT NULL,

    CONSTRAINT "placement_officers_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "internships" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "companyName" TEXT,
    "companyUrl" TEXT,
    "companyLogo" TEXT,
    "description" TEXT,
    "location" TEXT,
    "mode" "Mode" NOT NULL,
    "salaryPackage" TEXT,
    "minCgpa" DECIMAL(3,2),
    "status" "InternshipStatus" NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postedById" TEXT NOT NULL,

    CONSTRAINT "internships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_internships" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "internshipId" TEXT NOT NULL,
    "status" "StudentInternshipStatus" NOT NULL DEFAULT 'APPLIED',
    "certificateUrl" TEXT,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "student_internships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saved_internships" (
    "studentId" TEXT NOT NULL,
    "internshipId" TEXT NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "saved_internships_pkey" PRIMARY KEY ("studentId","internshipId")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_skills" (
    "studentId" TEXT NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "student_skills_pkey" PRIMARY KEY ("studentId","skillId")
);

-- CreateTable
CREATE TABLE "internship_skills" (
    "internshipId" TEXT NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "internship_skills_pkey" PRIMARY KEY ("internshipId","skillId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "student_internships_studentId_internshipId_key" ON "student_internships"("studentId", "internshipId");

-- CreateIndex
CREATE UNIQUE INDEX "skills_name_key" ON "skills"("name");

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "mentors"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentors" ADD CONSTRAINT "mentors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "placement_officers" ADD CONSTRAINT "placement_officers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internships" ADD CONSTRAINT "internships_postedById_fkey" FOREIGN KEY ("postedById") REFERENCES "placement_officers"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_internships" ADD CONSTRAINT "student_internships_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_internships" ADD CONSTRAINT "student_internships_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "internships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_internships" ADD CONSTRAINT "saved_internships_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_internships" ADD CONSTRAINT "saved_internships_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "internships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_skills" ADD CONSTRAINT "student_skills_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_skills" ADD CONSTRAINT "student_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internship_skills" ADD CONSTRAINT "internship_skills_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "internships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internship_skills" ADD CONSTRAINT "internship_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
