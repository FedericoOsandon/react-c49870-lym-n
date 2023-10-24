export const Titulo = ( {titulo = 'Título', subtitulo = 'Subítulo', saludo = 'saludos'} ) => { //propiedades es un parametro de tipo objeto
    // const { titulo, subtitulo} = props

    return (
        <div style={{border: '3px solid green'}}>
            <h1 className='h1'>{titulo}</h1>
            <h2 className='h2'>{subtitulo}</h2>  
            <p>{saludo}</p>
        </div>
    )
} 