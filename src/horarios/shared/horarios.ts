/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export class Horario extends Document {
diaSemana: string;
horaini: string;
horafim: string;
}
