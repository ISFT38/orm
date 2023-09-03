import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'alumno'})
export class Alumno {
  @PrimaryGeneratedColumn({name: 'alumno_id'})
  private id: number;

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
}
