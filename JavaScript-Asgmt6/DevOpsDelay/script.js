const logBox = document.getElementById("log");
const btn = document.getElementById("deploy");

function log(msg) {
  logBox.textContent += msg + "\n";
}

function serverA() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.2;
    setTimeout(() => {
      if (fail) reject("Server A failed");
      else resolve("Server A deployed");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.2;
    setTimeout(() => {
      if (fail) reject("Server B failed");
      else resolve("Server B deployed");
    }, 3000);
  });
}

btn.addEventListener("click", () => {
  logBox.textContent = "";

  Promise.all([serverA(), serverB()])
    .then(() => log("Deployment completed for all servers"))
    .catch(err => log("Error: " + err));

  Promise.race([serverA(), serverB()])
    .then(msg => log("Fastest response: " + msg))
    .catch(err => log("Fastest failure: " + err));
});
