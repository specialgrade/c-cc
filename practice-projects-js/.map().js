const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => animals[0]); // stores the first letter in each string[index] in secretMessage (new array)

console.log(secretMessage.join('')); // .join = returns an array as a string

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumbers => bigNumbers / 100); // stores the result of bigNumbers / 100 in smallNumbers (new array)

console.log(smallNumbers.join('')); // .join = returns an array as a string