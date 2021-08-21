/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Entrega } from './entrega';


@Injectable()
export class EntregaService {

    constructor(@InjectModel('Entrega') private readonly entregaModel: Model<Entrega>) { }


    async getAll() {
        return await this.entregaModel.find().exec();

    }

    async getbyId(id: string) {
        return await this.entregaModel.findById(id).exec();
    }

    async create(entrega: Entrega) {
        const createdEntrega = new this.entregaModel(entrega);
        return await createdEntrega.save();
    }

    async update(id: string, entrega: Entrega) {
        return await this.entregaModel.findByIdAndUpdate(id, entrega, { new : true});
    }

    async delete(id: string) {
        return await this.entregaModel.deleteOne({_id: id}).exec();
    }
}
