import { AppError } from '../errors/AppError';
import { ProdutoDocument } from '../model/Produto';
import { IProdutoRepository } from '../repositories/IProdutoRepository';


interface IRequest{
    nome: string;
    descricao: string;
    preco: number;
}

class ProdutosService {
    constructor(private produtosRepository: IProdutoRepository){}

    async salvar({nome, descricao, preco}: IRequest) : Promise<void>{
        const produtoExiste = await this.produtosRepository.obterPorNome(nome);

        if(produtoExiste){
            throw new AppError("Produto já existe!", 401)
        }
         await this.produtosRepository.salvar({nome, descricao, preco});
    }

    async obterTodos(): Promise<ProdutoDocument[]>{
        return await this.produtosRepository.obterTodos()
    }

    async obterPorId(id: string): Promise<ProdutoDocument>{
        return await this.produtosRepository.obterPorId(id);
    }

    async alterar({nome, descricao, preco}: IRequest):Promise<ProdutoDocument>{
        return null;
    }

    async deletar(id:string):Promise<void>{}
}

export {ProdutosService}