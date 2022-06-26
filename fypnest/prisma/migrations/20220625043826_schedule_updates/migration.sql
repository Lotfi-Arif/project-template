/*
  Warnings:

  - Added the required column `counsellingDate` to the `CounselorSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleId` to the `CounselorSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CounselorSession" ADD COLUMN     "counsellingDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "scheduleId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "hour" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "CounselorSession" ADD CONSTRAINT "CounselorSession_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
