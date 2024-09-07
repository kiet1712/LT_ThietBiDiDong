// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

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
