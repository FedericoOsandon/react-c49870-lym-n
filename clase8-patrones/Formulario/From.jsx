
export const Form = ({formData, handleOnChange, errors, validateForm}) => {
    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        if (validateForm()) {
            console.log('enviando...', formData)            
        }
    }
    return (
        <div style={{border: '3px solid red'}}>
            <form onSubmit={handleOnSubmit}>
                <input 
                    type='text' 
                    name='nombre'
                    value={formData.nombre}
                    onChange={handleOnChange} 
                    placeholder='ingrese el nombre'                         
                />
                <br/>
                {errors && errors.nombre && <span>{errors.nombre}</span>}
                <br/>
                <input 
                    type='text' 
                    name='email'
                    value={formData.email}
                    onChange={handleOnChange} 
                    placeholder='ingrese el email' 
                />
                <br></br>
                {errors && errors.email && <span>{errors.email}</span>}
                <br/>
                <button>Enviar</button>
            </form>
        </div>
    )
}
