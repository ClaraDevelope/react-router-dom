import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
// Para esta práctica haremos una simple navegación entre componentes, para ello, crearemos 3 componentes.
// Cada componente tendrá un div con una clase, en la que pondremos un bgColor y una altura correspondientes para ver de manera más visual cómo se navega correctamente.
// Declararemos una ruta por componente y crearemos un componente Header que contenga la navegación de la página, con el componente que deseemos.
// Para una de nuestras rutas enviaremos un parámetro, el parámetro lo utilizaremos en el componente cuando lo reciba para pintarlo en un h1.
// Por último tendremos cuidado con las rutas no existentes generando un componente not found que muestre un mensaje simple de página no encontrada cuando se acceda a una ruta no existente.

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
