import { useState } from "react"


function Counter () {

    // useState retorna elementos: el estado y la función que actualiza el estado

    const [count, setCount] = useState(0);
    console.log("estado", count)
    
   
    //Aqui va la logica 
    function sumaUno() {
        setCount(count + 1)
    }
    function restaUno() {
        setCount(count -1)
    }
    function multiplicaPorDOs() {
        setCount(count *2)
    }
    function dividirEntreDos() {
        setCount(count / 2)
    }

    return (
        <div>
            <h1>Soy un contador</h1>
            <h1>{count}</h1>
            <button onClick={restaUno}>-1</button>
            <button onClick={sumaUno}>+1</button>
            <button onClick={multiplicaPorDOs}> *2</button>
            <button onClick={dividirEntreDos}> /2</button>
        </div>
    )
}

export default Counter


