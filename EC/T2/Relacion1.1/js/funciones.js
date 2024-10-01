// Ejercicio 2: Función
function sundayBirthday(birth = new Date()) {
    let year = birth.getFullYear();
    
    

    do{
        



        year++
    }while(year <= 2100)
}

// Ejercicio 3: Función
function contarSegundos(segundos){
    segundos++;
    setTimeout(contarSegundos, 1000);
}