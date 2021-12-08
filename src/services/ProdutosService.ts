import { ProdutoDocument } from '../model/Produto';
import { IProdutoRepository } from '../repositories/IProdutoRepository';


interface IRequest{
    nome: string;
    descricao: string;
    preco: number;
}

class ProdutosService {
    constructor(private produtosRepository: IProdutoRepository){}

    salvar({nome, descricao, preco}: IRequest) : void{
        const produtoExiste = this.produtosRepository.obterPorNome(nome);

        if(produtoExiste){
            throw new Error("Produto já existe!")
        }
        this.produtosRepository.salvar({nome, descricao, preco});
    }

    obterTodos(): ProdutoDocument[]{
        return this.produtosRepository.obterTodos()
    }

    obterPorId(id: string): ProdutoDocument{
        return this.produtosRepository.obterPorId(id);
    }

    alterar({nome, descricao, preco}: IRequest):ProdutoDocument{
        return new Produto();
    }

    deletar(id:string):void{}
}

export {ProdutosService}