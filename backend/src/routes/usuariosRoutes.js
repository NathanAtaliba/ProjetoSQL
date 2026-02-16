import {Router} from "express";

const routes = Router();

let usuarios = [
  { PR: 1, ano: 2025, modelo: 1, nome:"SGS" },
  { PR: 1, ano: 2025, modelo: 1, nome:"SGS" }
];

routes.get("/usuarios", (req, res) => {
    try{
      res.status(200).json(usuarios);
    }catch(error){
      res.status(404).json("Erro ao procurar produtos!!")
    }
    
})

export default routes;