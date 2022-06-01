/*
  Warnings:

  - You are about to drop the column `imageId` on the `Event` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_imageId_fkey";

-- DropIndex
DROP INDEX "Event_imageId_key";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "imageId",
ADD COLUMN     "eventImageURL" TEXT;
