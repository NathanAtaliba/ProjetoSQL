import produtosRepository from '../repositories/produtosRepositories.js';

async function getAllProdutos(){
    return await produtosRepository.findAll();
}
async function  getOneProdutoPR(PR){
    return await produtosRepository.findOne(PR);
}
async function  createOneProduto(pr, ano, modelo, problema){
    return await produtosRepository.createOne(pr, ano, modelo, problema);
}
async function updateOneProduto(pr, ano, modelo, novoProblema){
    return await produtosRepository.findOneUpdate(pr, ano, modelo, novoProblema );
}
async function deleteOneProduto(pr,ano,modelo){
    return await produtosRepository.findOneDelete(pr, ano, modelo);
}


export default {
    getAllProdutos,
    getOneProdutoPR,
    createOneProduto,
    updateOneProduto,
    deleteOneProduto,
};