import { AppError } from '../errors/AppError';
import { ProdutoDocument } from '../model/Produto';
import { IProdutoRepository } from '../repositories/IProdutoRepository';


interface IRequest{
    id?: string;
    nome: string;
    descricao: string;
    preco: number;
}

class ProdutosService {
    constructor(private produtosRepository: IProdutoRepository){}

    async salvar({nome, descricao, preco}: IRequest) : Promise<ProdutoDocument>{
        const produtoExiste = await this.produtosRepository.obterPorNome(nome);

        if(!produtoExiste){
            throw new AppError("Produto já existe!", 401)
        }
        return await this.produtosRepository.salvar({nome, descricao, preco});
    }

    async obterTodos(): Promise<ProdutoDocument[]>{
        return await this.produtosRepository.obterTodos()
    }

    async obterPorId(id: string): Promise<ProdutoDocument>{
        return await this.produtosRepository.obterPorId(id);
    }

    async alterar({id, nome, descricao, preco}: IRequest):Promise<ProdutoDocument>{
        return await this.produtosRepository.alterar(id, nome, descricao, preco)
    }

    async deletar(id:string):Promise<ProdutoDocument>{

        const produtoDeletado = await this.produtosRepository.deletar(id)

        if(produtoDeletado){
            throw new AppError('Produto não existe!')
        }
        return produtoDeletado
    }
}

export {ProdutosService}