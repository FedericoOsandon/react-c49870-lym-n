import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Titulo = ()=> {
    return (
        <div>
            <h1>Tiutlo de app</h1>
            <h2>Subtitulo de app</h2>
        </div>
    )
}

// jsx  -> javascript + xml -> parece html pero no lo es
// toda etiqueta tiene que tener un cierre

function App() { 
    const [count, setCount] = useState(0)   
    let estiloEnLineaMalaPractica = {
        color: 'yellow',
        fontSize: '50px',
        backgroundColor: 'blue' 
    }

    return (
    //    <div style= { estiloEnLineaMalaPractica } >
        <div className='div' onClick= { ()=>  alert('bienvenidos esto es react') }   >
            
            {/* { Titulo() } */}
            <Titulo />
            <Titulo />
            <Titulo />
            <Titulo />

            <p>El nombre es Fede 7</p>

            {/* <input type='text' name='nombre' placeholder='ingrese el nombre'></input> */}

            <input type='text' name='nombre' placeholder='ingrese el nombre'  />
            
            <div ></div>
            
            <hr />
       </div>
    )
}

export default App
// babel - webpack (esBuild)