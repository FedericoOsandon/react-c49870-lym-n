import { createContext, useContext, useState } from "react"
// para crear un context 


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    
    const addProduct = (product) => {
        setCartList([
            ...cartList,
            product
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    // catidad total de productos
    // precio total de productos
    // eliminar un producto por id
    

    return (
        <CartContext.Provider value = {{
            cartList,
            addProduct,
            vaciarCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}