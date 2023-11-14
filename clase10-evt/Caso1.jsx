import { useState } from "react"
import { ItemsOptions } from "./Select";


const options = [ // api cantidad  
    { value: 1, text: "Azul" },
    { value: 2, text: "Rojo" }
    
]


export default function Caso1() { // componente conteneder
  
    const [option, setOption] = useState(1)
  

    function optionSelected(value) {
        setOption(value);
        //console.log(value)
    }
      
    return (
        <>
            <ItemsOptions option={option} options={options} optionSelected={optionSelected} />            
        </>
    )
}





