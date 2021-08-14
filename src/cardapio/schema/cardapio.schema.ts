import * as mongoose from 'mongoose';

export const CardapioSchema = new mongoose.Schema({
    nome: String,
    preco: Number,
    descricao: String,
    fotoUrl: String,
});