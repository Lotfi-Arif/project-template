/*
  Warnings:

  - You are about to drop the column `Schedule` on the `Counselor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Counselor" DROP COLUMN "Schedule";

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "counselorId" TEXT;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_counselorId_fkey" FOREIGN KEY ("counselorId") REFERENCES "Counselor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
