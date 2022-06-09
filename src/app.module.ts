import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { CategoriaModule } from './categorias/categoria.module';
import { CardapioModule } from './cardapios/cardapio.module';
import { EntregaModule } from './entregas/entregas.module';
import { HorarioModule } from './horarios/horarios.module';
import { join } from 'path';

@Module({
  imports: [
    CategoriaModule,
    CardapioModule,
    EntregaModule,
    HorarioModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://delivery:th14go@L22@cluster0.ybtur.mongodb.net/delivery?retryWrites=true&w=majority',
      { useFIndAndModify: true }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
