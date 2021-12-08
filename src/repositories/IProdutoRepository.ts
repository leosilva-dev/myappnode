import { Produto } from "../model/Produto"

interface ISalvarProdutoDTO {
    nome: string;
    descricao: string;
    preco: number;
}

interface IProdutoRepository{
    salvar({nome, descricao, preco}:ISalvarProdutoDTO):void;

    obterTodos():Produto[];

    obterPorNome(nome:string):Produto;

    obterPorId(id:string):Produto;
}

export {IProdutoRepository, ISalvarProdutoDTO} 