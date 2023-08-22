import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"
import { emailEhUnico } from "../validacao/email-eh-unico.validator"

export class AtualizaUsuarioDto{

    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    @IsOptional()
    nome: string

    @IsEmail(undefined, {message: 'O e-mail informado é inválido'})
    @emailEhUnico({message:'Email já cadastrado'})
    @IsOptional()
    email:string
    
    @MinLength(6, {message:'A senha precisa ter pelo menos 6 caracteres'})
    @IsOptional()
    senha:string
}