import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepositoy } from "./produto.repository";
import { CriaProdutoDto } from "./dto/produto.dto";

@Controller('/produtos')
export class ProdutoController{
    constructor(private produtoRepositoty:ProdutoRepositoy){}

    @Post()
    async criaProduto(@Body() dadosProduto: CriaProdutoDto){
        this.produtoRepositoty.salvar(dadosProduto)
    }

    @Get()
    async listarProdutos(){
        this.produtoRepositoty.listarProdutos()
    }
}