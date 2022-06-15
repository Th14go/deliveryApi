import { UsuariosController } from './usuarios.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from 'src/usuarios/schema/usuario.schema';
import { ClientesController } from 'src/usuarios/clientes.controller';
import { UsuariosService } from 'src/usuarios/shared/usuarios.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Usuario', schema: UsuarioSchema }
        ]),
        SharedModule
    ],
    controllers: [
        UsuariosController,
        ClientesController
    ],
    providers: [
        UsuariosService
    ],
    exports: [
        UsuariosService
    ]
})
export class UsuariosModule { }
