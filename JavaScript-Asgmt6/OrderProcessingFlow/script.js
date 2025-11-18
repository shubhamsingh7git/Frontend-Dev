const btn = document.getElementById("start");
const logBox = document.getElementById("log");

function log(msg) {
  logBox.textContent += msg + "\n";
}

function submitOrder() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.5;
    setTimeout(() => {
      if (fail) reject("Order Failed");
      else resolve("Order Success");
    }, 800);
  });
}

async function processOrder() {
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await submitOrder();
      log("Attempt " + i + ": Success");
      return res;
    } catch (err) {
      log("Attempt " + i + ": Failed");
    }
  }
  throw "Order could not be processed";
}

btn.addEventListener("click", async () => {
  logBox.textContent = "";
  try {
    await processOrder();
    log("Final Status: Order Completed");
  } catch (err) {
    log("Final Status: " + err);
  }
});
