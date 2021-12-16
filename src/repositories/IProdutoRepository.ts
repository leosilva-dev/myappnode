import { ProdutoDocument } from "../model/Produto"

interface ISalvarProdutoDTO {
    nome: string;
    descricao: string;
    preco: number;
}

interface IProdutoRepository{
    salvar({nome, descricao, preco}:ISalvarProdutoDTO):Promise<ProdutoDocument>;
    obterTodos():Promise<ProdutoDocument[]>;
    obterPorNome(nome:string):Promise<Boolean>;
    obterPorId(id:string):Promise<ProdutoDocument>;
    deletar(id:string):Promise<ProdutoDocument>;
    alterar(id:string, nome:string, descricao:string, preco:number):Promise<ProdutoDocument>;
}

export {IProdutoRepository, ISalvarProdutoDTO}  