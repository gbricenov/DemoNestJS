import { ApiProperty } from '@nestjs/swagger';
import { PatenteDto } from './patente-auto.dto';

export class InformationAutoResponseDto {
  @ApiProperty()
  codigo: string;

  @ApiProperty()
  mensaje: string;

  @ApiProperty({ type: PatenteDto })
  patentes: PatenteDto[];
}
