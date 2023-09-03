import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnoModule } from './alumno/alumno.module';
import { Alumno } from './alumno/entities/alumno.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AlumnoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'orm_user',
      password: 'orm_pass',
      database: 'orm_db',
      entities: [Alumno],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
