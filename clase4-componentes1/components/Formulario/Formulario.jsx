import { Titulo } from "../Titulo/Titulo"

export const Formulario = () => {
    
    return (
        <div style={{border: '3px solid red'}}>
           <Titulo  />
            <form>
                <input type='text' name='nombre' placeholder='ingrese el nombre' />
            </form>
        </div>
    )
}