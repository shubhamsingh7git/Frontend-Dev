const logBox = document.getElementById("log");
const btn = document.getElementById("load");

function getBugs() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;
    setTimeout(() => {
      if (fail) reject("API failed to fetch bugs");
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

btn.addEventListener("click", () => {
  logBox.textContent = "";
  getBugs()
    .then(bugs => {
      console.table(bugs);
      logBox.textContent = "Bugs loaded. Check console table.";
    })
    .catch(err => {
      logBox.textContent = "Error: " + err;
    });
});
