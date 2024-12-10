function getFetchV1() {
    fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(json => {
            json.forEach((element) => {
                // console.log(`Usuario: ${element.username} --- Contraseña: ${element.password}`)
            })
            return json
        })
}

const arrUsers = getFetchV1()
console.log(arrUsers);

document.addEventListener("DOMContentLoaded", () => getFetchV1())


const form = document.forms['form']
const user = form.elements['username']
const pass = form.elements['password']

const submit = form.elements['submit']

const validUser = (user, pass, array) => {
    if(array.find((element) => element.username == user.value && element.password == pass.value)) {
        return true
    } else {
        return false
    }
}

submit.addEventListener("click", (event) => {
    event.preventDefault()
    validUser(user.value, pass.value, arrUsers)
})
