import { ProdutoAttributes } from "../model/Produto"

interface ISalvarProdutoDTO {
    nome: string;
    descricao: string;
    preco: number;
}

interface IProdutoRepository{
    salvar({nome, descricao, preco}:ISalvarProdutoDTO):Promise<ProdutoAttributes>;
    obterTodos():Promise<ProdutoAttributes[]>;
    obterPorNome(nome:string):Promise<Boolean>;
    obterPorId(id:string):Promise<ProdutoAttributes>;
    deletar(id:string):Promise<ProdutoAttributes>;
    alterar(id:string, nome:string, descricao:string, preco:number):Promise<ProdutoAttributes>;
}

export {IProdutoRepository, ISalvarProdutoDTO}  