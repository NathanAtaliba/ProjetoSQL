import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import Produto from "./Produto";
export default function Produtos(){
  const [produtos, setProdutos] = useState([]);
  useEffect(()=>{
    try{
      axios.get("http//localhost:3001/produtos")
      //.then(res => setProdutos(res.data));
      .then(res => console.log(res));
    }catch(error){
      console.log("Error");
    }
  },[]);

    return(
        <ul>
            {produtos.map((produto)=>(
              <li>
                <Produto PR={produto.PR} modelo={produto.modelo} ano={produto.ano} nome={produto.nome} />  
              </li>  
            ))}
        </ul>
);
}