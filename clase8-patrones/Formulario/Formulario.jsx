import { useState } from "react"
import { Titulo } from "../Titulo/Titulo"
import { Form } from "./From.jsx"
import { formWhitValidation } from "./formWitValidation.jsx"


const FormWhitValidation = formWhitValidation(Form)
// contenedor
export const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: ''
    })    

    const handleOnChange = (evt) => {
        // console.log(evt.target.name)
        // console.log(evt.target.value)

        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value 
        })
    }
    
    return (
        <FormWhitValidation 
            formData={formData} 
            handleOnChange={handleOnChange} 
        />
    )
}

