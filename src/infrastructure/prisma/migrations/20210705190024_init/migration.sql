/*
  Warnings:

  - Made the column `codebarre` on table `Produit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `frigoId` on table `Produit` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Produit" ALTER COLUMN "codebarre" SET NOT NULL,
ALTER COLUMN "frigoId" SET NOT NULL;
