import { useCartContext } from "../../contexts/CartContext"


import {  useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mFetch"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { TextComponent, TextComponent2, TextComponent3, TextComponent4, TextComponent5, TextComponent6, TextComponent7 } from "../../../react-c47255-myj-n/clase12-tecnicas-rendering/ComponenteEjemplosCondicionales"


export const ItemDetaliContainer = () => {
    const [ product, setProduct ] = useState({})
    const { pid } = useParams()
   

    // console.log(obj)
    useEffect(()=>{
            mFetch(pid) //llamada a las apis -> 
            .then(resultado => setProduct(resultado))
            .catch(error => console.log(error))
            // .finally(()=> setLoading(false))
        }, [])

    
    return (
        <>
            {/* {
                  agregar un loading
            } */}
            <ItemDetail product={product} />
            {/* <TextComponent >
            </TextComponent> */}
            {/* <TextComponent2 /> */}
            {/* <TextComponent3 /> */}
            {/* <TextComponent4 /> */}
            {/* <TextComponent5 /> */}
            {/* <TextComponent6  otro='mt-2'/> */}
            {/* <TextComponent7 /> */}
        </>
        
  )
}

