// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//Data 1
const dolScore1 = 96;
const dolScore2 =108;
const dolScore3 = 89;

const KoaScore1 = 88;
const KoaScore2 = 91;
const KoaScore3 = 110;

//tinh diem trung binh và in ra
const diemTB_Dol =(dolScore1 + dolScore2 + dolScore3)/3;
console.log("DiemTB đội Dolphins :",diemTB_Dol);
const diemTB_Koa = (KoaScore1 + KoaScore2 + KoaScore3)/3;
console.log("DiemTB đội Koalas :",diemTB_Koa);

// so sanh diem 
if(diemTB_Dol > diemTB_Koa){
    console.log("Dolphins's Team win");
}else if (diemTB_Dol < diemTB_Koa){
    console.log("Koalas'Team win");
}else {
    console.log("Tie");
}
//Bonus 1 : Yêu cầu tối thiểu 100đ điểm chiến thắng
const minScore = 100;
//data Bonus1
const dolBonusScore1 = 97;
const dolBonusScore2 =112;
const dolBonusScore3 = 101;

const KoaBonusScore1 = 109;
const KoaBonusScore2 = 95;
const KoaBonusScore3 = 123;

//tinh diem trung binh và in ra
const diemTB_Dol_Bonus1 =(dolBonusScore1 + dolBonusScore2 + dolBonusScore3)/3;
console.log("DiemTB đội Dolphins :",diemTB_Dol_Bonus1);
const diemTB_Koa_Bonus1 = (KoaBonusScore1 + KoaBonusScore2 + KoaBonusScore3)/3;
console.log("DiemTB đội Koalas :",diemTB_Koa_Bonus1);

//dieu kien
if(diemTB_Dol_Bonus1 > diemTB_Koa_Bonus1 && diemTB_Dol_Bonus1 >= minScore ){
    console.log("Dolphins'Team win");
}else if (diemTB_Dol_Bonus1 < diemTB_Koa_Bonus1 && diemTB_Koa_Bonus1 >= minScore){
    console.log("Koalas' Team win");
}else if (diemTB_Dol === diemTB_Koa_Bonus1 && diemTB_Dol_Bonus1 >= minScore && diemTB_Koa_Bonus1 >= minScore){
    console.log("Two Team Tie");
}else{
    console.log("No Team Won");
}
//data Bonus 2 
const dolBonus2Score1 = 97;
const dolBonus2Score2 =112;
const dolBonus2Score3 = 101;

const KoaBonus2Score1 = 109;
const KoaBonus2Score2 = 95;
const KoaBonus2Score3 = 106;

//tinh diem trung binh và in ra
const diemTB_Dol_Bonus2 =(dolBonus2Score1 + dolBonus2Score2 + dolBonus2Score3)/3;
console.log("DiemTB đội Dolphins :",diemTB_Dol_Bonus2);
const diemTB_Koa_Bonus2 = (KoaBonus2Score1 + KoaBonus2Score2 + KoaBonus2Score3)/3;
console.log("DiemTB đội Koalas :",diemTB_Koa_Bonus2);

//dieu kien
if(diemTB_Dol_Bonus2 > diemTB_Koa_Bonus2 && diemTB_Dol_Bonus2 >= minScore ){
    console.log("Dolphins'Team win");
}else if (diemTB_Dol_Bonus2 < diemTB_Koa_Bonus2 && diemTB_Koa_Bonus2 >= minScore){
    console.log("Koalas' Team win");
}else if (diemTB_Dol_Bonus2 === diemTB_Koa_Bonus2 && diemTB_Dol_Bonus2 >= minScore && diemTB_Koa_Bonus2 >= minScore){
    console.log("Two Team Tie");
}else{
    console.log("No Team Won");
}







