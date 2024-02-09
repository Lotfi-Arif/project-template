/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `Auth` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "address" TEXT,
    "phone" TEXT,
    "profilePictureUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("address", "createdAt", "email", "id", "name", "phone", "profilePictureUrl", "role", "status", "updatedAt", "username") SELECT "address", "createdAt", "email", "id", "name", "phone", "profilePictureUrl", "role", "status", "updatedAt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE INDEX "idx_user_email" ON "User"("email");
CREATE INDEX "idx_user_username" ON "User"("username");
CREATE TABLE "new_Auth" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Auth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Auth" ("createdAt", "id", "token", "updatedAt", "userId") SELECT "createdAt", "id", "token", "updatedAt", "userId" FROM "Auth";
DROP TABLE "Auth";
ALTER TABLE "new_Auth" RENAME TO "Auth";
CREATE UNIQUE INDEX "Auth_userId_key" ON "Auth"("userId");
CREATE UNIQUE INDEX "Auth_token_key" ON "Auth"("token");
CREATE INDEX "idx_auth_userId" ON "Auth"("userId");
CREATE INDEX "idx_auth_token" ON "Auth"("token");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
