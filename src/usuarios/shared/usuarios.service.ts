import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUsuarioModel } from './iusuario.model';
import { IUsuarioRequest } from './iusuario.request';
import { Usuario } from './usuario';
import { UsuarioTipoEnum } from './usuario.tipo.enum';
import { CryptService } from '../../shared/services/crypt.service';

@Injectable()
export class UsuariosService {


    constructor(
        @InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>,
        private cryptService: CryptService
    ) { }


    async getById(id: string) {
        return await this.usuarioModel.findById(id)
            .select('nome email tipo telefone')
            .exec();
    }

    async getByEmail(email: string) {
        return await this.usuarioModel.findOne({ email })
            .exec();
    }

    async createUser(user: IUsuarioRequest) {
        return this.create({
            nome: user.nome,
            email: user.email,
            senha: user.senha,
            tipo: UsuarioTipoEnum.admin
        })
    }

    async createCustomer(user: IUsuarioRequest) {
        const createdUser = await this.create({
            nome: user.nome,
            email: user.email,
            senha: user.senha,
            tipo: UsuarioTipoEnum.cliente
        });
        // se criou o usuário e tem endereço
        // if (createdUser && user.address) {
        //     const { cep, street, number, complement, neighborhood } = user.address;
        //     await this.addressService.save(createdUser._id, cep, street, number, complement, neighborhood);
        // }
        return createdUser;
    }

    private async create(usuarioModel: IUsuarioModel) {
        const result = await this.usuarioModel.find({ email: usuarioModel.email }).exec();
        if (result.length > 0) {
            throw new Error('O email informado já está sendo usado.')
        }
        let { nome, email, senha, tipo } = usuarioModel;
        // encriptar a senha
        senha = await this.cryptService.crypt(senha);

        const createdUser = new this.usuarioModel({ nome, email, senha, tipo });
        return await createdUser.save();
    }

    async update(id: string, user: IUsuarioRequest) {
        const userEntity = await this.getById(id);
        userEntity.nome = user.nome;
        
        await this.usuarioModel.updateOne({ _id: id }, userEntity).exec();
        // se tem endereço
        // if (user.address) {
        //     const { cep, street, number, complement, neighborhood } = user.address;
        //     await this.addressService.save(userEntity._id, cep, street, number, complement, neighborhood);
        // }

        return userEntity;
    }

}
