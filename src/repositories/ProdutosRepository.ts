import Produto, { ProdutoDocument, ProdutoAttributes } from "../model/Produto";
import { IProdutoRepository, ISalvarProdutoDTO } from "./IProdutoRepository";



class ProdutosRepository implements IProdutoRepository {

    constructor(){
    }

    async salvar({nome, descricao, preco}:ISalvarProdutoDTO):Promise<void>{
        const produto: ProdutoAttributes = {
            created_at: new Date(),
            description: descricao,
            name: nome,
            price: preco,
            updated_at: null
        }
    
        await Produto.create(produto);
    }

    async obterTodos():Promise<ProdutoDocument[]>{
            return await Produto.find({});
    }

    async obterPorNome(nome:string):Promise<Boolean>{
        const produto = await Produto.findOne({name:nome});
        return produto != null;
    }

    async obterPorId(id:string):Promise<ProdutoDocument>{
        return await Produto.findById(id);
    }
}

export {ProdutosRepository}