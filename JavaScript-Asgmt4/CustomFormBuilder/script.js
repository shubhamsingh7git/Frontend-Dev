class FormBuilder {
  constructor(fields) {
    this.fields = fields
    this.container = document.getElementById("formContainer")
    this.renderForm()
  }

  renderForm() {
    let html = ""
    this.fields.forEach(f => {
      html += `<label>${f.label}</label>`
      html += `<input type="${f.type}" id="${f.label.replace(/ /g, '_')}" />`
    })
    this.container.innerHTML = html
  }

  getFormData() {
    const data = {}
    this.fields.forEach(f => {
      const id = f.label.replace(/ /g, "_")
      const value = document.getElementById(id).value
      data[f.label] = value
    })
    return data
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" }
]

const form = new FormBuilder(fields)

document.getElementById("submitBtn").addEventListener("click", () => {
  const data = form.getFormData()
  console.log("Form Data:", data)
  alert("Check console for submitted data")
})
