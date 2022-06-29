/*
  Warnings:

  - You are about to drop the column `firstName` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Counselor` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Counselor` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Staff` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Staff` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "firstName",
DROP COLUMN "lastName";

-- AlterTable
ALTER TABLE "Counselor" DROP COLUMN "firstName",
DROP COLUMN "lastName";

-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "firstName",
DROP COLUMN "lastName";
