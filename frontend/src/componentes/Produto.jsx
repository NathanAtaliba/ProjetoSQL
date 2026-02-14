export default function Produto({nome,ano,modelo,PR}){
  return(
    <li>{PR}{"/"}{ano}{"."}{modelo}{"-"}{nome}</li>
)
}