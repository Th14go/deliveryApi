import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Entrega } from './shared/entrega';
import { EntregaService } from './shared/entregas.service';

@Controller('entregas')
export class EntregaController {
  constructor(private entregaService: EntregaService) {}

  @Get()
  async getAll() {
    return await this.entregaService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.entregaService.getbyId(id);
  }
  @Post()
  async create(@Body() entrega: Entrega) {
    return await this.entregaService.create(entrega);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() entrega: Entrega) {
    return await this.entregaService.update(id, entrega);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.entregaService.delete(id);
  }
}
