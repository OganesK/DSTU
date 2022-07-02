/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `dentalDisease` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "dentalDisease_name_key" ON "dentalDisease"("name");
