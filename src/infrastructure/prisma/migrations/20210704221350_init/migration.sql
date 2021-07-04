/*
  Warnings:

  - You are about to drop the column `dateDePeremtion` on the `Produit` table. All the data in the column will be lost.
  - Added the required column `dateDePeremption` to the `Produit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produit" DROP COLUMN "dateDePeremtion",
ADD COLUMN     "dateDePeremption" TIMESTAMP(3) NOT NULL;
