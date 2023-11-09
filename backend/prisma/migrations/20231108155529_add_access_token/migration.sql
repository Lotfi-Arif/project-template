-- AlterTable
ALTER TABLE "Auth" ALTER COLUMN "refreshToken" DROP NOT NULL,
ALTER COLUMN "accessToken" DROP NOT NULL;
