import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { SharedModule } from 'src/shared/shared.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { jwtConstants } from './shared/constants';
import { LocalAdminStrategy } from './shared/admin/local-admin.strategy';
import { LocalClienteStrategy } from './shared/cliente/local-cliente.strategy';
import { JwtAdminStrategy } from './shared/admin/jwt-admin.strategy';
import { JwtClienteStrategy } from './shared/cliente/jwt-cliente.strategy';
import { AuthAdminController } from './auth-admin.controller';
import { AuthClienteController } from './auth-cliente.controller';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '7d' },
        }),
        SharedModule,
        UsuariosModule
    ],
    controllers: [
        AuthAdminController,
        AuthClienteController
    ],
    providers: [
        AuthService,
        LocalAdminStrategy,
        LocalClienteStrategy,
        JwtAdminStrategy,
        JwtClienteStrategy
    ],
})
export class AuthModule { }
