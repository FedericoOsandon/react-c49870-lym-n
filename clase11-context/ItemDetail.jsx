
import { useCartContext } from "../../../contexts/CartContext"
import { ItemCounter } from "../../ItemCounter/ItemCounter"

export const ItemDetail = ({ product }) => {

    const { addProduct } = useCartContext()

    const onAdd = (cantidad) => {
        
        addProduct( { ...product, cantidad } )
    }
    // console.log(cartList)
    return (
        <div className="row">
            <div className="col-12 text-center mt-5">
                <h1>Detalle de Producto</h1>
            </div>
            <div className="col-6 text-center mt-5">
                <img src={product.imageUrl} alt={'image'} className="img-fluid" />
                <h2>{product.name}</h2>               
            </div>

            <div className="col-6 mt-5">                
                <h4>Descripción: {product.description}</h4>
                <h4>Precio: {product.price}</h4>
                <h4>Stock: {product.stock}</h4>   
                <ItemCounter onAdd={onAdd} inital={1} stock={10}  />                
            </div>
        </div>
    )
}
