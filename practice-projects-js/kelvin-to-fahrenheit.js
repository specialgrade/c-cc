// convert celsius to newton

// constant value of celsius
const celsius = 290;
// formula to convert celsius to newton
let newton = celsius * (33 / 100);
// round down the value of newton
newton = Math.floor(newton);
// log into console
console.log(`${celsius} Celsius is about ${newton} Newton.`);