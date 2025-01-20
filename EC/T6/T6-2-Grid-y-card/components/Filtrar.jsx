import productos from "../data/productos.json";

export default function Filtrar(){
    let precioe="";
    function handleFiltrar(precio){
       /*  const precio = document.getElementById("inputPrecio").value; */
        const filtroproductos=productos.filter((p)=>p.price>precio)
        console.log(filtroproductos)
        /* productos.forEach(producto =>{
            if(producto.price>precio){
                console.log("Titulo:"+producto.title+"Precio"+producto.price);
            }
            }
        ) */

    }


    return(
        <>
        <input id="inputPrecio" type="text" name="Filtrar" placeholder="Filtrado de precio" onChange={(e)=>precioe=e.target.value}/>
        {/* <button onClick={handleFiltrar(20)}>Filtrar</button> */}
        <button onClick={()=>handleFiltrar(precioe)}>Filtrar2</button>
        </>
    )
}