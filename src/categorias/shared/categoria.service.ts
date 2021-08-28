/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categoria } from './categoria';

@Injectable()
export class CategoriaService {

    constructor(@InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>) { }


    async getAll() {
        return await this.categoriaModel.find().exec();

    }

    async getbyId(id: string) {
        return await this.categoriaModel.findById(id).exec();
    }

    async create(categoria: Categoria) {
        const createdCategoria = new this.categoriaModel(categoria);
        return await createdCategoria.save();
    }

    async update(id: string, categoria: Categoria) {
        return await this.categoriaModel.findByIdAndUpdate(id, categoria, { new : true});
    }

    async delete(id: string) {
        return await this.categoriaModel.deleteOne({_id: id}).exec();
    }
}
