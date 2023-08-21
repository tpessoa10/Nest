import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { ProdutoRepositoy } from "./produto.repository";
import { EmailEhUnicoValidator } from "src/usuario/validacao/email-eh-unico.validator";

@Module({
    controllers:[ProdutoController],
    providers:[ProdutoRepositoy, EmailEhUnicoValidator]
})
export class ProdutoModule {
    
}