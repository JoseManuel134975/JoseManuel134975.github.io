import { useState } from "react"

export default function Tasks(){
    const [ arrTasks, setItem ] = useState(['Deberes', 'Cocina', 'Limpiar'])
    let task = ''

    function handleAdd(){
        setItem(...arrTasks, task)
        console.log(arrTasks);
    }

    function handleOnChange(e){
        task = e.target.value
        console.log(task);
    }

    return(
        <>
            <input type="text" onChange={handleOnChange}/>
            <button onClick={handleAdd}>Añadir tarea</button>
            <ul>
                {arrTasks.map((element, index) => (
                    <li key={index}>{arrTasks.length > 0 && element}</li>
                ))}
            </ul>
        </>
    )
}