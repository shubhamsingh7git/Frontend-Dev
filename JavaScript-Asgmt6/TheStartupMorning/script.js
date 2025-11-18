const logBox = document.getElementById("log");
const btn = document.getElementById("start");

function log(msg) {
  logBox.textContent += msg + "\n";
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Boiling failed") : resolve("Water boiled");
    }, 1000 + Math.random() * 1000);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Brewing failed") : resolve("Coffee brewed");
    }, 1000 + Math.random() * 1000);
  });
}

function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Pouring failed") : resolve("Coffee poured");
    }, 1000 + Math.random() * 1000);
  });
}

btn.addEventListener("click", () => {
  logBox.textContent = "";
  log("Starting coffee process...");

  boilWater()
    .then(msg => {
      log(msg);
      return brewCoffee();
    })
    .then(msg => {
      log(msg);
      return pourCoffee();
    })
    .then(msg => {
      log(msg);
      log("Coffee ready for the team!");
    })
    .catch(err => {
      log("Error: " + err);
    });
});
