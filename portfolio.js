// portfolio.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quel est votre prénom ? ', (prenom) => {
  console.log(`Joli prénom, ${prenom} !`);
  rl.close();
});

