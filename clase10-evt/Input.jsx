

export const Input = () => {   

    const handleInput = (event)=>{ 
        // event.preventDefault()  
        event.stopPropagation()
        console.log(event.key)
    }
   
    return (
        <div className="box border border-5 border-primary  m-3 w-100" >
            <div className=""  >
                <input 
                    className="m-5 "                  
                    type="text" 
                    name="nombre" 
                    // onKeyDown={ handleInput }
                    onClick={ handleInput }
                />
            </div>
        </div>
    )
}
