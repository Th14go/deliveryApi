import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HorarioController } from './horarios.controlles';
import { HorarioService } from './shared/horarios.service';
import { HorarioSchema } from './schema/horarios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Horario', schema: HorarioSchema }]),
  ],
  providers: [HorarioService],
  controllers: [HorarioController],
})
export class HorarioModule {}
