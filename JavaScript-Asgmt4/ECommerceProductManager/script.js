class Product {
  constructor(id, name, price, category) {
    this.id = id
    this.name = name
    this.price = price
    this.category = category
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent / 100)
  }

  getDetails() {
    return `${this.id} - ${this.name} - ${this.price} - ${this.category}`
  }
}

const products = [
  new Product(1, "Laptop", 45000, "Electronics"),
  new Product(2, "Shoes", 1200, "Fashion"),
  new Product(3, "Watch", 900, "Accessories"),
  new Product(4, "Phone", 15000, "Electronics")
]

products.forEach(p => p.applyDiscount(10))

const filtered = products.filter(p => p.price > 1000)

console.log("Products with price > 1000:")
filtered.forEach(p => console.log(p.getDetails()))
