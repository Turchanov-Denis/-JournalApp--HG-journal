import { Module } from '@nestjs/common';
import { AppController } from './Users/user.controller';
import { AppService } from './Users/user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './Users/users.model';
import { UserModule } from './Users/user.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  }),SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    models: [User],
    autoLoadModels: true,
  }),UserModule],
 

})
export class AppModule { }
