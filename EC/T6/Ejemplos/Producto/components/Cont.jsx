import { useState } from "react";



export default function Cont(){
    // Destructuring para declarar el estado
    const [ count, setCount ] = useState(0);
    const [ state, setState ] = useState('Clica');

    function handleCount(){
        // Suma todos los que le digamos con las funciones arrow
        setCount((count) => count + 1);
        setCount((count) => count + 1);

        // Suma solo 1
        //setCount(count + 1)
    }

    function handleSetState(){
        setState('Finalizado')
    }

    return(
        <>
            <button onClick={handleCount}>{count}</button>
            <button onClick={handleSetState}>{state}</button>
        </>
    )
}