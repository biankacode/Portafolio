import { useState } from "react"

function Toggle () {
    
    const [toggle, setToggle] = useState("si");
    

    function alternar() {

      if (toggle === "si") {
        setToggle("no")
      } else {
        setToggle("si")
      }
    }

    return(
        <div>
            <h1>Alterna </h1>
            <h2>{toggle}</h2>
            <button onClick={alternar}>alternar</button>
        </div>
    )
}

export default Toggle