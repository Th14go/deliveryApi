import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Horario } from './shared/horarios';
import { HorarioService } from './shared/horarios.service';

@Controller('horarios')
export class HorarioController {
  constructor(private horarioService: HorarioService) {}

  @Get()
  async getAll() {
    return await this.horarioService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.horarioService.getbyId(id);
  }
  @Post()
  async create(@Body() horario: Horario) {
    return await this.horarioService.create(horario);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() horario: Horario) {
    return await this.horarioService.update(id, horario);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.horarioService.delete(id);
  }
}
