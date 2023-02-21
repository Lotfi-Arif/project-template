/*
  Warnings:

  - The `days` column on the `CounselorSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `timeFrom` column on the `CounselorSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `timeTo` column on the `CounselorSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hour` column on the `CounselorSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `counsellingDate` column on the `CounselorSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CounselorSession" DROP COLUMN "days",
ADD COLUMN     "days" TIMESTAMP(3),
DROP COLUMN "timeFrom",
ADD COLUMN     "timeFrom" TIMESTAMP(3),
DROP COLUMN "timeTo",
ADD COLUMN     "timeTo" TIMESTAMP(3),
DROP COLUMN "hour",
ADD COLUMN     "hour" TIMESTAMP(3),
DROP COLUMN "counsellingDate",
ADD COLUMN     "counsellingDate" TIMESTAMP(3);
