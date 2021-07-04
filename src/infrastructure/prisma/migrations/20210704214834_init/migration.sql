/*
  Warnings:

  - You are about to drop the `FrigoModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Produit" DROP CONSTRAINT "Produit_frigoId_fkey";

-- DropTable
DROP TABLE "FrigoModel";

-- CreateTable
CREATE TABLE "Frigo" (
    "id" SERIAL NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Produit" ADD FOREIGN KEY ("frigoId") REFERENCES "Frigo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
