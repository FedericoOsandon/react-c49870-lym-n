import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"

export const ItemListContainer = ({ greeting }) => {  // 2 tipo contenedor - de presentación
    const [ productos, setProductos ] = useState([])
    // llamada a mi promesa mock de una  api
    useEffect(()=>{
        mFetch()
        .then(  result => setProductos(result))
        .catch(err => console.log(err))
    }, [])

    //    un [<li>1</li>, <li>2</li>, <li>3</li>, ....] <- [1,2,3,4].map(num => <li>{num}</li>) 

    return (
        <div>
            <h2 className="text-center">{ greeting }</h2>
            {/* como mostramos los productos aquí  */}
            {/* { [1,1,2,4].map((num, index) => <li key={index}>{num}</li>) } */}
            { productos.map(product =>  <div key={product.id} className='card w-25'>
                                            <div className='card-body p-0 text-center'>
                                                <img src={product.imageUrl} className='w-100' alt='imagen'/>
                                                <h6>{product.name}</h6>
                                                <p>Precio: {product.price}</p>
                                                <p>Stock: {product.stock}</p>
                                                {/* <p>Descripción: {product.description}</p> */}
                                            </div>
                                            <div className='card-footer'>
                                                <button className='btn btn-outline-dark w-100'>Detalle</button>
                                            </div>
                                        </div>
            )}
        </div>
    )
}
/// que dispara un rerender itemlistcontainer(3) un evento - cambio en un estado - cambio en una props
//  tipo componentes debe estar una llamada a una api ? -> Contenedor 
// dentro de que función debería estar una llamada a una api ? -> useEffect()