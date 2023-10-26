import { useEffect, useRef, useState } from "react"
export const Home = () => {    
    const [count, setCount] = useState(0) // si es persistente pero provoca un nuevo render
    // let count = 0 no era persistente
    // let ref = useRef(0)
    // console.log(ref.current) // ref va persistente pero no provoca nuevo render 
    // ref.current++

    
    const divRef = useRef(null)

    const handleCount = () => {
        // cambio en el estado
        setCount(count+1)
    }

    const handleDivRef = ()=> {
        divRef.current.innerText = 'nuevo contenido'
    }

    return (
        <center>
            
            {/* <p>cantidad renderizada: {ref.current}</p> */}
            <div ref={divRef}>
                contenido inicial
            </div>
            <label>{count}</label>
            <button onClick={handleCount}>Sumar</button>
            <button onClick={handleDivRef}>cambiar texto del div</button>
            
        </center>
    )
}



