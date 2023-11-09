
import { ItemListContainer as Home } from "./components/ItemListContainer/ItemListContainer"
import { ItemCounter } from "./components/ItemCounter/ItemCounter"
import  Menu from "./components/Navbar/NavBar"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartContainer } from "./components/CartContainer/CartContainer"

import 'bootstrap/dist/css/bootstrap.min.css'
// 1- npm i react-router-dom
// 2- importar 
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

function App() {
    const onAdd = (cantidad) => {
        console.log('La cantidad seleccionada es: ',cantidad)
    }
    // BrowserRouter -> envolver toda mi app
    // Routes -> envolver todos los componentes que van a tener rutas
    return (
        <Router>         
            <div className="container">
                <Menu />
                <Routes>
                    <Route path='/' element={ <Home greeting='saludo app' /> } />
                    <Route path='/category/:cid' element={ <Home greeting='saludo app' /> } />

                    <Route path='/detail/:pid' element={ <ItemDetailContainer /> } />
                    {/* no necesitan el cart */}
                    <Route path='/cart' element={ <CartContainer /> } />

                    <Route path='*' element={ <Navigate to='/' /> } />
                </Routes>    
                   
                    
                {/* <ItemCounter inital={1} stock={6} onAdd={onAdd} /> */}
            </div>    
        </Router>
    )
}

export default App
