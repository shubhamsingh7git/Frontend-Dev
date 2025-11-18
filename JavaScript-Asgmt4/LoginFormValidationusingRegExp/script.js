const username = document.getElementById("username")
const password = document.getElementById("password")

const userError = document.getElementById("userError")
const passError = document.getElementById("passError")
const msg = document.getElementById("msg")

const usernameRegex = /^.{5,}$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/

document.getElementById("loginBtn").addEventListener("click", () => {
  let valid = true

  if (!usernameRegex.test(username.value)) {
    username.classList.add("invalid")
    username.classList.remove("valid")
    userError.textContent = "Username must be at least 5 characters"
    valid = false
  } else {
    username.classList.add("valid")
    username.classList.remove("invalid")
    userError.textContent = ""
  }

  if (!passwordRegex.test(password.value)) {
    password.classList.add("invalid")
    password.classList.remove("valid")
    passError.textContent = "Password must be 8+ chars with uppercase, lowercase, number, special character"
    valid = false
  } else {
    password.classList.add("valid")
    password.classList.remove("invalid")
    passError.textContent = ""
  }

  if (valid) {
    msg.style.color = "green"
    msg.textContent = "Login Successful"

    username.value = ""
    password.value = ""
    username.classList.remove("valid")
    password.classList.remove("valid")
  } else {
    msg.style.color = "red"
    msg.textContent = "Validation Failed"
  }
})
