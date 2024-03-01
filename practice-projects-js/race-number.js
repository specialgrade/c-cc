// Generate a random race number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);

// Constants for registration time and runner's age
const registrationTime = true;
const runnerAge = 18;

// Check conditions for assigning race number and race time
if (runnerAge > 18 && registrationTime) {
  raceNumber += 1000;
}

// Determine race time and display race details
if (runnerAge > 18) {
  if (registrationTime) {
    console.log(`9:30 am ----- Adult and registered early\nRace Number: ${raceNumber}`);
  } else {
    console.log(`11:00 am ----- Adult and registered late\nRace Number: ${raceNumber}`);
  }
} else if (runnerAge < 18) {
  console.log(`12:30 pm ----- All youth\nRace Number: ${raceNumber}`);
} else {
  console.log(`Runners who are ${runnerAge} years old, whether they are registered early or late should see the registration desk.`);
}
