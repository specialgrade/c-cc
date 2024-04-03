const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); // removes first element
console.log(groceryList);

groceryList.unshift('popcorn'); // add element on the beginning
console.log(groceryList);

console.log(groceryList.slice(1, 4)); // console.log(array.method(first, last+1));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);