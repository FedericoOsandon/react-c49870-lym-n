import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mFetch"

export const ItemListContainer = ({ greeting }) => { 
    const [ productos, setProductos ] = useState([])
    const { cid } = useParams()

    useEffect(()=>{
        if (cid) {
            mFetch()
            .then(  result => setProductos(result.filter(product => product.category === cid)))
            .catch(err => console.log(err))            
        } else {
            mFetch()
            .then(  result => setProductos(result))
            .catch(err => console.log(err))            
        }
    }, [cid])
    // console.log(cid)
    return (
        <div>
            <h2 className="text-center">{ greeting }</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                // espacio
                gap: '10px',
                justifyContent: 'center'
            }}>
                { productos.map(product =>  <div key={product.id} className='card w-25'>
                                                <div className='card-body p-0 text-center'>
                                                    <img src={product.imageUrl} className='card-img-top w-100' alt='imagen'/>
                                                    <h6>{product.name}</h6>
                                                    <p>Precio: {product.price}</p>
                                                    <p>Stock: {product.stock}</p>
                                                    {/* <p>Descripción: {product.description}</p> */}
                                                </div>
                                                <div className='card-footer'>
                                                    {/* <Link to='/detail/3'> */}
                                                    <Link to={`/detail/${product.id}`}>
                                                        <button className='btn btn-outline-dark w-100'>Detalle</button>
                                                    </Link>
                                                </div>
                                            </div>
                )}
            </div>
        </div>
    )
}

