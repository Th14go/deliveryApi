import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardapioController } from './cardapio.controller';

import { CardapioSchema } from './schema/cardapio.schema';
import { CardapioService } from './shared/cardapio.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cardapio', schema: CardapioSchema }]),
  ],
  providers: [CardapioService],
  controllers: [CardapioController],
})
export class CardapioModule {}
