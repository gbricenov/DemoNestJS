/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    console.log('global exception handler');

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let error: any = null;
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      error = exception.message;
      Logger.log(`error: ${exception}`);
    } else {
      Logger.error(`error: ${exception}`);
    }

    if (response.status) {
      response.status(status).json({
        statusCode: status,
        error: error || '',
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
