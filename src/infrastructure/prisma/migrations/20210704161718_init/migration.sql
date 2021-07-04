-- CreateTable
CREATE TABLE "Aliment" (
    "codebarre" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "imageUrl" TEXT,
    "categorie" TEXT,
    "marque" TEXT,

    PRIMARY KEY ("codebarre")
);

-- CreateTable
CREATE TABLE "Produit" (
    "id" SERIAL NOT NULL,
    "codebarre" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "dateDePeremtion" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frigo" (
    "id" SERIAL NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FrigoToProduit" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FrigoToProduit_AB_unique" ON "_FrigoToProduit"("A", "B");

-- CreateIndex
CREATE INDEX "_FrigoToProduit_B_index" ON "_FrigoToProduit"("B");

-- AddForeignKey
ALTER TABLE "Produit" ADD FOREIGN KEY ("codebarre") REFERENCES "Aliment"("codebarre") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FrigoToProduit" ADD FOREIGN KEY ("A") REFERENCES "Frigo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FrigoToProduit" ADD FOREIGN KEY ("B") REFERENCES "Produit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
