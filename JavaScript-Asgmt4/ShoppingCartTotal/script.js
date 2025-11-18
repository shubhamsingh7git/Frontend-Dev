class Cart {
  constructor() {
    this.items = []
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty })
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  }

  applyCoupon(code) {
    const regex = /^(SAVE|DISC)(\d{1,2})$/
    const match = code.match(regex)
    if (!match) return { valid: false, discount: 0 }

    const discount = parseInt(match[2])
    return { valid: true, discount }
  }
}

const cart = new Cart()
const result = document.getElementById("result")

document.getElementById("addBtn").addEventListener("click", () => {
  const name = document.getElementById("itemName").value
  const price = Number(document.getElementById("itemPrice").value)
  const qty = Number(document.getElementById("itemQty").value)

  if (!name || !price || !qty) return

  cart.addItem(name, price, qty)

  document.getElementById("itemName").value = ""
  document.getElementById("itemPrice").value = ""
  document.getElementById("itemQty").value = ""

  result.innerHTML = "Item Added"
})

document.getElementById("checkBtn").addEventListener("click", () => {
  const coupon = document.getElementById("coupon").value
  const total = cart.getTotal()
  const applied = cart.applyCoupon(coupon)

  if (!applied.valid) {
    result.innerHTML = `Total: ₹${total}<br>Invalid Coupon`
    return
  }

  const discountAmount = total * (applied.discount / 100)
  const finalTotal = total - discountAmount

  result.innerHTML =
    `Total: ₹${total}<br>
     Discount: ${applied.discount}%<br>
     Final Total: ₹${finalTotal}`
})
