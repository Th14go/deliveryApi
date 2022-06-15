import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalClienteAuthGuard extends AuthGuard('local-cliente') { }