const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
// w/o .length
console.log(objectives + '\n'); // prints all 3 phrases
console.log(objectives[0]); //prints Learn a new language
console.log(objectives[1]); //prints Read 52 books
console.log(objectives[2]); //prints Run a marathon
// w/ .length
console.log(objectives.length + '\n'); // prints 3
console.log(objectives[0].length); // prints 20
console.log(objectives[1].length); // prints 13
console.log(objectives[2].length); // prints 14
// w/o .length & + operator
console.log(objectives[0] + '\t' + objectives[1]); //prints Learn a new language & Read 52 books
console.log(objectives[0] + '\t' + objectives[2]); //prints Learn a new language & Run a marathon
console.log(objectives[1] + '\t' + objectives[2]); //prints Read 52 books & Run a marathon
// w/ .length & + operator
console.log(objectives[0].length + objectives[1].length); //prints 33
console.log(objectives[0].length + objectives[2].length); //prints 34
console.log(objectives[1].length + objectives[2].length); //prints 27