import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAdminAuthGuard } from 'src/auth/shared/admin/jwt-admin-auth.guard';
import { IUsuarioRequest } from 'src/usuarios/shared/iusuario.request';
import { UsuariosService } from 'src/usuarios/shared/usuarios.service';
import { Usuario } from './shared/usuario';


@UseGuards(JwtAdminAuthGuard)
@Controller('usuarios')
export class UsuariosController {


    constructor(
        private usuariosService: UsuariosService
    ) { }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Usuario> {
        return this.usuariosService.getById(id);
    }

    @Post()
    async create(@Body() usuario: IUsuarioRequest): Promise<Usuario> {
        return this.usuariosService.createUser(usuario);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() usuario: IUsuarioRequest): Promise<Usuario> {
        return this.usuariosService.update(id, usuario);
    }
 }
