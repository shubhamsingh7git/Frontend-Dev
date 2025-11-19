const menu = {
  burger: 120,
  pizza: 250,
  fries: 80,
  coke: 40
};

function calculateBill(orderItems) {
  const prices = orderItems.map(item => {
    if (!menu[item]) throw new Error(item + " is not available");
    return menu[item];
  });
  return prices.reduce((a, b) => a + b, 0);
}

try {
  const total = calculateBill(["burger", "pizza", "fries"]);
  console.log("Total Bill:", total);
} catch (e) {
  console.log("Error:", e.message);
}

try {
  const total2 = calculateBill(["burger", "icecream"]);
  console.log("Total Bill:", total2);
} catch (e) {
  console.log("Error:", e.message);
}
