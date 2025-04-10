import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Listar from './componetes/listar'
import Aleatorios from './componetes/aleatorios'
import Detalle from './componetes/detalle'
import Favoritos from './componetes/favoritos'
import Original from './componetes/original'
import Usuario from './componetes/usuario'
import Menu from './componetes/menu'

function app() {
  const [count, setCount] = useState(0)

  return (
    <>
   
       <Router>
      <Menu />
      <Routes>
      <Route path="/" element={<Listar />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/aleatorio" element={<Aleatorios />} />
        <Route path="/original" element={<Original />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/:nombre" element={<Detalle />} />
      </Routes>
    </Router>
    </>
  )
}
export default app