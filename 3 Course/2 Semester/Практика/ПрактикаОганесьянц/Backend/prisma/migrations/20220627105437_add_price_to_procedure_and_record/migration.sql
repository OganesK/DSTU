/*
  Warnings:

  - The values [dentisn] on the enum `userRole` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `dentalProcedure` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `medicalRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "userRole_new" AS ENUM ('client', 'dentist');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "userRole_new" USING ("role"::text::"userRole_new");
ALTER TYPE "userRole" RENAME TO "userRole_old";
ALTER TYPE "userRole_new" RENAME TO "userRole";
DROP TYPE "userRole_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'client';
COMMIT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "dentalProcedure" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "medicalRecord" ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL;
