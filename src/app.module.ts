import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './categories/category.module';
import { CardapioModule } from './cardapio/cardapio.module';
import { EntregaModule } from './entregas/entregas.module';
import { HorarioModule } from './horarios/horarios.module';

@Module({
  imports: [
    CategoryModule,
    CardapioModule,
    EntregaModule,
    HorarioModule,
    MongooseModule.forRoot(
      'mongodb+srv://delivery:th14go@L21@cluster0.ybtur.mongodb.net/delivery?retryWrites=true&w=majority',
      { useFIndAndModify: true }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
