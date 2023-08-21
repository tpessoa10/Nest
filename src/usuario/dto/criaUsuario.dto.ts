import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"
import { emailEhUnico } from "../validacao/email-eh-unico.validator"

export class CriaUsuarioDto {

    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    nome: string

    @IsEmail(undefined, {message: 'O e-mail informado é inválido'})
    @emailEhUnico({message:'Email já cadastrado'})
    email:string
    
    @MinLength(6, {message:'A senha precisa ter pelo menos 6 caracteres'})
    senha:string
}