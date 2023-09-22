let inputs = document.querySelectorAll("input");
let button = document.querySelector("button").addEventListener("click",checkforEmptiness)
let ErrorMessage = document.createElement("p")
let inputdivs = document.getElementsByClassName(".row-form")
let PasswordInput = document.getElementById("Passsword")
let CPInput = document.getElementById("confirmPassword")
let emptyinputs = []

function checkforEmptiness() {
emptyinputs = []
for (let i = 0; i < inputs.length; i ++) {

if (inputs[i].value === "" && !emptyinputs.includes(inputs[i])) {

emptyinputs.push(inputs[i])
ErrorMessage.textContent = `!This field is required`
ErrorMessage.style.color = "red"


}
}
console.log(emptyinputs)

if (emptyinputs.length != 0) {

emptyinputs[0].focus()

}else {

location.reload()

}

emptyinputs[0].placeholder = ErrorMessage.textContent

}
