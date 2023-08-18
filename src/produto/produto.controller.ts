import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepositoy } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController{
    constructor(private produtoRepositoty:ProdutoRepositoy){}

    @Post()
    async criaProduto(@Body() dadosProduto){
        this.produtoRepositoty.salvar(dadosProduto)
    }

    @Get()
    async listarProdutos(){
        this.produtoRepositoty.listarProdutos()
    }
}