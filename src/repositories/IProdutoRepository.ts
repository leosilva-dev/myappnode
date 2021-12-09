import { ProdutoDocument } from "../model/Produto"

interface ISalvarProdutoDTO {
    nome: string;
    descricao: string;
    preco: number;
}

interface IProdutoRepository{
    salvar({nome, descricao, preco}:ISalvarProdutoDTO):Promise<void>;

    obterTodos():Promise<ProdutoDocument[]>;

    obterPorNome(nome:string):Promise<Boolean>;

    obterPorId(id:string):Promise<ProdutoDocument>;
}

export {IProdutoRepository, ISalvarProdutoDTO} 