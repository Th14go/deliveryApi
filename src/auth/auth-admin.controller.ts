import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { LocalAdminAuthGuard } from './shared/admin/local-admin.auth.guard';

@Controller('auth')
export class AuthAdminController {

    constructor(
        private authService: AuthService
    ) { }

    @UseGuards(LocalAdminAuthGuard)
    @Post('login')
    async login(@Request() req: any) {
        return this.authService.login(req.usuario);
    }
}