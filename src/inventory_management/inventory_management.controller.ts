import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventoryManagementService } from './inventory_management.service';
import { CreateInventoryManagementDto } from './dto/create-inventory_management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory_management.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('inventory-management')
export class InventoryManagementController {
  constructor(private readonly inventoryManagementService: InventoryManagementService) {}


  @Post('create-inventory')
  @MessagePattern("createinventory")// se comunica con la api por medio de message pattern
  create(@Body() createInventoryManagementDto: CreateInventoryManagementDto) {
    return this.inventoryManagementService.createInventoryManagement(createInventoryManagementDto);
  }

  @Get('/find-all-inventories')
  @MessagePattern("findAllInventories")
  findAll() {
    return this.inventoryManagementService.findAllInventories();
  }
  
  @Get('/find-one-inventory/:id') 
  @MessagePattern('findOneInventory')
  findOne(id: string) {
    return this.inventoryManagementService.findOneInventory(id);
  }

  @Patch('/update-inventory/:id')
  @MessagePattern('updateInventory')
  updateUser(payload) { 
    console.log(payload) 
    return this.inventoryManagementService.updateInventory(payload.id, payload.updateUserDto);
  }
  
  @Delete('/delete-inventory/:id')
  @MessagePattern('removeInventory')
  remove(id: string) {
    return this.inventoryManagementService.removeInventorty(id);
  }
}
