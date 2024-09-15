//Coding Challenge #2
//Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �



//~~~~du lieu buoi1
// 1. Store Mark's and John's mass and height in variables 
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92 ;
const johnHeight = 1.95;

console.log("can nang cua mark :",markMass);
console.log("chieu cao cua mark",markHeight);
console.log("can nang cua jonh :",johnMass);
console.log("chieu cao cua jonh",johnHeight);


// 2. Calculate both their BMIs using the formula (you can even implement both 
//     versions)

const markBMI = markMass /(markHeight*markHeight);
const johnBMI = johnMass /(johnHeight*johnHeight);
console.log("BMI' mark : ",markBMI);
console.log("BMI' jonh :",johnBMI );

// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.

const markHigherBMI = markBMI > johnBMI;
console.log("Mark có BMI cao hơn John không?", markHigherBMI);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
  } else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
  }







