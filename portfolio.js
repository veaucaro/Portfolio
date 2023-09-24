// portfolio.js
const readline = require('readline'); // ask for input
const clear = require('clear'); // clear screen

//define input / output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to clear the screen
function clearScreen() {
    clear();
  }
  
  clearScreen();

rl.question('Quel est votre prénom ? ', (prenom) => {
  console.log(`Joli prénom, ${prenom} !`);
  rl.close();
});

