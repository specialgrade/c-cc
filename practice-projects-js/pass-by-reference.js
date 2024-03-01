let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = object => {
  object['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = object => {
  object.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);