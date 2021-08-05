import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './categories/category.module';

@Module({
  imports: [
    CategoryModule,
    MongooseModule.forRoot('mongodb+srv://delivery:th14go@L21@cluster0.ybtur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
