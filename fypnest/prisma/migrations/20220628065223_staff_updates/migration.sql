/*
  Warnings:

  - You are about to drop the column `staffId` on the `Staff` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[staffMatrix]` on the table `Staff` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Staff_staffId_key";

-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "staffId",
ADD COLUMN     "staffMatrix" TEXT,
ALTER COLUMN "faculty" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Staff_staffMatrix_key" ON "Staff"("staffMatrix");
