// import './App.css'
import { Home } from './components/Home/Home'

// function saludo(){
//     return 
    
// }
// componentes -> funciones que comienzan con mayúscula return jsx  
// 2 tipos de componente: funcional presentacional - contenedor
// presentacional tiene muy pocos estados, y sirve para solo mostrar info en la ui 
// contenedor sirve para la lógica de funcionalida







function App() { 
    const contenidDeTitulo = 'Soy titulo de app'
    
    return (
        // <elementos></elementos>
        // Titulo( {nombre: 'fede'} ) -> <Titulo />    
        // campo=valor key=value
        <>             
            {/* <NavBar />        */}
            <Home   />     
                      
        </>
    )
}

export default App