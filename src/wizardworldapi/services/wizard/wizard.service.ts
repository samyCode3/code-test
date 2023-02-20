import { Injectable } from '@nestjs/common';
import { CreateWizard } from '../../dto/wizard.dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class WizardService {
  private fakeData = prisma.wizard;
  fetchData() {
    return this.fakeData.findMany();
  }
  async createWizard(payload: CreateWizard) {
    if (!payload) {
      return {
        ok: false,
        status: 403,
        message: 'All field are required',
      };
    }
    const data = await this.fakeData.create({ data: payload });
    return data;
  }
  async updateWizard(id: any, payload: CreateWizard) {
    if (!payload) {
      return {
        ok: false,
        status: 403,
        message: 'All field are required',
      };
    }
    const update = await this.fakeData.update({
      where: {
        id: id,
      },
      data: payload,
    });
    if (!update) {
      return {
        ok: false,
        message: 'No update made',
        status: 404,
      };
    }
    return update;
  }
  async deleteWizards(payload) {
    const deleteWix = await this.fakeData.delete({ where: { id: payload } });
    if (!deleteWix) {
      return {
        ok: false,
        message: 'This wizard does not exist annyone',
        status: 404,
      };
    }
    return deleteWix;
  }
  async getWizardByNames(payload) {
    if (!payload) {
      return {
        ok: false,
        status: 403,
        message: 'All field are required',
      };
    }
    const search = await this.fakeData.findMany({
      where: {
        first_name: payload.first_name,
        last_name: payload.last_name,
      },
      take: 3,
    });
    if (!search) {
      return {
        ok: false,
        message: 'No search for this name found',
        status: 404,
      };
    }
    return search;
  }
}
