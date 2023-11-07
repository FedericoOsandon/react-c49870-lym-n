import { useState } from "react"

export const formWhitValidation = ( FormWrappedComponent ) => {

    const NewFormWhitValidation = (props) => {
        const [ errors, setErrors ] = useState({})

        const validateForm = () => {
            let newErrors = {}
            let isValid = true

            if(!props.formData.nombre){
                newErrors.nombre = 'El campo nombre es obligarorio'
                isValid = false
            }
            if(!props.formData.email){
                newErrors.email = 'El campo email es obligarorio'
                isValid = false
            }

            setErrors(newErrors)
            return isValid
        }


        return (
            <FormWrappedComponent 
                {...props}
                errors = {errors}
                validateForm = {validateForm}
            />
        )
    }

    return NewFormWhitValidation

}