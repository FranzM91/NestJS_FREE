import { IsEmail, IsNotEmpty, IsNumber, IsOptional, max, MaxLength } from "class-validator";

export class UsuarioDto {
    @IsOptional()
    Id?: number;
    
    @IsNotEmpty()
    @MaxLength(50)
    Name: string;

    @IsNotEmpty({message: 'El correo electrónico es obligatorio'})
    @IsEmail()
    Email: string;
}