/*
  Warnings:

  - You are about to drop the column `scheduleDate` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the `_CounselorSessionToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `CounselorSession` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `counselorId` to the `CounselorSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `days` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeFrom` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeTo` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CounselorSessionToUser" DROP CONSTRAINT "_CounselorSessionToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CounselorSessionToUser" DROP CONSTRAINT "_CounselorSessionToUser_B_fkey";

-- AlterTable
ALTER TABLE "CounselorSession" ADD COLUMN     "counsellingReason" TEXT,
ADD COLUMN     "counselorId" TEXT NOT NULL,
ADD COLUMN     "staffId" TEXT,
ADD COLUMN     "studentId" TEXT,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "scheduleDate",
ADD COLUMN     "days" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "timeFrom" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "timeTo" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "_CounselorSessionToUser";

-- CreateIndex
CREATE UNIQUE INDEX "CounselorSession_userId_key" ON "CounselorSession"("userId");

-- AddForeignKey
ALTER TABLE "CounselorSession" ADD CONSTRAINT "CounselorSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CounselorSession" ADD CONSTRAINT "CounselorSession_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CounselorSession" ADD CONSTRAINT "CounselorSession_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CounselorSession" ADD CONSTRAINT "CounselorSession_counselorId_fkey" FOREIGN KEY ("counselorId") REFERENCES "Counselor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
