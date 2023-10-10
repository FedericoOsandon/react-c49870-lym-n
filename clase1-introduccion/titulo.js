const titulo = (div) => {
    const titulo = document.createElement('h1')
    titulo.innerText = 'Bienvenidos a la comisión 49870'
    
    const subTitulo = document.createElement('h2')
    subTitulo.innerText = 'Curso de react'
    
    div.appendChild(titulo)
    div.appendChild(subTitulo)
}

export default titulo
