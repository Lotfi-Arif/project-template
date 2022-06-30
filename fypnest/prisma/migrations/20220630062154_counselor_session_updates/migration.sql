/*
  Warnings:

  - The `gender` column on the `CounselorSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `maritalStatus` column on the `CounselorSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CounselorSession" DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT,
DROP COLUMN "maritalStatus",
ADD COLUMN     "maritalStatus" TEXT;
