/*
  Warnings:

  - A unique constraint covering the columns `[SKU]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `SKU` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "SKU" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_SKU_key" ON "Product"("SKU");
