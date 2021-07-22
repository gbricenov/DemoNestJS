import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AutoController } from './controllers/auto/auto.controller';
import { AutoService } from './services/auto/auto.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 35000,
        maxRedirects: 5,
      }),
    }),
    JwtModule.register({}),
  ],
  controllers: [AutoController],
  providers: [AutoService],
})
export class ApiAutoModule {}
