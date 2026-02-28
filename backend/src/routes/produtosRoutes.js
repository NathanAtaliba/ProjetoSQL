import {Router} from 'express';
import {getProdutos, getProdutoPR, createProduto, updateProduto, deleteProduto } from '../controllers/produtoControllers.js';

const routes = Router();

//Rotas para produto
routes.get("/produtos", getProdutos);
routes.get("/produto", getProdutoPR);
routes.post("/produto", createProduto);
routes.patch("/produto", updateProduto);
routes.delete("/produto", deleteProduto);

export default routes;