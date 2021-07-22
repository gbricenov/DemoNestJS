import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RutTokenGuard implements CanActivate {
  constructor(private readonly jwtServ: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      return false;
    }
    const tokenObj = this.jwtServ.decode(
      request.headers.authorization.replace('Bearer', '').trim(),
    );
    return tokenObj['UserId'] === request.params.rut;
  }
}
