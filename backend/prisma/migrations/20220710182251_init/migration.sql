/*
  Warnings:

  - You are about to drop the column `email` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Counselor` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Counselor` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Staff` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Staff` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Admin_email_key";

-- DropIndex
DROP INDEX "Counselor_email_key";

-- DropIndex
DROP INDEX "Staff_email_key";

-- DropIndex
DROP INDEX "Student_email_key";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "email",
DROP COLUMN "password";

-- AlterTable
ALTER TABLE "Counselor" DROP COLUMN "email",
DROP COLUMN "password";

-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "email",
DROP COLUMN "password";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "email",
DROP COLUMN "password";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
