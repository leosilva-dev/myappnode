import Produto, { ProdutoAttributes } from "../model/Produto";
import { IProdutoRepository, ISalvarProdutoDTO } from "./IProdutoRepository";

class ProdutosRepository implements IProdutoRepository {

    constructor(){
    }    

    async salvar({nome, descricao, preco}:ISalvarProdutoDTO):Promise<ProdutoAttributes>{
        const produto: ProdutoAttributes = {
            created_at: new Date(),
            descricao: descricao,
            nome: nome,
            preco: preco,
            updated_at: null
        }
    
        return await Produto.create(produto);
    }

    async obterTodos():Promise<ProdutoAttributes[]>{
            return await Produto.find({});
    }

    async obterPorNome(nome:string):Promise<Boolean>{
        const produto = await Produto.findOne({name:nome});
        return produto != null;
    }

    async obterPorId(id:string):Promise<ProdutoAttributes>{
        return await Produto.findById(id);
    }

    async deletar(id: string): Promise<ProdutoAttributes> {
        return await Produto.findByIdAndDelete(id)
    }

    async alterar(id: string, nome: string, descricao: string, preco: number): Promise<ProdutoAttributes> {
        return await Produto.findByIdAndUpdate(
            {"_id":id},
            {nome:nome, descricao:descricao, preco:preco, updated_at:new Date()},
            {new:true},
        )
    }
}

export {ProdutosRepository}