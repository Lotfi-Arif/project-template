/*
  Warnings:

  - You are about to drop the column `question` on the `FAQ` table. All the data in the column will be lost.
  - Added the required column `icon` to the `FAQ` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `FAQ` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FAQ` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FAQ" DROP COLUMN "question",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "icon" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
