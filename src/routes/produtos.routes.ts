import {Router} from 'express'
import {ProdutosControllers} from '../controllers/ProdutosControllers'

const produtosRoutes = Router();
const produtosControllers = new ProdutosControllers()

produtosRoutes.post('/produtos',produtosControllers.salvar);
produtosRoutes.get('/produtos', produtosControllers.obterTodos)
produtosRoutes.get('/produtoporid', produtosControllers.obterPorId)
produtosRoutes.delete('/produtos', produtosControllers.Deletar)
produtosRoutes.put('/produtos', produtosControllers.Alterar)

export {produtosRoutes};