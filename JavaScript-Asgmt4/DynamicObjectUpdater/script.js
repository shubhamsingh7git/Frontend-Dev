const user = { 
  name: "Akash",
  email: "akash@mail.com",
  age: 21
}

const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const ageInput = document.getElementById("age")
const output = document.getElementById("output")

nameInput.value = user.name
emailInput.value = user.email
ageInput.value = user.age

function displayUser() {
  output.innerHTML = 
    `Name: ${user.name}<br>Email: ${user.email}<br>Age: ${user.age}`
}

displayUser()

document.getElementById("updateBtn").addEventListener("click", () => {
  user.name = nameInput.value
  user.email = emailInput.value
  user.age = ageInput.value
  displayUser()
})
