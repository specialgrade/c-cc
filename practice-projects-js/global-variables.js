const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

/* callMyNightSky = () => {
  return `Night Sky: ${satellite}, ${stars}, and ${galaxy}.`;
} */

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
