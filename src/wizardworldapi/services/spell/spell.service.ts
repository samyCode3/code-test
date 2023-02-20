import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class SpellService {
  private spellsData = prisma.spells;

  async createSpell(payload) {
    const create = await this.spellsData.create({ data: payload });
    if (!create) {
      return {
        status: 403,
        ok: false,
        message: 'Spells was not created',
      };
    }
    return create;
  }

  async getSpell() {
    const data = await this.spellsData.findMany();
    return data;
  }
  async updateSpell(payload) {
    const data = await this.spellsData.update({
      where: {
        id: payload,
      },
      data: payload,
    });
    return data;
  }
  async deleteSpell(payload) {
    const data = await this.spellsData.delete({ where: { id: payload } });
    if (!data) {
      return {
        status: 400,
        ok: false,
        message: 'Spells was not Deleted',
      };
    }
    return data;
  }
  async searchSpell(payload) {
    if (!payload) {
      return {
        ok: false,
        status: 403,
        message: 'All field are required',
      };
    }
    const data = await this.spellsData.findMany({
      include: {
        wizard: {
          select: {
            first_name: true,
            last_name: true,
          },
        },
      },
      where: {
        wizardId: payload,
      },
      orderBy: {
        id: 'asc',
      },
      take: 10,
    });
    return data;
  }
}
