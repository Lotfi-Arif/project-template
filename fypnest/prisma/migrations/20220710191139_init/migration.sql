/*
  Warnings:

  - You are about to drop the column `password` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Counselor` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Staff` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Student` table. All the data in the column will be lost.
  - Added the required column `iCard` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iCard` to the `Counselor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iCard` to the `Staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iCard` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "password",
ADD COLUMN     "iCard" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Counselor" DROP COLUMN "password",
ADD COLUMN     "iCard" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "password",
ADD COLUMN     "iCard" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "password",
ADD COLUMN     "iCard" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;
