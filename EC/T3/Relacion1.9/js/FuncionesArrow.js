// function sum(num1, num2) {
//     return num1 + num2
// }
// sum(40, 2)
// sum(42, 0)

// 1.1
const sum = (num1, num2) => num1 + num2

// function stringLength(str) {
//     console.log(`the length of "${str}" is:`, str.length)
// }
// let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
// stringLength(longestCityNameInTheWorld)

// 1.2
const stringLength = str => str.length

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvelyou are", "You're so lovely", "You're so sweet that I'd think you're a sweetpotato -- and I LOOOOVE POTATOES"]
// function showAlert(name) {
//     alert(alerts[(Math.floor(Math.random() * alerts.length))] + `, ${name}!`)
// }
// showAlert("you ball of fluff")

// 1.4
const showAlert = name => alert(alerts[(Math.floor(Math.random() * alerts.length))] + `, ${name}!`)