const btn = document.getElementById("run");
const logBox = document.getElementById("log");

function log(msg) {
  logBox.textContent += msg + "\n";
}

function asyncStep(message) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    const fail = Math.random() < 0.2; 

    setTimeout(() => {
      if (fail) reject(message + " FAILED");
      else resolve(message + " completed");
    }, delay);
  });
}
function takeOrder()   { return asyncStep("Order taken"); }
function prepare()     { return asyncStep("Food prepared"); }
function pack()        { return asyncStep("Package ready"); }
function dispatch()    { return asyncStep("Out for delivery"); }
function deliver()     { return asyncStep("Delivery completed"); }


async function runPipeline() {
  logBox.textContent = "";

  log("Start Pipeline");


  try {
    const step1 = await takeOrder();
    log("Step 1: " + step1);

    const step2 = await prepare();
    log("Step 2: " + step2);

    const step3 = await pack();
    log("Step 3: " + step3);

    const step4 = await dispatch();
    log("Step 4: " + step4);

    const step5 = await deliver();
    log(step5);

    log("Pipeline completed successfully!");

  } catch (err) {
  
    log("Pipeline failed!");
    log("Reason: " + err);
  }
}

btn.addEventListener("click", runPipeline);
