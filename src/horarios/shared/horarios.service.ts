/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Horario } from './horarios';



@Injectable()
export class HorarioService {

    constructor(@InjectModel('Horario') private readonly horarioModel: Model<Horario>) { }


    async getAll() {
        return await this.horarioModel.find().exec();

    }

    async getbyId(id: string) {
        return await this.horarioModel.findById(id).exec();
    }

    async create(horario: Horario) {
        const createdHorario = new this.horarioModel(horario);
        return await createdHorario.save();
    }

    async update(id: string, horario: Horario) {
        return await this.horarioModel.findByIdAndUpdate(id, horario, { new : true});
    }

    async delete(id: string) {
        return await this.horarioModel.deleteOne({_id: id}).exec();
    }
}
