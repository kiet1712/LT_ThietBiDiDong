// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams

const avgDol = calcAverage(44, 23, 71); 
const avgKoa = calcAverage(65, 54, 49);   

const avgDol1 = calcAverage(85, 54, 41); 
const avgKoa1 = calcAverage(23, 34, 27);  

console.log(avgDol);
console.log(avgKoa);
console.log(avgDol1);
console.log(avgKoa1);



// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

const checkWinner = (avgDol, avgKoa) => {
    if (avgDol >= 2 * avgKoa) {
      console.log(`Dolphins win (${avgDol} vs. ${avgKoa})`);  
    } else if (avgKoa >= 2 * avgDol) {
      console.log(`Koalas win (${avgKoa} vs. ${avgDol})`);
    } else {
      console.log("No team wins!");
    }
  };
  checkWinner(avgDol, avgKoa);
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
const checkWinner1 = (avgDol1, avgKoa1) => {
    if (avgDol >= 2 * avgKoa) {
      console.log(`Dolphins win (${avgDol1} vs. ${avgKoa1})`);  
    } else if (avgKoa1 >= 2 * avgDol) {
      console.log(`Koalas win (${avgKoa1} vs. ${avgDol1})`);
    } else {
      console.log("No team wins!");
    }
  };
  checkWinner(avgDol1, avgKoa1);
// 5. Ignore draws this time