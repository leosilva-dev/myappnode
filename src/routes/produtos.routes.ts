import {Router} from 'express'
import {ProdutosService} from '../services/ProdutosService'
import { ProdutosRepository } from '../repositories/ProdutosRepository';


const produtosRoutes = Router();
const produtosRepository = new ProdutosRepository()

produtosRoutes.post('/produtos', async (request, response)=> {
    const {nome, descricao, preco} = request.body;

   const produtosService = new ProdutosService(produtosRepository)

   await produtosService.salvar({nome, descricao, preco})


    return response.status(201).send();

})

produtosRoutes.get('/produtos', async (_, response)=> {
    const produtosService = new ProdutosService(produtosRepository)

    const listaProdutos = await produtosService.obterTodos();

    return response.json(listaProdutos);

})

produtosRoutes.get('/produtoporid', async (request, response)=> {

    const {id} = request.query;

    const produtosService = new ProdutosService(produtosRepository)

    const produto = await produtosService.obterPorId(id as string);

    return response.json(produto);

})

produtosRoutes.delete('/produtos', async (request, response)=> {

    const {id} = request.query;

    const produtosService = new ProdutosService(produtosRepository)

    const produto = await produtosService.deletar(id as string);

    return response.status(200);

})

produtosRoutes.put('/produtos', async (request, response)=> {

    const {nome, descricao, preco} = request.body;

    const produtosService = new ProdutosService(produtosRepository)

    const produto = await produtosService.alterar({nome, descricao, preco});

    return response.json(produto);

})

export {produtosRoutes};