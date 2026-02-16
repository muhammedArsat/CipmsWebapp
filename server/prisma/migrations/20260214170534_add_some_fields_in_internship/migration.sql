/*
  Warnings:

  - Added the required column `requirement` to the `internships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "internships" ADD COLUMN     "applicationDeadline" TIMESTAMP(3),
ADD COLUMN     "requirement" TEXT NOT NULL;
