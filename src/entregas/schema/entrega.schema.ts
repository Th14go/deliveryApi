import * as mongoose from 'mongoose';

export const EntregaSchema = new mongoose.Schema({
  bairro: String,
  tempo: Number,
  valor: Number,
});
