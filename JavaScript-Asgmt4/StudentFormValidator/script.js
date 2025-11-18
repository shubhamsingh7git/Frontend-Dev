const form = document.getElementById("studentForm")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const phone = document.getElementById("phone")
  const password = document.getElementById("password")

  const nameError = document.getElementById("nameError")
  const emailError = document.getElementById("emailError")
  const phoneError = document.getElementById("phoneError")
  const passwordError = document.getElementById("passwordError")

  const nameRegex = /^[A-Za-z ]+$/
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  const phoneRegex = /^[0-9]{10}$/
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/

  let valid = true

  if (!nameRegex.test(name.value)) {
    name.classList.add("invalid")
    name.classList.remove("valid")
    nameError.textContent = "Only alphabets allowed"
    valid = false
  } else {
    name.classList.add("valid")
    name.classList.remove("invalid")
    nameError.textContent = ""
  }

  if (!emailRegex.test(email.value)) {
    email.classList.add("invalid")
    email.classList.remove("valid")
    emailError.textContent = "Invalid email format"
    valid = false
  } else {
    email.classList.add("valid")
    email.classList.remove("invalid")
    emailError.textContent = ""
  }

  if (!phoneRegex.test(phone.value)) {
    phone.classList.add("invalid")
    phone.classList.remove("valid")
    phoneError.textContent = "Phone must be exactly 10 digits"
    valid = false
  } else {
    phone.classList.add("valid")
    phone.classList.remove("invalid")
    phoneError.textContent = ""
  }

  if (!passwordRegex.test(password.value)) {
    password.classList.add("invalid")
    password.classList.remove("valid")
    passwordError.textContent = "Password must contain 1 uppercase, 1 number, and 1 special character"
    valid = false
  } else {
    password.classList.add("valid")
    password.classList.remove("invalid")
    passwordError.textContent = ""
  }

  if (valid) {
    alert("Form submitted successfully")
    form.reset()
    const inputs = form.querySelectorAll("input")
    inputs.forEach(i => {
      i.classList.remove("valid")
    })
  }
})
