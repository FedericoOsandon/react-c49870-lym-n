import Caso1 from "../../clases/clase9/Caso1"
import Caso2 from "../../clases/clase9/Caso2"
import { Input } from "../../clases/clase9/Input"
import Intercambiabilidad from "../../clases/clase9/Intercambiabilidad"


const ItemDetail = ({producto}) => {
  
  return (
    <div>
        {producto.name}
        <Input />
    </div>
  )
}

export default ItemDetail

