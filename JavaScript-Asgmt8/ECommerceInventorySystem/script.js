const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
  { id: 2, name: "Mouse", category: "Electronics", price: 700, stock: 15 },
  { id: 3, name: "Shoes", category: "Fashion", price: 2000, stock: 2 },
  { id: 4, name: "T-Shirt", category: "Fashion", price: 500, stock: 20 },
  { id: 5, name: "Book", category: "Education", price: 300, stock: 5 }
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

console.log("Low Stock:", getLowStockProducts());
console.log("Sorted by Price:", sortProductsByPrice());
console.log("Total Inventory Value:", calculateTotalInventoryValue());
console.log("Grouped by Category:", groupByCategory());
