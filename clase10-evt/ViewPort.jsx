import React, { useEffect, useState } from 'react'


export const ViewPort = () => {
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)


    useEffect(()=>{       
        function resizeHandler(e){
            console.log(e);
            setHeight(e.clientX)
            setWidth(e.clientY)
        }        
        // evitarlo, pero sino sepuede poner dentro de un useEffect
        window.addEventListener('mousemove', resizeHandler)// manualmente   
        // window.addEventListener('mousemove', resizeHandler)// manualmente   
        // window.addEventListener('mousemove', resizeHandler)// manualmente   
        // window.addEventListener('mousemove', resizeHandler)// manualmente   
        // window.addEventListener('mousemove', resizeHandler)// manualmente   
        // window.addEventListener('mousemove', resizeHandler)// manualmente   
        
        return () => {
            // desregistra el evento
            window.removeEventListener('mousemove', resizeHandler)// manualmente   

        } // clean up
        
    })


    return (
        <div >
            {width} x {height}
        </div>
    )
}
