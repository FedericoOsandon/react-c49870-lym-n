import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useCartContext } from "../../contexts/CartContext"
import { useState } from "react"


export const CartContainer = () => {
    const [formData, setFormData] =  useState({
        name: '',
        phone: '',
        email: ''
    })
    const { cartList, vaciarCarrito, totalPrice } = useCartContext()
  
    const handleOrder = async (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.items = cartList.map(({id, name, price}) => ({ id, name, price }))
        order.total = totalPrice()
        // console.log(order)

        // create
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        // agregar validaciones
        addDoc(orderCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))

        // update
        // const db = getFirestore()
        // const orderDoc = doc(db, 'products', '4chHmhm6fZV1qcdWIh11')
        // updateDoc(orderDoc, {
        //     stock: 100
        // })
        // .then(()=> console.log('Terminó la actualización'))
        // .catch(err => console.log(err))


        // escritura por lotes
        // const db    = getFirestore()
        // const batch = writeBatch(db) 

        // const orderDocUno = doc(db, 'products', '4chHmhm6fZV1qcdWIh11')
        // const orderDocDos = doc(db, 'products', 'rRVr3CUlH317RVuF9d05')

        // batch.update(orderDocUno, {
        //     stock: 0
        // })
        // batch.update(orderDocDos, {
        //     stock: 0
        // })

        // batch.commit()

        // delete
        // const db = getFirestore()
        // const orderDoc = doc(db, 'products', '4chHmhm6fZV1qcdWIh11')
        // updateDoc(orderDoc, {
        //     isActive: false
        // })
        // .then(()=> console.log('Terminó la actualización'))
        // .catch(err => console.log(err))

    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    console.log(formData)
  
    return (
        <div>
            {cartList.map(product =>  <div key={product.id}>
                                            <img className="w-25" src={product.imageUrl}/>  
                                            Cantidad: {product.cantidad}- Precio: {product.price} - subtotal: {product.cantidad * product.price}
                                            <button className="btn btn-danger"> X </button>
                                        </div>
            )}
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
            
        </div>
    )
}
