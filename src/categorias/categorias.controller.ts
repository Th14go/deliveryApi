import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAdminAuthGuard } from 'src/auth/shared/admin/jwt-admin-auth.guard';
import { Categoria } from './shared/categoria';
import { CategoriaService } from './shared/categoria.service';

@UseGuards(JwtAdminAuthGuard)
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
