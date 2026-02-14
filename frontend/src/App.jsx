import { useState } from 'react'
import Produtos from './componentes/produtos';

function App() {

  return (

    <div className='container principal'>
            <div className='header'>
              <h1>Controle de Propostas</h1>
              <ul>
                <li>"nome"</li>
                <li>"editar usuario"</li>
                <li>"sair"</li>
              </ul>
            </div>
            <div className='container list'>
              <h2>Lista de propostas:</h2>
              <Produtos/>
            </div>
    </div>
  )
}

export default App
