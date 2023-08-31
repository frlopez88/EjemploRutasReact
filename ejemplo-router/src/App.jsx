
import { Contacto } from './componentes/Contacto'
import { Default } from './componentes/Default'
import { QuienesSomos } from './componentes/QuienesSomos'
import { Inicio } from './componentes/Inicio'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './componentes/Menu'


function App() {
  
  return (
    <>  
        <Menu />
        <Routes>
          <Route path='/' element={ <Inicio />}  ></Route>
          <Route path='/quienesSomos' element={ <QuienesSomos />}  ></Route>
          <Route path='/contacto' element={ <Contacto />}  ></Route>
          <Route path='*' element={ <Default />}  ></Route>
        </Routes>
      
    </>
  )
}

export default App
