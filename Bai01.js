/* Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).*/

// 1.  Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// 2.  Calculate both their BMIs using the formula (you can even implement both versions)
let markBMI = markMass / (markHeight * markHeight)
let johnBMI = johnMass / (johnHeight * johnHeight)

// 3.Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
let markHigherBMI = markBMI > johnBMI;

