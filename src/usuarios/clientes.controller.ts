import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { IUsuarioRequest } from 'src/usuarios/shared/iusuario.request';
import { UsuariosService } from 'src/usuarios/shared/usuarios.service';
import { Usuario } from 'src/usuarios/shared/usuario';
import { JwtClienteAuthGuard } from 'src/auth/shared/cliente/jwt-cliente-auth.guard';

@Controller('clientes')
export class ClientesController { 

    constructor(
        private usuariosService: UsuariosService
    ) { }

    @UseGuards(JwtClienteAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Usuario> {
        return this.usuariosService.getById(id);
    }

    @Post()
    async create(@Body() user: IUsuarioRequest): Promise<Usuario> {
        return this.usuariosService.createCustomer(user);
    }

    @UseGuards(JwtClienteAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() user: IUsuarioRequest): Promise<Usuario> {
        return this.usuariosService.update(id, user);
    }
}
