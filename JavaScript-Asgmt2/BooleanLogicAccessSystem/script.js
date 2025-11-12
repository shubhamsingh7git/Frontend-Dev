let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
  let secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  console.log(secure ? "Secure" : "Unsafe");
}

checkSecurity();

isOwnerInside = false;
checkSecurity();

isOwnerInside = true;
isAlarmOn = false;
checkSecurity();
