// Get the command line arguments
let commandLine = process.argv.slice(2);

// Stores the beep times as keys in an object
let beepTimes = {};

// Iterate through the command line
for (string of commandLine) {

  // Convert the arguments from string to number
  if (parseInt(string) !== NaN && parseInt(string) > 0) {

    // Store the number and multiply it by 1000
    beepTimes[(parseInt(string) * 1000)] = true;
  }
}


// Set the initial time
let time = 0;

// Iterate through the times of beeptime
for (const beepTime in beepTimes) {

  // Set the time to the beepTime
  time = parseInt(beepTime);

  // Beep and print the character
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(beepTime);
  }, time)
}
