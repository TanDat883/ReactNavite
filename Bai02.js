// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// 1.  Store Mark's and John's mass and height in variables
let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

// 2.  Calculate both their BMIs using the formula (you can even implement both versions)
let markBMI = markMass / (markHeight * markHeight)
let johnBMI = johnMass / (johnHeight * johnHeight)

// 3.Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
let markHigherBMI = markBMI > johnBMI;

/* 4.Print a nice output to the console, saying who has the higher BMI. 
The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"*/
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

/* 5.  Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"*/
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
}
else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}
 