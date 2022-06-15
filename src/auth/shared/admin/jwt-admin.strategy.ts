import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsuarioTipoEnum } from 'src/usuarios/shared/usuario.tipo.enum';

import { jwtConstants } from '../constants';
import { IJwtPayload } from '../ijwt-payload';

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: IJwtPayload) {
    if (payload.tipo != UsuarioTipoEnum.admin) {
      throw new UnauthorizedException();
    } 
    
    return payload;
  }
}