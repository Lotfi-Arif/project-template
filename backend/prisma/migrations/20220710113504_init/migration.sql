/*
  Warnings:

  - A unique constraint covering the columns `[counselorId]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - Made the column `counselorId` on table `Schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_counselorId_fkey";

-- AlterTable
ALTER TABLE "Counselor" ADD COLUMN     "scheduleId" TEXT;

-- AlterTable
ALTER TABLE "Schedule" ALTER COLUMN "counselorId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_counselorId_key" ON "Schedule"("counselorId");

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_counselorId_fkey" FOREIGN KEY ("counselorId") REFERENCES "Counselor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
