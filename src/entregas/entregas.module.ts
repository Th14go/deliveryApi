import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EntregaController } from './entregas.controller';
import { EntregaSchema } from './schemas/entrega.schema';
import { EntregaService } from './shared/entregas.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Entrega', schema: EntregaSchema }]),
  ],
  providers: [EntregaService],
  controllers: [EntregaController],
})
export class EntregaModule {}
