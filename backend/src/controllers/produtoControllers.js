import produtosServices from "../services/produtosServices.js"
export async function getProdutos(req, res){
    try{
        const produtos = await produtosServices.getAllProdutos();
        res.status(200).json(produtos);
    }catch(err){
        res.status(500).json({error:"Erro ao procurar os produtos!!"});
    }

}