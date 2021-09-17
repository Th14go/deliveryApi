/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export class Entrega extends Document {
  bairro: string;
  tempo: number;
  gratis: boolean;
  valor: number;
}
