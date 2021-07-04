/*
  Warnings:

  - You are about to drop the `Frigo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FrigoToProduit` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `frigoId` to the `Produit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_FrigoToProduit" DROP CONSTRAINT "_FrigoToProduit_A_fkey";

-- DropForeignKey
ALTER TABLE "_FrigoToProduit" DROP CONSTRAINT "_FrigoToProduit_B_fkey";

-- AlterTable
ALTER TABLE "Produit" ADD COLUMN     "frigoId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Frigo";

-- DropTable
DROP TABLE "_FrigoToProduit";

-- CreateTable
CREATE TABLE "FrigoModel" (
    "id" SERIAL NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Produit" ADD FOREIGN KEY ("frigoId") REFERENCES "FrigoModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
