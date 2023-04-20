import { useState } from "react"

function Sumar() {
  const [number, setNumber]= useState(0)

  function handleChange (event) {
    const getNumber = parseInt(event.target.value)
    const newNumber = getNumber + number
    setNumber(getNumber)
   /*  setNumber(newNumber) */
  }
  function suma() {
   

  }


    
    return(
        <div>
            <input  onChange={handleChange} type="text" />
            <button onClick={suma}>suma</button>
        </div>
    )
}
export default Sumar