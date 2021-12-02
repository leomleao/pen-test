import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Credentials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

   @Column()
  frontendData: string;
}