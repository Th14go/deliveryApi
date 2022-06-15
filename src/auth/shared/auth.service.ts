import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CryptService } from 'src/shared/services/crypt.service';
import { UsuariosService } from 'src/usuarios/shared/usuarios.service';
import { IJwtPayload } from './ijwt-payload';
import { IUsuarioData } from './iusuario-date';

@Injectable()
export class AuthService {

    constructor(
        private usuariosService: UsuariosService,
        private cryptService: CryptService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, senha: string): Promise<IUsuarioData> {
        const usuario = await this.usuariosService.getByEmail(email);
        if (usuario && this.cryptService.compare(senha, usuario.senha)) {
            const { _id, nome, email, tipo } = usuario;

            return { id: _id, nome, email, tipo };
        }

        return null;
    }

    async login(usuario: IUsuarioData) {
        const payload: IJwtPayload = { sub: usuario.id, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}