/*
  Warnings:

  - The primary key for the `internship_skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `student_skills` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "internship_skills" DROP CONSTRAINT "internship_skills_skillId_fkey";

-- DropForeignKey
ALTER TABLE "student_skills" DROP CONSTRAINT "student_skills_skillId_fkey";

-- AlterTable
ALTER TABLE "internship_skills" DROP CONSTRAINT "internship_skills_pkey",
ALTER COLUMN "skillId" SET DATA TYPE TEXT,
ADD CONSTRAINT "internship_skills_pkey" PRIMARY KEY ("internshipId", "skillId");

-- AlterTable
ALTER TABLE "skills" DROP CONSTRAINT "skills_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "skills_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "skills_id_seq";

-- AlterTable
ALTER TABLE "student_skills" DROP CONSTRAINT "student_skills_pkey",
ALTER COLUMN "skillId" SET DATA TYPE TEXT,
ADD CONSTRAINT "student_skills_pkey" PRIMARY KEY ("studentId", "skillId");

-- AddForeignKey
ALTER TABLE "student_skills" ADD CONSTRAINT "student_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internship_skills" ADD CONSTRAINT "internship_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
