import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { Driver } from './drivers/drivers.entity';


@Module({
  imports:[
    ConfigModule.forRoot({
    isGlobal: true,
    load: [databaseConfig],
  }),
  TypeOrmModule.forRootAsync({
    useFactory: async () => {
      const config = databaseConfig();
      return {
        type: 'postgres',
        host: config.database.host,
        port: config.database.port,
        username: config.database.username,
        password: config.database.password,
        database: config.database.dbName,
        entities: [Driver],
        synchronize: true
      };
    },
  }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource:DataSource) {}
}
