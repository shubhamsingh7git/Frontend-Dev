const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
const urlRegex = /^https:\/\//

const emailError = document.getElementById("emailError")
const gitError = document.getElementById("gitError")
const linkError = document.getElementById("linkError")
const output = document.getElementById("output")

document.getElementById("submitBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const skills = document.getElementById("skills").value
  const github = document.getElementById("github").value
  const linkedin = document.getElementById("linkedin").value

  let valid = true

  if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format"
    valid = false
  } else {
    emailError.textContent = ""
  }

  if (!urlRegex.test(github)) {
    gitError.textContent = "GitHub URL must start with https://"
    valid = false
  } else {
    gitError.textContent = ""
  }

  if (!urlRegex.test(linkedin)) {
    linkError.textContent = "LinkedIn URL must start with https://"
    valid = false
  } else {
    linkError.textContent = ""
  }

  if (!valid) return

  const resume = {
    name,
    email,
    skills: skills.split(",").map(s => s.trim()),
    github,
    linkedin
  }

  output.textContent = JSON.stringify(resume, null, 2)
})
