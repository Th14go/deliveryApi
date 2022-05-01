import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CategoriaSchema } from './schemas/categoria.schema';
import { CategoriaService } from './shared/categoria.service';
import { CategoriasController } from './categorias.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Categoria', schema: CategoriaSchema }]),
  ],
  providers: [CategoriaService],
  controllers: [CategoriasController],
})
export class CategoriaModule {}
