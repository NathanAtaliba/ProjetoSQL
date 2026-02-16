import produtosRepository from '../repositories/produtosRepositories.js';

async function getAllProdutos(){
    return await produtosRepository.findAll();
}

export default {
    getAllProdutos,
};