import { useState } from "react"
import { Formulario } from "../Formulario/Formulario"
import { Titulo } from "../Titulo/Titulo"


// un evento me dispara una nueva ejecución (re render) de la función 
// count = 1
export const Home =/* The code `() => { ... }` is an arrow function in JavaScript. It is a concise way
to define a function without using the `function` keyword. In this case, it is
defining a function that is used as the body of the `Home` component in a React
application. */
 () => {
    // estados 
    const [ count, setCount ] = useState(1)

    console.log(count)
    // let count = 1 // no es persistente por dura lo que dura la ejecución de la función 
    // hook 

    const handleAdd = () => {
        // count = count + 1 // count ++ y count += 1
        // console.log(count)
        setCount(count+1)
    }

    return (
        <div style={{border: '3px solid yellow'}}>
            <Titulo />
            <Formulario />
            <center>
                <p>{count}</p>           
                <button onClick={handleAdd}>+</button> 

            </center>
        </div>
    )
}



