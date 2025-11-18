const logBox = document.getElementById("log");
const btn = document.getElementById("run");

function log(msg) {
  logBox.textContent += msg + "\n";
}

btn.addEventListener("click", () => {
  logBox.textContent = "";

  log("Start");

  setTimeout(() => log("setTimeout callback (macrotask)"), 0);

  Promise.resolve().then(() => log("Promise.then callback (microtask)"));

  log("Synchronous log");

  log("End");
});
