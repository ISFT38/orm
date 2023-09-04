import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Alumno } from './entities/alumno.entity';

@Injectable()
export class AlumnoService {
  constructor(@InjectRepository(Alumno) private alumnoRepository: Repository<Alumno>) {}

  async create(createAlumnoDto: CreateAlumnoDto): Promise<number> {
    const alumno: Alumno = await this.alumnoRepository.save(Alumno.fromCreateDTO(createAlumnoDto));
    return alumno.id;
  }

  findAll() {
    return this.alumnoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
