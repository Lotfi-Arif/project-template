-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('Married', 'Single', 'Widowed');

-- AlterTable
ALTER TABLE "CounselorSession" ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "maritalStatus" "MaritalStatus",
ADD COLUMN     "race" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "zipCode" TEXT;
