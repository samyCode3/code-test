-- DropForeignKey
ALTER TABLE "spells" DROP CONSTRAINT "spells_wizardId_fkey";

-- CreateTable
CREATE TABLE "elixris" (
    "id" SERIAL NOT NULL,
    "difficulty" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "elixris_pkey" PRIMARY KEY ("id")
);
