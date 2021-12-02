import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Credentials } from './credentials.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.DB_URI,
      entities:[Credentials],
    }),
    TypeOrmModule.forFeature([Credentials])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
