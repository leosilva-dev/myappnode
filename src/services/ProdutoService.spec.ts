import { AppError } from '../errors/AppError';
import {ProdutosRepositoryInMemory} from '../repositories/in-memory/ProdutoRepositoryInMemory';
import {ProdutosService} from  '../services/ProdutosService';

let produtoRepository: ProdutosRepositoryInMemory;
let produtosService: ProdutosService;


describe("Produto service tests",()=>{
    beforeEach(()=>{
        produtoRepository = new ProdutosRepositoryInMemory();
        produtosService = new ProdutosService(produtoRepository);
    })

    it("Deve salvar o produto corretamente", async ()=>{
        const produto = {
            name: "teste",
            description: "produto teste",
            preco: 9,
        }
        const produtoInserido = await produtosService.salvar({
            nome: produto.name,
            descricao: produto.description,
            preco: produto.preco
        })

        expect(produtoInserido).toHaveProperty('nome', 'teste')
        expect(produtoInserido).toHaveProperty('descricao', 'produto teste')
        expect(produtoInserido).toHaveProperty('preco', 9)
    })

    it("Deve obter o produto pelo Id", async ()=>{
        const produtoParaInserir = {
            name: "teste",
            description: "produto teste",
            preco: 9,
        };

        await produtosService.salvar({
            nome: produtoParaInserir.name,
            descricao: produtoParaInserir.description,
            preco: produtoParaInserir.preco
        })

        const produto = await produtosService.obterPorId('dksodksaoasdkw');

        expect(produto).toHaveProperty('id', 'dksodksaoasdkw')
    })

    it("Deve retornar todos os produtos salvos", async ()=>{
        const produtoParaInserir1 = {
            name: "teste1",
            description: "produto teste1",
            preco: 9,
        };
        const produtoParaInserir2 = {
            name: "teste2",
            description: "produto teste2",
            preco: 10,
        };

        await produtosService.salvar({
            nome: produtoParaInserir1.name,
            descricao: produtoParaInserir1.description,
            preco: produtoParaInserir1.preco
        })
        await produtosService.salvar({
            nome: produtoParaInserir2.name,
            descricao: produtoParaInserir2.description,
            preco: produtoParaInserir2.preco
        })

        const produtos = await produtosService.obterTodos();

        expect(produtos.length).toBe(2);
    })

    it("Deve retornar true se o produto existe (pelo nome)", async ()=>{
        const produtoParaInserir = {
            name: "esse teste",
            description: "esse produto teste",
            preco: 9,
        };

        await produtosService.salvar({
            nome: produtoParaInserir.name,
            descricao: produtoParaInserir.description,
            preco: produtoParaInserir.preco
        })

        const produtoExiste = await produtoRepository.obterPorNome(produtoParaInserir.name);

        expect(produtoExiste).toBeTruthy();
    })

    it("Deve retornar false se o produto não existe (pelo nome)", async ()=>{

        const produtoExiste = await produtoRepository.obterPorNome('random name');

        expect(produtoExiste).toBeFalsy();
    })

    it("Deve retornar o erro 'Produto já existe!'", async ()=>{
        const produtoParaInserir = {
            name: "teste",
            description: "produto teste",
            preco: 9,
        };

        await produtosService.salvar({
            nome: produtoParaInserir.name,
            descricao: produtoParaInserir.description,
            preco: produtoParaInserir.preco
        })

        await expect(
                produtosService.salvar({
                nome: produtoParaInserir.name,
                descricao: produtoParaInserir.description,
                preco: produtoParaInserir.preco
            })).rejects.toEqual(new AppError("Produto já existe!", 401));
    })

    it("Deve alterar as propriedades do produto corretamente", async ()=>{
        const produtoParaInserir = {
            name: "teste",
            description: "produto teste",
            preco: 9,
        };

        await produtosService.salvar({
            nome: produtoParaInserir.name,
            descricao: produtoParaInserir.description,
            preco: produtoParaInserir.preco
        })

        const produtoAlterado = await produtosService.alterar({ id:'dksodksaoasdkw', nome:"produto alterado", descricao:"produto alterado descricao", preco: 10})

        expect(produtoAlterado).toHaveProperty('nome', 'produto alterado')
        expect(produtoAlterado).toHaveProperty('descricao', 'produto alterado descricao')
        expect(produtoAlterado).toHaveProperty('preco', 10)
    
    })

    it("Deve deletar o produto corretamente", async ()=>{
        const produtoParaInserir = {
            name: "teste",
            description: "produto teste",
            preco: 9,
        };

        await produtosService.salvar({
            nome: produtoParaInserir.name,
            descricao: produtoParaInserir.description,
            preco: produtoParaInserir.preco
        })

        const produtoDeletado = await produtosService.deletar('dksodksaoasdkw')
        const listaProdutos = await produtosService.obterTodos()

        expect(produtoDeletado).toHaveProperty('id', 'dksodksaoasdkw')
        expect(listaProdutos.length).toBe(0)
    })
    
})