import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthCheckModule } from './modules/health-check/health-check.module';
import { ApiAutoModule } from './modules/api-auto/api-auto.module';

const envPath = ['.env'];
if (process.env.NODE_ENV === 'development') {
  envPath.unshift('.env.development');
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: envPath,
    }),
    HealthCheckModule,
    ApiAutoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
