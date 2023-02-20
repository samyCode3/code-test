-- AlterTable
ALTER TABLE "elixris" ALTER COLUMN "difficulty" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "spells" ADD CONSTRAINT "spells_wizardId_fkey" FOREIGN KEY ("wizardId") REFERENCES "Wizard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
