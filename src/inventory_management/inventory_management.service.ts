import { Injectable } from '@nestjs/common';
import { CreateInventoryManagementDto } from './dto/create-inventory_management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory_management.dto';
import { InjectModel } from '@nestjs/mongoose';
import { InventoryManagement } from './entities/inventory_management.entity';
import { Model } from 'mongoose';

@Injectable()
export class InventoryManagementService {
  constructor(@InjectModel(InventoryManagement.name) private readonly inventoryManagementModel: Model<InventoryManagement>) {}

  // create(createInventoryManagementDto: CreateInventoryManagementDto) {
  //   return 'This action adds a new inventoryManagement';
  // }

  async createInventoryManagement(createInventoryManagementDto: CreateInventoryManagementDto): Promise<InventoryManagement> {
    const createdInventoryManagement = new this.inventoryManagementModel(createInventoryManagementDto).save();
    console.log(createInventoryManagementDto)
    return createdInventoryManagement;
  }

  async findAllInventories() : Promise<InventoryManagement[]>{
    return await this.inventoryManagementModel.find().exec();;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryManagement`;
  }

  update(id: number, updateInventoryManagementDto: UpdateInventoryManagementDto) {
    return `This action updates a #${id} inventoryManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryManagement`;
  }
}
