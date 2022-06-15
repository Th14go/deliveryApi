import { Controller, UseGuards, Post, Request } from '@nestjs/common';

import { AuthService } from './shared/auth.service';
import { LocalClienteAuthGuard } from './shared/cliente/local-cliente-auth.guard';

@Controller('auth-cliente')
export class AuthClienteController { 

    constructor(
        private authService: AuthService
    ) { }

    @UseGuards(LocalClienteAuthGuard)
    @Post('login')
    async login(@Request() req: any) {
        return this.authService.login(req.usuario);
    }

}