import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Usuario {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    Name: string;
    @Column()
    Email: string;
}