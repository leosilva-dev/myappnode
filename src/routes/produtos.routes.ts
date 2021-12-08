import {Router} from 'express'
import {ProdutosService} from '../services/ProdutosService'
import { ProdutosRepository } from '../repositories/ProdutosRepository';


const produtosRoutes = Router();
const produtosRepository = new ProdutosRepository()

produtosRoutes.post('/produtos', (request, response)=> {
    const {nome, descricao, preco} = request.body;

   const produtosService = new ProdutosService(produtosRepository)

   produtosService.salvar({nome, descricao, preco})


    return response.status(201).send();

})

produtosRoutes.get('/produtos', (_, response)=> {
    const produtosService = new ProdutosService(produtosRepository)

    const listaProdutos = produtosService.obterTodos();

    return response.json(listaProdutos);

})

produtosRoutes.get('/produtoporid', (request, response)=> {

    const {id} = request.query;

    const produtosService = new ProdutosService(produtosRepository)

    const produto = produtosService.obterPorId(id as string);

    return response.json(produto);

})

produtosRoutes.delete('/produtos', (request, response)=> {

    const {id} = request.query;

    const produtosService = new ProdutosService(produtosRepository)

    const produto = produtosService.deletar(id as string);

    return response.status(200);

})

produtosRoutes.put('/produtos', (request, response)=> {

    const {nome, descricao, preco} = request.body;

    const produtosService = new ProdutosService(produtosRepository)

    const produto = produtosService.alterar({nome, descricao, preco});

    return response.json(produto);

})

export {produtosRoutes};