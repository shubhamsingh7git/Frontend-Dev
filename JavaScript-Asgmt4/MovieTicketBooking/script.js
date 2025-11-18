const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const seatsInput = document.getElementById("seats")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const seatsError = document.getElementById("seatsError")

const ticketBox = document.getElementById("ticket")

const nameRegex = /^[A-Za-z ]+$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
const seatsRegex = /^([1-9]|10)$/

document.getElementById("bookBtn").addEventListener("click", () => {
  let valid = true

  if (!nameRegex.test(nameInput.value)) {
    nameInput.classList.add("invalid")
    nameInput.classList.remove("valid")
    nameError.textContent = "Only alphabets allowed"
    valid = false
  } else {
    nameInput.classList.add("valid")
    nameInput.classList.remove("invalid")
    nameError.textContent = ""
  }

  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("invalid")
    emailInput.classList.remove("valid")
    emailError.textContent = "Invalid email format"
    valid = false
  } else {
    emailInput.classList.add("valid")
    emailInput.classList.remove("invalid")
    emailError.textContent = ""
  }

  if (!seatsRegex.test(seatsInput.value)) {
    seatsInput.classList.add("invalid")
    seatsInput.classList.remove("valid")
    seatsError.textContent = "Seats must be 1 to 10 only"
    valid = false
  } else {
    seatsInput.classList.add("valid")
    seatsInput.classList.remove("invalid")
    seatsError.textContent = ""
  }

  if (valid) {
    const booking = {
      name: nameInput.value,
      email: emailInput.value,
      seats: seatsInput.value
    }

    ticketBox.style.display = "block"
    ticketBox.innerHTML =
      `<h3>Ticket Details</h3>
       Name: ${booking.name}<br>
       Email: ${booking.email}<br>
       Seats: ${booking.seats}`

    nameInput.value = ""
    emailInput.value = ""
    seatsInput.value = ""
    nameInput.classList.remove("valid")
    emailInput.classList.remove("valid")
    seatsInput.classList.remove("valid")
  }
})
