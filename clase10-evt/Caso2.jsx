import { useState } from "react";
import Select from "./Select";


const options = [
    { value: 1, text: "Azul" },
    { value: 2, text: "Rojo" }  
];

export default function Caso2() {

  const [option, setOption] = useState(1);

  function optionSelected(value) {
    setOption(value);
    // console.log(value);
  }
  
  return (
    <>
        {option===1 ? 
                <img src='https://static.dafiti.com.ar/p/tommy-hilfiger-6711-936993-1-product.jpg' alt='foto' />
                : 
                <img src='https://static.dafiti.com.ar/p/everlast-0575-351435-1-product.jpg' alt='foto' /> 
        }

        <Select
            options={options}
            onSelect={optionSelected} 
            option={option} 
        />
    </>
  );
}
