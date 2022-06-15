import { filenameGenerator } from './shared/filename-generator';
import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Cardapio } from './shared/cardapio';
import { CardapioService } from './shared/cardapio.service';
import { fileFilter } from './shared/file-filter';
import {Request} from 'express';
import { JwtClienteAuthGuard } from 'src/auth/shared/cliente/jwt-cliente-auth.guard';
import { JwtAdminAuthGuard } from 'src/auth/shared/admin/jwt-admin-auth.guard';

@Controller('cardapio')
export class CardapioController {
  constructor(private cardapioService: CardapioService) { }

  @Get()
  async getAll(@Req() req: Request) {
    return await this.cardapioService.getAll(req.query);
  }

  @UseGuards(JwtClienteAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.cardapioService.getbyId(id);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: filenameGenerator
    }),
    fileFilter: fileFilter
  }))
  async create(@Body() cardapio: Cardapio, @UploadedFile() file: Express.Multer.File) {
    return await this.cardapioService.create(cardapio, file);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Put(':id')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: filenameGenerator
    }),
    fileFilter: fileFilter
  }))
  async update(@Param('id') id: string, @Body() cardapio: Cardapio, @UploadedFile() file: Express.Multer.File) {
    return await this.cardapioService.update(id, cardapio, file);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.cardapioService.delete(id);
  }
}
