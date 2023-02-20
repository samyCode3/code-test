-- CreateTable
CREATE TABLE "spells" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "spells" TEXT,
    "wizardId" INTEGER NOT NULL,

    CONSTRAINT "spells_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "spells" ADD CONSTRAINT "spells_wizardId_fkey" FOREIGN KEY ("wizardId") REFERENCES "Wizard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
