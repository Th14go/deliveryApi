import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cardapio } from './cardapio';

import { unlinkSync } from 'fs';
import { join } from 'path';

@Injectable()
export class CardapioService {
  constructor(
    @InjectModel('Cardapio') private readonly cardapioModel: Model<Cardapio>
  ) {}

  async getAll(query: any) {
    const hasFilterByName = query.nome? true : false;
    const filter= {}
    if (hasFilterByName) {
      filter['nome'] = { $regex: '.*' + query.nome + '.*', $options: 'i' }
    }

    return await this.cardapioModel.find(filter).populate('categoria').exec();
  }

  async getbyId(id: string) {
    return await this.cardapioModel.findById(id).exec();
  }

  private getFotoUrl(filename: string){
    return `http://localhost:3000/${filename}`;
  }

  async create(cardapio: Cardapio, file: Express.Multer.File) {
    if (file){
      cardapio.fotoUrl = this.getFotoUrl(file.filename);
    }
    const createdCardapio = new this.cardapioModel(cardapio);
    return await createdCardapio.save();
  }

  async update(id: string, cardapio: Cardapio, file: Express.Multer.File) {
    if (file){
      const produto = await this.getbyId(id);
      if (produto.fotoUrl) {
        const imageName = produto.fotoUrl.substring(produto.fotoUrl.lastIndexOf('/') + 1);
        const imagePath = join(__dirname, '..', '..', '..', 'uploads', imageName);
        unlinkSync(imagePath);
      }
      cardapio.fotoUrl = this.getFotoUrl(file.filename);
    }
    return await this.cardapioModel.findByIdAndUpdate(id, cardapio, {
      new: true,
    });
  }

  async delete(id: string) {
    return await this.cardapioModel.deleteOne({ _id: id }).exec();
  }
}
