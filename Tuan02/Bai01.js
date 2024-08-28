// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams
    // data 1
    const dolphinsScores1 = [44, 23, 71];
    const koalasScores1 = [65, 54, 49];
    // data 2
    const dolphinsScores2 = [85, 54, 41];
    const koalasScores2 = [23, 34, 27];
    
const avgDolphins1 = calcAverage(dolphinsScores1);
const avgKoalas1 = calcAverage(koalasScores1);
const avgDolphins2 = calcAverage(dolphinsScores2);
const avgKoalas2 = calcAverage(koalasScores2);

// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
    // data 1
    checkWinner(avgDolphins1, avgKoalas1);
    // data 2
    checkWinner(avgDolphins2, avgKoalas2);





