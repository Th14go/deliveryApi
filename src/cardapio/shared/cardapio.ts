import { Document} from 'mongoose';

export class Cardapio extends Document {   
    nome: string;
    preco: number;
    descricao: string;
    fotoUrl: string;
}