const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumbers => {
  if (randomNumbers < 250) { // checks if the numbers are less than 250 = randomNumbers[0] < 250
    return randomNumbers;
  }
})
console.log(smallNumbers); // prints numbers less than 250

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWords => favoriteWords.length > 7); // checks if the strings.length are greater than 7 = favoriteWords[0].length > 7, 9 > 7
console.log(longFavoriteWords); // prints strings.length greater than 7