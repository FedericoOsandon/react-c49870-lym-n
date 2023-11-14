import {useState, useEffect} from 'react'
// import './input.css'


export const Input = () => {
    const [palabra, setPalabra] = useState({nombre: ''})

    const inputHandler = (event)=>{
        //event.stopPropagation()
        // event.preventDefault()
        console.log(event.target.name)       
        console.log(event.target.value) 
        
        setPalabra({
            ...palabra,
            [event.target.name]: event.target.value
        })      
        
    }

    console.log(palabra)
    return (
        <div className="box" >
            <div className="border border-1 border-warning" >
                <input 
                    className="m-5" 
                    onChange={ inputHandler } 
                    // onClick={ inputHandler } 
                    type="text" 
                    name="nombre" 
                    id="i"
                />
            </div>
        </div>
    )
}
