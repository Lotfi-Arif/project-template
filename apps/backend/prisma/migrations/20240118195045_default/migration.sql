/*
  Warnings:

  - You are about to drop the column `productId` on the `Cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Auth` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cart" ("createdAt", "id", "updatedAt", "userId") SELECT "createdAt", "id", "updatedAt", "userId" FROM "Cart";
DROP TABLE "Cart";
ALTER TABLE "new_Cart" RENAME TO "Cart";
CREATE UNIQUE INDEX "Cart_userId_key" ON "Cart"("userId");
CREATE INDEX "idx_cart_userId" ON "Cart"("userId");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "address" TEXT,
    "phone" TEXT,
    "profilePictureUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "id", "name", "password", "updatedAt") SELECT "createdAt", "email", "id", "name", "password", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE INDEX "idx_user_email" ON "User"("email");
CREATE INDEX "idx_user_username" ON "User"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE INDEX "idx_admin_email" ON "Admin"("email");

-- CreateIndex
CREATE INDEX "idx_adminAuth_adminId" ON "AdminAuth"("adminId");

-- CreateIndex
CREATE INDEX "idx_adminAuth_token" ON "AdminAuth"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Auth_userId_key" ON "Auth"("userId");

-- CreateIndex
CREATE INDEX "idx_auth_userId" ON "Auth"("userId");

-- CreateIndex
CREATE INDEX "idx_auth_token" ON "Auth"("token");

-- CreateIndex
CREATE INDEX "idx_category_name" ON "Category"("name");

-- CreateIndex
CREATE INDEX "idx_itemInCart_cartId" ON "ItemInCart"("cartId");

-- CreateIndex
CREATE INDEX "idx_itemInCart_productId" ON "ItemInCart"("productId");

-- CreateIndex
CREATE INDEX "idx_itemInOrder_orderId" ON "ItemInOrder"("orderId");

-- CreateIndex
CREATE INDEX "idx_itemInOrder_productId" ON "ItemInOrder"("productId");

-- CreateIndex
CREATE INDEX "idx_order_userId" ON "Order"("userId");

-- CreateIndex
CREATE INDEX "idx_order_price" ON "Order"("price");

-- CreateIndex
CREATE INDEX "idx_product_name" ON "Product"("name");

-- CreateIndex
CREATE INDEX "idx_product_price" ON "Product"("price");

-- CreateIndex
CREATE INDEX "idx_productImage_productId" ON "ProductImage"("productId");
