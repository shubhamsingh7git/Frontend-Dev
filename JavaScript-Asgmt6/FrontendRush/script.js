const logBox = document.getElementById("log");
const btnCb = document.getElementById("cb");
const btnAa = document.getElementById("aa");

function log(msg) {
  logBox.textContent += msg + "\n";
}

function timeout(step) {
  return new Promise(resolve => {
    setTimeout(() => resolve(step), 1000);
  });
}

function design(cb) {
  setTimeout(() => cb("Design complete"), 1000);
}
function build(cb) {
  setTimeout(() => cb("Build complete"), 1000);
}
function test(cb) {
  setTimeout(() => cb("Test complete"), 1000);
}
function deploy(cb) {
  setTimeout(() => cb("Deploy complete"), 1000);
}
function celebrate(cb) {
  setTimeout(() => cb("Celebrate!"), 1000);
}

btnCb.addEventListener("click", () => {
  logBox.textContent = "";
  design(msg1 => {
    log(msg1);
    build(msg2 => {
      log(msg2);
      test(msg3 => {
        log(msg3);
        deploy(msg4 => {
          log(msg4);
          celebrate(msg5 => {
            log(msg5);
          });
        });
      });
    });
  });
});

async function runAsync() {
  log(await timeout("Design complete"));
  log(await timeout("Build complete"));
  log(await timeout("Test complete"));
  log(await timeout("Deploy complete"));
  log(await timeout("Celebrate!"));
}

btnAa.addEventListener("click", () => {
  logBox.textContent = "";
  runAsync();
});
