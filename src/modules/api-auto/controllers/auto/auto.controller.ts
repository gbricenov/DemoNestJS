import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { RutTokenGuard } from 'src/guards/rut-token.guard';
import { RequestLogInterceptor } from 'src/interceptors/request-log.interceptors';
import { InformationAutoResponseDto } from '../../dtos/information-auto-response.dto';
import { AutoService } from '../../services/auto/auto.service';

@ApiTags('Auto')
@Controller('auto')
@UseInterceptors(RequestLogInterceptor)
export class AutoController {
  constructor(private readonly autoService: AutoService) {}
  @ApiOkResponse({
    description: 'Obtener información de autos de un cliente con filtro de rut',
    type: InformationAutoResponseDto,
  })
  @ApiParam({ name: 'canal', type: String })
  @ApiParam({ name: 'rut', type: String })
  @UseGuards(RutTokenGuard)
  @Get('canal/:canal/rut/:rut/autos')
  async getInformacionAutosByRut(
    @Param('canal') canal: string,
    @Param('rut') rut: string,
  ): Promise<InformationAutoResponseDto> {
    return this.autoService.getAutosByClient(canal, rut);
  }
}
