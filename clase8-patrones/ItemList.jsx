import { Filter } from "./filter/Filter"


const productFiltered = ({productos, filterState, handleFilterChange }) => (
    <>
        <div>
            <label>Buscar</label>
            <input 
                className="form-control" 
                type="text" 
                value={filterState} 
                onChange={handleFilterChange}
            />
        </div>
        <br />      

        <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                // espacio
                gap: '10px',
                justifyContent: 'center'
            }}>
                { filterState === '' 
                    ? 
                        productos.map(product =>  <div key={product.id} className='card w-25'>
                                                    <div className='card-body p-0 text-center'>
                                                        <img src={product.imageUrl} className='card-img-top w-100' alt='imagen'/>
                                                        <h6>{product.name}</h6>
                                                        <p>Precio: {product.price}</p>
                                                        <p>Stock: {product.stock}</p>
                                                        {/* <p>Descripción: {product.description}</p> */}
                                                    </div>
                                                    <div className='card-footer'>
                                                        <button className='btn btn-outline-dark w-100'>Detalle</button>
                                                    </div>
                                                </div>
                        )
                    :

                    productos
                    .filter(prod => prod.name.toLowerCase().includes(filterState))
                    .map(product =>  <div key={product.id} className='card w-25'>
                                                    <div className='card-body p-0 text-center'>
                                                        <img src={product.imageUrl} className='card-img-top w-100' alt='imagen'/>
                                                        <h6>{product.name}</h6>
                                                        <p>Precio: {product.price}</p>
                                                        <p>Stock: {product.stock}</p>
                                                        {/* <p>Descripción: {product.description}</p> */}
                                                    </div>
                                                    <div className='card-footer'>
                                                        <button className='btn btn-outline-dark w-100'>Detalle</button>
                                                    </div>
                                                </div>
                        )
                }
            </div>
    </>
)

export const ItemList = ({productos}) => {
  return (
    <Filter productos={productos}>
        { productFiltered }
    </Filter>
  )
}


