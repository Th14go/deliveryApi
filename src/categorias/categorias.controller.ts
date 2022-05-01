import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Categoria } from './shared/categoria';
import { CategoriaService } from './shared/categoria.service';

@Controller('categoria')
export class CategoriasController {
  constructor(private categoriaService: CategoriaService) {}

  @Get()
  async getAll() {
    return await this.categoriaService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.categoriaService.getbyId(id);
  }
  @Post()
  async create(@Body() categoria: Categoria) {
    return await this.categoriaService.create(categoria);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() categoria: Categoria) {
    return await this.categoriaService.update(id, categoria);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.categoriaService.delete(id);
  }
}
