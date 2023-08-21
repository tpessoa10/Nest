import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength, Min, ValidateNested, isURL } from "class-validator";

export class CriaProdutoDto {
    
    @IsNotEmpty({message:'Nome do produto não pode ser vazio'})
    nome: string;

    @IsNumber({maxDecimalPlaces: 2, allowInfinity: false, allowNaN: false})
    @Min(1, {message:'O valor precisa ser maior que zero'})
    valor: number;

    @IsNumber()
    @Min(0, {message:'Quantidade mínima inválida'})
    quantidade: number;

    @IsNotEmpty({message:'Descrição não pode ser vazio'})
    @MaxLength(1000, {message:'Descrição não pode ultrapassar 1000 caracteres'})
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    categoria: string;
}

export class CaracteristicaProdutoDTO{
    @IsString()
    @IsNotEmpty({message: 'Nome da caracteristica não pode ser vazio'})
    nome: string;

    @IsString()
    @IsNotEmpty({message: 'Descrição da característica não pode ser vazio'})
    descricao: string;
}

export class ImagemProdutoDTO{
    @IsUrl(undefined, {message:'URL para a imagem inválido'})
    url: string

    @IsString()
    @IsNotEmpty({message:'Descrição da imagem não pode ser vazia'})
    descricao: string
}
