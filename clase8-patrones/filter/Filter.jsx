import { useState } from "react"


export const Filter = ({children, productos})=> {
    const [ filterState, setFilterState ] = useState('')

    const handleFilterChange = (e) => {
        // <input type='tipoo' name='apllido' />
        setFilterState(e.target.value)
    }

    return (
        // children = productFiltered({productos, filterState, handleFilterChange })
        children({productos, filterState, handleFilterChange })
    )
}
