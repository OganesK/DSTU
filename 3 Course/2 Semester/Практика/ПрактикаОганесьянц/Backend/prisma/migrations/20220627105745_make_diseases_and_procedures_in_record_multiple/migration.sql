/*
  Warnings:

  - You are about to drop the column `diseaseId` on the `medicalRecord` table. All the data in the column will be lost.
  - You are about to drop the column `procedureId` on the `medicalRecord` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "medicalRecord" DROP CONSTRAINT "medicalRecord_diseaseId_fkey";

-- DropForeignKey
ALTER TABLE "medicalRecord" DROP CONSTRAINT "medicalRecord_procedureId_fkey";

-- AlterTable
ALTER TABLE "medicalRecord" DROP COLUMN "diseaseId",
DROP COLUMN "procedureId";

-- CreateTable
CREATE TABLE "_dentalDiseaseTomedicalRecord" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_dentalProcedureTomedicalRecord" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_dentalDiseaseTomedicalRecord_AB_unique" ON "_dentalDiseaseTomedicalRecord"("A", "B");

-- CreateIndex
CREATE INDEX "_dentalDiseaseTomedicalRecord_B_index" ON "_dentalDiseaseTomedicalRecord"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_dentalProcedureTomedicalRecord_AB_unique" ON "_dentalProcedureTomedicalRecord"("A", "B");

-- CreateIndex
CREATE INDEX "_dentalProcedureTomedicalRecord_B_index" ON "_dentalProcedureTomedicalRecord"("B");

-- AddForeignKey
ALTER TABLE "_dentalDiseaseTomedicalRecord" ADD CONSTRAINT "_dentalDiseaseTomedicalRecord_A_fkey" FOREIGN KEY ("A") REFERENCES "dentalDisease"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_dentalDiseaseTomedicalRecord" ADD CONSTRAINT "_dentalDiseaseTomedicalRecord_B_fkey" FOREIGN KEY ("B") REFERENCES "medicalRecord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_dentalProcedureTomedicalRecord" ADD CONSTRAINT "_dentalProcedureTomedicalRecord_A_fkey" FOREIGN KEY ("A") REFERENCES "dentalProcedure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_dentalProcedureTomedicalRecord" ADD CONSTRAINT "_dentalProcedureTomedicalRecord_B_fkey" FOREIGN KEY ("B") REFERENCES "medicalRecord"("id") ON DELETE CASCADE ON UPDATE CASCADE;
