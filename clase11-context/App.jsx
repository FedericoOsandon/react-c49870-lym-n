
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
// npm i react-router-dom
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ItemCounter } from "./components/ItemCounter/ItemCounter"
import  Menu from "./components/Navbar/NavBar"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
// import { CartContainer } from "./components/CartContainer/CartContainer"

import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContextProvider } from "./contexts/CartContext"
import { CartContainer } from "./components/CartContainer/CartContainer"


function App() {
       
    return (
        <BrowserRouter>    
            <CartContextProvider>
                <div className="container border border-5 border-primary">
                    <Menu />
                    <Routes>
                        <Route path='/' element={ <ItemListContainer greeting='ItemListContainer' /> } />
                        <Route path='/category/:cid' element={ <ItemListContainer greeting='saludo app' /> } />

                        <Route path='/detail/:pid' element={ <ItemDetailContainer /> } />
                        <Route path='/cart' element={ <CartContainer /> } />
                        
                        <Route path='*' element={ <Navigate to='/' /> } />
                    </Routes>                         
                    
                </div>    
            </CartContextProvider>
        </BrowserRouter>
        
    )
}

export default App
