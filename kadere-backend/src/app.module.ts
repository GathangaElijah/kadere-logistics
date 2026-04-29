import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import databaseConfig from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { DriversModule } from './drivers/drivers.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [databaseConfig],
    }),

    DriversModule,
    AuthModule,
    PrismaModule,
  ],

  controllers: [AppController, AuthController],
  providers: [AppService, PrismaService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
