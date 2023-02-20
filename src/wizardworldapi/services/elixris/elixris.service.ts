import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class ElixrisService {
  private elixrisData = prisma.elixris;

  async createElixris(payload) {
    const create = await this.elixrisData.create({ data: payload });
    if (!create) {
      return {
        status: 403,
        ok: false,
        message: 'elixris was not created',
      };
    }
    return create;
  }

  async getElixris() {
    const data = await this.elixrisData.findMany();
    return data;
  }

  async updateElixris(id, payload) {
    const data = await this.elixrisData.update({
      where: {
        id: id,
      },
      data: payload,
    });
    return data;
  }
  async deleteElixris(payload) {
    const data = await this.elixrisData.delete({ where: { id: payload } });
    if (!data) {
      return {
        status: 400,
        ok: false,
        message: 'elixris was not Deleted',
      };
    }
    return data;
  }
  async searchElixrisByDifficulty(payload) {
    const data = await this.elixrisData.findMany({
      where: { difficulty: payload.difficulty },
    });
    return data;
  }
}
