import * as mongoose from 'mongoose';

export const CardapioSchema = new mongoose.Schema({

  categoria: {
    type: mongoose.Types.ObjectId,
    ref: 'Categorias'
  },
  nome: String,
  preco: Number,
  descricao: String,
  fotoUrl: String
},
  {
    collection: 'produtos',
  }
);
