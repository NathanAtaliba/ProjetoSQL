import produtosServices from "../services/produtosServices.js"

export async function getProdutos(req, res){
    try{
        const produtos = await produtosServices.getAllProdutos();
        res.status(200).json(produtos);
    }catch(err){
        res.status(500).json({error:"Erro ao procurar os produtos!!"});
    }
}
export async function getProdutoPR(req, res){
    try{
        const PR = req.body.PR;
        const produto = await produtosServices.getOneProdutoPR(PR);
        res.status(200).json(produto);
    }catch(err){
        res.status(500).json({error:"Erro ao procurar os produtos!!"});
    }    
}    
export async function createProduto(req, res){
    try{
        const produto = req.body;
        const pr = produto.pr;
        const ano = produto.ano;
        const modelo = produto.modelo;
        const problema = produto.problema;
        const result = await produtosServices.createOneProduto(pr, ano, modelo, problema);
        if(!result){
            res.status(500).json("Erro ao criar o produto!!");
        }else{
            res.status(201).json("Produto criado com sucesso!!");
        }
    }catch(err){
        res.status(500).json({error:"Erro ao criar o produto!!"});
    }
}
export async function updateProduto(req, res){
    try{
        const pr = req.body.pr;
        const ano = req.body.ano;
        const modelo = req.body.modelo;
        const novoProblema = req.body.problema;
        
        const result = await produtosServices.updateOneProduto(pr, ano, modelo, novoProblema);
        
        if(!result){
            res.status(500).json("Erro ao atualizar o produto!! Verifique os campos preenchidos");
        }else{
            res.status(200).json("Produto atualizado com sucesso!");
        }
        
    }catch(err){
        res.status(500).json({error:"Erro ao atualizar o produto!!"});
    }    
}
export async function deleteProduto(req, res){
    try{
        const pr = req.body.pr;
        const ano = req.body.ano;
        const modelo = req.body.modelo;
        const result = await produtosServices.deleteOneProduto(pr, ano, modelo);
        console.log(result);
        if(!result){
            res.status(500).json(`Erro ao tentar deletar produto!!`);
        }else{
            res.status(200).json(`Sucesso ao deletar produto, PR:${result.pr}, Ano: ${result.ano}, Modelo: ${result.modelo}`);
        }
    }catch(err){
        res.status(500).json({error:"Erro ao atualizar o produto!!"});
    }    
}
