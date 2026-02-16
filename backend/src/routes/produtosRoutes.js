import {Router} from 'express';
import {getProdutos} from '../controllers/produtoControllers.js';

const routes = Router();

routes.get("/produtos", getProdutos );

export default routes;