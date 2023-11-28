import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mFetch"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import { ItemList } from "./ItemList/ItemList"
// no sql no relacional
const Loading = () => {
    useEffect(()=>{
        // cód 
        // return () => {
        //     console.log('desmontando loading')
        // } // Clean up
    })
    return (
        <h2>Cargando ...</h2>
    )
}

export const ItemListContainer = ( { greeting } ) => { 
    const [ productos, setProductos ] = useState([])
    const [ producto, setProducto ] = useState({})
    const [loading, setLoading] = useState(true)
    const [like, setLike] = useState(false)
    // enrutado
    const { cid } = useParams()

    // useEffect(()=>{
    //     if (cid) {
    //         mFetch()
    //         .then(  result => setProductos(result.filter(product => product.category === cid)))
    //         .catch(err => console.log(err))   
    //         .finally(()=> setLoading(false))         
    //     } else {
    //         mFetch()
    //         .then(  result => setProductos(result))
    //         .catch(err => console.log(err))            
    //         .finally(()=> setLoading(false))         
    //     }
    // }, [cid])

    // acceder a un documento 

    // useEffect(() => {
    //     const dbFirestore = getFirestore() // conecta con servicio de firestores

    //     const queryDoc = doc(dbFirestore, 'products', '4chHmhm6fZV1qcdWIh11') // apuntando a un doc de firestore
    //     getDoc(queryDoc)
    //     .then(resultado => setProducto( { id: resultado.id, ...resultado.data() } ))
    //     .catch(err => console.log(err))
    // }, [])

    // traer toda la colección 

    // useEffect(()=>{
    //     const dbFirestore = getFirestore()

    //     const queryCollection = collection(dbFirestore, 'products')   // () => {}

    //     getDocs(queryCollection)
    //     .then(resp => setProductos(resp.docs.map( producto => ( { id: producto.id, ...producto.data() } )  )))
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false))
    // }, [])

    // datos filtrados de firestore
    useEffect(()=>{
        
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'products')   // () => {}

        const queryFilter = query(
            queryCollection, 
            where('category', '==', 'remeras'),
            // where('price', '>=', 6000),
            // limit(1)
            // orderBy('price','asc')
        )

        getDocs(queryFilter)
        .then(resp => setProductos(resp.docs.map( producto => ( { id: producto.id, ...producto.data() } )  )))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    console.log(productos)

    const handleLike = ()=>{
        setLike(!like)
    }
    const handleAdd = ()=>{
        setProductos([
            ...productos,
            {id: productos.length + 1, name: 'producto ejemplo', price: 3000, stock: 100, category: 'pantalones'}
        ])
    }


    console.log('Renderizando ItemListContaniner')
    return (
        <>
            <h2>Bienvenido a : { greeting }</h2>
            <button onClick={handleLike}>Me gusta</button>
            <button onClick={handleAdd}>Agregar producto</button>
            {
                loading ? 
                    <Loading /> 
                :
                    <ItemList productos={productos} />
            }
        </>
    )
}

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAQmkomcgXkySSFxOi2ffHmTL8lqHLoM2c",
//   authDomain: "comision49870.firebaseapp.com",
//   projectId: "comision49870",
//   storageBucket: "comision49870.appspot.com",
//   messagingSenderId: "751080162771",
//   appId: "1:751080162771:web:8792e04f0dbd8f0267db26"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);