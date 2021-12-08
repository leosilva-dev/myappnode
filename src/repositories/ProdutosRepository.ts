import { ProdutoDocument, ProdutoAttributes } from "../model/Produto";
import { IProdutoRepository, ISalvarProdutoDTO } from "./IProdutoRepository";



class ProdutosRepository implements IProdutoRepository {

    constructor(){
        this.produtos = [];
    }

    salvar({nome, descricao, preco}:ISalvarProdutoDTO):void{
        const produto: ProdutoAttributes = {
            created_at: new Date(),
            description: descricao,
            name: nome,
            price: preco
        }
    
        this.produtos.push(produto)
    }

    obterTodos():ProdutoDocument[]{
        return this.produtos
    }

    obterPorNome(nome:string):ProdutoDocument{
        const produto = this.produtos.find(produto => produto.name === nome)
        return produto
    }

    obterPorId(id:string):ProdutoDocument{
        const produto = this.produtos.find(produto => produto.name === 'teste')
        return produto
    }
}

export {ProdutosRepository}