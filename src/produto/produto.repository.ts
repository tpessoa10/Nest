import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepositoy{
    private produtos = []

    async salvar(produto){
        this.produtos.push(produto)
    }
    
    async listarProdutos(){
        return this.produtos
    }
}