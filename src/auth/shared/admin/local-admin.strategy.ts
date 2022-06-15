import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsuarioTipoEnum } from 'src/usuarios/shared/usuario.tipo.enum';
import { AuthService } from './../auth.service';

@Injectable()
export class LocalAdminStrategy extends PassportStrategy(Strategy, 'local-admin') {

    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
            passwordField: 'senha',
        });
    }

    async validate(email: string, senha: string) {
        const usuario = await this.authService.validateUser(email, senha);
        // não vou deixar clientes logarem no app do restaurante
        if (!usuario || usuario.tipo != UsuarioTipoEnum.admin) {
            throw new UnauthorizedException();
        }
        return usuario;
    }
}