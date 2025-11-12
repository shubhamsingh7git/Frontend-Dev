let product = " wireless headphones PRO ";

let cleaned = product.trim().toLowerCase();
let formatted = cleaned.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
formatted = formatted.replace("Pro", "Pro Edition");

console.log("Cleaned Title:", formatted);
console.log("Length:", formatted.length);
