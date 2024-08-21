/* There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy! */

// Dolphins score
let dolphinsScore1 = 106;
let dolphinsScore2 = 108;
let dolphinsScore3 = 109;

// Koalas score
let koalasScore1 = 108;
let koalasScore2 = 101;
let koalasScore3 = 110;

// 1. Calculate the average score for each team, using the test data below
dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

/* 2.  Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)*/
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAverage}`);
}else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas win with an average score of ${koalasAverage}`);
}else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log(`Both teams have the same average score of ${dolphinsAverage}`);
} else {
    console.log(`No team wins the trophy`);
}

/* 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4.  Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy*/




