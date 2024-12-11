// function getFetchV1() {
//     fetch('http://localhost:3000/posts')
//         .then(res => res.json())
//         .then(json => {
//             json.forEach((element) => {
// console.log(`Usuario: ${element.username} --- Contraseña: ${element.password}`)
//             })
//             return json
//         })
// }

async function getFetchV1() {
    try {
        let response = fetch('http://localhost:3000/posts') // Localhost
        let json = (await response).json() // Convierte la respuesta a JSON

        return json
    } catch (err) {
        alert(err)
    }
}

const arrUsers = await getFetchV1() // Devuelve el resultado de la promesa (array)
console.log(arrUsers);

// document.addEventListener("DOMContentLoaded", () => getFetchV1())


const form = document.forms['form']
const submit = form.elements['submit']

const validUser = (user, pass, array) => array.find((element) => element.username === user && element.password === pass)


submit.addEventListener("click", (event) => {
    event.preventDefault()

    const user = form.elements['username'].value
    const pass = form.elements['password'].value

    if (validUser(user, pass, arrUsers) !== undefined) {
        alert('¡Correcto!')
    } else {
        alert('Incorrecto...')
    }
})
