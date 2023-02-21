/*
  Warnings:

  - You are about to drop the column `days` on the `CounselorSession` table. All the data in the column will be lost.
  - You are about to drop the column `hour` on the `CounselorSession` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CounselorSession" DROP COLUMN "days",
DROP COLUMN "hour";
