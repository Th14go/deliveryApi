import { CategoriaSchema } from './../categorias/schemas/categoria.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardapioController } from './cardapio.controller';

import { CardapioSchema } from './schemas/cardapio.schema';
import { CardapioService } from './shared/cardapio.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Cardapio', schema: CardapioSchema} ,
      {name: 'Categorias', schema: CategoriaSchema}
      ]),
  ],
  providers: [CardapioService],
  controllers: [CardapioController],
})
export class CardapioModule {}
