import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './../auth.service';

@Injectable()
export class LocalClienteStrategy extends PassportStrategy(Strategy, 'local-cliente') {

    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
    }

    async validate(email: string, senha: string) {
        const usuario = await this.authService.validateUser(email, senha);        
        if (!usuario) {
            throw new UnauthorizedException();
        }
        return usuario;
    }
}