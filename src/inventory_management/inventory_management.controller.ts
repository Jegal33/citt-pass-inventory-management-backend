import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventoryManagementService } from './inventory_management.service';
import { CreateInventoryManagementDto } from './dto/create-inventory_management.dto';
import { UpdateInventoryManagementDto } from './dto/update-inventory_management.dto';

@Controller('inventory-management')
export class InventoryManagementController {
  constructor(private readonly inventoryManagementService: InventoryManagementService) {}

  //@MessagePattern("createinventoryManagement")// se comunica con la api por medio de message pattern
  @Post('create-inventoryManagement')
  create(@Body() createInventoryManagementDto: CreateInventoryManagementDto) {
    return this.inventoryManagementService.createInventoryManagement(createInventoryManagementDto);
  }

  @Get('/get-inventory')
  //@MessagePattern("findAllInventories")// se comunica con la api por medio de message pattern
  findAll() {
    return this.inventoryManagementService.findAllInventories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventoryManagementDto: UpdateInventoryManagementDto) {
    return this.inventoryManagementService.update(+id, updateInventoryManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryManagementService.remove(+id);
  }
}
