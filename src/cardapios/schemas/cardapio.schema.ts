import * as mongoose from 'mongoose';

export const CardapioSchema = new mongoose.Schema(
  {
    categoria: mongoose.Types.ObjectId,
    nome: String,
    preco: Number,
    descricao: String,
    fotoUrl: String,
  },
  {
    collection: 'produtos',
  }
);
