import { Controller, Get } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HealthDto } from '../../dtos/health.dto';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @ApiOkResponse({
    description: 'Mensaje OK del estado del servidor',
    type: HealthDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Mensaje error del estado del servidor',
    type: HealthDto,
  })
  @Get()
  getHealt(): HealthDto {
    return new HealthDto('ok');
  }
}
