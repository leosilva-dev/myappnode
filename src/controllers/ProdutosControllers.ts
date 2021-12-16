import {Request, Response} from 'express'
import {ProdutosService} from '../services/ProdutosService'
import { ProdutosRepository } from '../repositories/ProdutosRepository';

const produtosRepository = new ProdutosRepository()

class ProdutosControllers{
    async salvar(request: Request, response: Response): Promise<Response>{
        const {nome, descricao, preco} = request.body;

        const produtosService = new ProdutosService(produtosRepository)

        const produto = await produtosService.salvar({nome, descricao, preco})


        return response.status(201).json({message:"Produto salvo com sucesso!", produto: produto});
    }

    async obterTodos(request: Request, response: Response): Promise<Response>{
        const produtosService = new ProdutosService(produtosRepository)

    const listaProdutos = await produtosService.obterTodos();

    return response.json(listaProdutos);
    }

    async obterPorId(request: Request, response: Response): Promise<Response>{
        const {id} = request.query;

    const produtosService = new ProdutosService(produtosRepository)

    const produto = await produtosService.obterPorId(id as string);

    return response.json(produto);
    }

    async Alterar(request: Request, response: Response): Promise<Response>{
        const {id, nome, descricao, preco} = request.body;

        const produtosService = new ProdutosService(produtosRepository)

        const produto = await produtosService.alterar({ id, nome, descricao, preco});

        return response.json({message:"Alterado com sucesso!", produto: produto});
    }

    async Deletar(request: Request, response: Response): Promise<Response>{
        const {id} = request.query;

        const produtosService = new ProdutosService(produtosRepository)

        const produto = await produtosService.deletar(id as string);

        return response.status(200).json({message:"Produto deletado!", produto: produto});
    }
}

export {ProdutosControllers};