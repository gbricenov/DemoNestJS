import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './filters/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.enableCors(); //Revisar CORS PROD

  const options = new DocumentBuilder()
    .setTitle('Microservicio de Prueba NestJS')
    .setDescription('Probando NestJS')
    .setVersion('1.0')
    .setContact('', '', '')
    .addServer('')
    .addTag('')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.APP_PORT || 8000);
}
bootstrap();
