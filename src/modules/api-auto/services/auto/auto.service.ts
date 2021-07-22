import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InformationAutoResponseDto } from '../../dtos/information-auto-response.dto';

@Injectable()
export class AutoService {
  constructor(private httpService: HttpService) {}

  async getAutosByClient(
    canal: string,
    rut: string,
  ): Promise<InformationAutoResponseDto> {
    const url = process.env.API_PRUEBA_OBTENER_AUTOS_POR_CLIENTE.replace(
      'canalRequerido',
      canal,
    ).replace('rutRequerido', rut);

    try {
      const { data } = await this.httpService
        .get<InformationAutoResponseDto>(url)
        .toPromise();
      return data;
    } catch (error) {
      throw new HttpException(error, error.response.status);
    }
  }
}
