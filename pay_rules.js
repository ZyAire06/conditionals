let payRate=15.00;

let hoursWorked = 45.00;
let overtime= payRate*1.5;

let grossPay= overtime*hoursWorked;
let check=payRate*hoursWorked;
// console.log(`Total of emepolyees grosspay will be $${check} without overtime.`);

// if(hoursWorked<40){ 
//     overtime= payRate*1.5;
// }
// console.log(`With overtime the emepolyee hourly wage will be $${overtime}.`);

// if( overtime==22.50){
//     grossPay= overtime*hoursWorked
// }
// console.log(`Total of emepolyees grosspay will be $${grossPay} with overtime.`);

switch(hoursWorked){
    case(40):
         check;
        break;
    case(45):
        grossPay;
        break;
}
console.log(hoursWorked);