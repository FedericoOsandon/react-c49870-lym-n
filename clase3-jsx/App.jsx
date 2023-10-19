import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() { // fuinciones constructoras
    const [count, setCount] = useState(0)
    // let counter = 0
    // counter = counter + 1
    // counter++
    // counter += 1
 // console.log('contador: ',counter)

    const condition = false
    // let result = null
    // if (condition) {
    //     result = 'Verdadero'
    // } else {
    //     result = 'Falso'        
    // }
    
    // console.log('El resultado es: ' + result)

    // sugar syntax 
    // console.log(`El resultado ${condition ? 'Verdadero' : 'Falso' }. Muchas gracias por su interes`)

    // Spread operator
    // const cuatro = 4
    // const numerosArray = [ 0,1,2,3 ] // 0,1,2,3,4
    // const nuevoArrayConElCuatro = [ cuatro,...numerosArray]
    // console.log(nuevoArrayConElCuatro)

    // Propiedades dinámicas

    const campo = 'email'
    const objetoPersona = {
        nombre: 'Federico',
        apellido: 'Osandón',
        email: 'fede@gmail.com'
        // [campo]: 'jalsjfdaldjsfkas'
    }

    // objetoPersona.nombre = 'juan'
    // console.log(objetoPersona)

    // deep matching
        // destructuring
            // const nombre = objetoPersona.nombre
            // const apellido = objetoPersona.apellido

            // const { nombre = nombre, apellido = apellido } = objetoPersona
            // const { nombre: first_name, apellido: last_name } = objetoPersona
            // const { nombre, apellido, email='example@gmail.com' } = objetoPersona
            // const [] = Array


        // console.log(first_name, last_name)
        // console.log(email)
   
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Fede el mejor</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
