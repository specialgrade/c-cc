// Write your code below
const bobsFollowers = ['Ted', 'Ned', 'Todd', 'Nick'];
const tinasFollowers = ['Ted', 'Kim', 'Nick'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);
