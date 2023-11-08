/*
  Warnings:

  - A unique constraint covering the columns `[passwordResetToken]` on the table `Auth` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Auth" ADD COLUMN     "passwordResetExpires" TIMESTAMP(3),
ADD COLUMN     "passwordResetToken" TEXT;

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "couponId" TEXT,
ADD COLUMN     "discountId" TEXT;

-- CreateTable
CREATE TABLE "Discount" (
    "id" TEXT NOT NULL,
    "percentage" DOUBLE PRECISION,
    "flatAmount" DOUBLE PRECISION,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "percentage" DOUBLE PRECISION,
    "flatAmount" DOUBLE PRECISION,
    "oneTimeUse" BOOLEAN NOT NULL DEFAULT true,
    "expiration" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_code_key" ON "Coupon"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Auth_passwordResetToken_key" ON "Auth"("passwordResetToken");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_discountId_fkey" FOREIGN KEY ("discountId") REFERENCES "Discount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
