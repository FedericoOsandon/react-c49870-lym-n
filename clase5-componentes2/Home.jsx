import { useEffect, useState } from "react"
import { Formulario } from "../Formulario/Formulario"
import { Titulo } from "../Titulo/Titulo"

// ciclo de vida de un compontes
    // primera ejecución se llama montaje
    // actualización (re render): 1- evento - 2- cambio en el estado 3- cambio en las props
    // desmontaje -> nodo del la interfaz

export const Home = () => {    
    const [count, setCount] = useState(0)
    const [like, setLike] = useState(false)
    // useEffect -> manejar distantas etapas en el ciclo de vidaa

    useEffect(()=>{
        // realizar toda tarea efecto secundario
        // console.log('domcument.addEventlistener(click, ()=>{})') // accedo al dom
        // clean up
        return () => {
            // Se ejecuta después de cada dismountin
            // detectar dismountin 
            // desregistrar remover evento
            // console.log('efecto de limpieza document.removeEvenlistener(click, ()=>{})')
            console.log('dismounting home')
        }
    })

    // useEffect(()=>{
    //     // realizar toda tarea efecto secundario
    //     console.log('llamada api (una sola ves solo en el montaje) -2')
    // }, [])

    // useEffect(()=>{
    //     // realizar toda tarea efecto secundario
    //     console.log('solo cuando cambie like -3')
    // }, [like]) // dependencias son estados y props que se usan como condiciones para ejecutar un useEffect



    const handleCount = () => {
        // cambio en el estado
        setCount(count+1)
    }
    const handleLike = () => {
        // cambio en el estado
        setLike(!like)
    }
    // dos manera de pasar pros
    
    
    // alert('tareas pesadas o asincrónica (consulta a una api con un fetch)') // después del render
    // console.log('render home - 4')
    return (
        <div style={{border: '3px solid yellow'}}>
            
            <label>{count}</label>
            <button onClick={handleCount}>Sumar</button>
            <button onClick={handleLike}>Me gusta</button>
        </div>
    )
}



