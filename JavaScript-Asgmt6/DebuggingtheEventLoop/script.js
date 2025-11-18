const btn = document.getElementById("run");
const out = document.getElementById("output");

function log(msg) {
  out.textContent += msg + "\n";
}

btn.addEventListener("click", () => {
  out.textContent = "";

  log("Predicted Order:");
  log("1. Script start");
  log("2. Script end");
  log("3. Promise callback");
  log("4. Timeout callback\n");

  log("Actual Output:");
  console.log("Script start");
  log("Script start");

  setTimeout(() => {
    console.log("Timeout callback");
    log("Timeout callback");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Promise callback");
    log("Promise callback");
  });

  console.log("Script end");
  log("Script end");
});
