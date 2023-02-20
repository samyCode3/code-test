-- DropForeignKey
ALTER TABLE "spells" DROP CONSTRAINT "spells_wizardId_fkey";

-- AddForeignKey
ALTER TABLE "spells" ADD CONSTRAINT "spells_wizardId_fkey" FOREIGN KEY ("wizardId") REFERENCES "Wizard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
