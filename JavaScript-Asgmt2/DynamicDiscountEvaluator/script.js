const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

let updatedCart = cart.map(p => {
  let discount = 0;
  if (p.category === "electronics") discount = 0.10;
  if (p.category === "fashion") discount = 0.05;
  return { ...p, finalPrice: p.price - p.price * discount };
});

let total = updatedCart.reduce((sum, p) => sum + p.finalPrice, 0);

if (total > 50000) {
  total = total - total * 0.05;
}

console.log("Cart Details:", updatedCart);
console.log("Final Total:", total.toFixed(2));
