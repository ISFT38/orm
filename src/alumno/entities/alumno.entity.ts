import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateAlumnoDto } from "../dto/create-alumno.dto";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { UpdateAlumnoDto } from "../dto/update-alumno.dto";

@Entity({name: 'alumno'})
export class Alumno {
  @PrimaryGeneratedColumn({name: 'alumno_id'})
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    length: 80,
    nullable: false,
  })
  nombre: string;

  @Column({
    name: 'apellido',
    type: 'varchar',
    length: 80,
    nullable: false,
  })
  private apellido: string;

  @Column({
    name: 'nacimiento',
    type: 'date',
    nullable: true,
  })
  private nacimiento: Date;

  static fromCreateDTO(dto: CreateAlumnoDto): Alumno {
    const data = instanceToPlain(dto);
    return plainToInstance(Alumno, data);
  }

  static fromUpdateDTO(dto: UpdateAlumnoDto): Alumno {
    const data = instanceToPlain(dto);
    return plainToInstance(Alumno, data);
  }

  static toUpdateDTO(alumno: Alumno): UpdateAlumnoDto {
    const data = instanceToPlain(alumno);
    return plainToInstance(UpdateAlumnoDto, data);
  }
}
