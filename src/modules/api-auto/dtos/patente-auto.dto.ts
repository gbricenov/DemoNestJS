import { ApiProperty } from '@nestjs/swagger';

export class PatenteDto {
  @ApiProperty()
  spatente: string;

  @ApiProperty()
  sdvpatente: string;

  @ApiProperty()
  smarca: string;

  @ApiProperty()
  scodigoMarca: string;

  @ApiProperty()
  smodelo: string;

  @ApiProperty()
  scodigoModelo: string;

  @ApiProperty()
  ntipoVehiculo: string;

  @ApiProperty()
  nanyoVehiculo: string;

  @ApiProperty()
  stipoVehiculo: string;

  @ApiProperty()
  scolor: string;

  @ApiProperty()
  smotor: string;

  @ApiProperty()
  snumChasis: string;

  @ApiProperty()
  ssiniestro: boolean;
}
