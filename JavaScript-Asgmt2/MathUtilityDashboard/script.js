let x = 16.75;
let rounded = Math.round(x);
let root = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10;

console.log(`
Value: ${x}
Rounded: ${rounded}
Square Root: ${root}
Power (x³): ${power}
Random (10-50): ${randomNum}
`);
