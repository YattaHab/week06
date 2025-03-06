document.write('<h1 id="h1" style="color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;">Elzero</h1>');

document.getElementById("h1").style.color = "blue";
document.getElementById("h1").style.fontSize = "80px";
document.getElementById("h1").style.fontWeight = "bold";
document.getElementById("h1").style.textAlign = "center";
document.getElementById("h1").style.fontFamily = "Arial";

console.log("habiba")
console.table(["elzero","ahmed" , "aya" , "sameh" ,"gamal"]);
console.log("%celzero %cweb %cschool", "color:red; font-size: 40px" , "color:green; font-size: 40px", "background-color: blue; font-weight: bold; font-size: 40px;")

//console.log("Iam In Console");
//document.write("Iam In Page");

/* console.log("Iam In Console");
document.write("Iam In Page"); */

console.log("`I'm In\n\\\\\nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`` ");

let numberOne = 10;
let numberTwo = 20;

// Ouput
console.log( numberOne + "" + numberTwo ); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof (`${numberOne}${numberTwo}`)); // Template Literals Way => String

console.log(numberTwo  +
     "\n"
      + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

let a = 21;
let b = 20;

console.log("_" + (`${a}_${b}`).repeat(4)); // _21_2021_2021_2021_20_

console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log( num * (+true + +true)) // 6

// Soultion Three
console.log( num * --num); // 6

// Soultion Four
console.log( num++ + ++num); // 6

// Solution Five
console.log(num + num/2); // 6

// Solution Six
console.log(num-- + --num); // 6

let num1 = "10";

// Solution One
console.log(+num1 + +num1); // 20

// Solution Two
console.log(  +num1 * (+true + +true)); // 20

// Solution Three
console.log( num1++ + --num1); // 20

// Solution Four
console.log( num1 + num1++); // 20


console.log(200000 / 2); // 100000  
console.log(10e4); // 100000  
console.log(100000.0); // 100000  
console.log(10 * 10000); // 100000 
console.log(Math.ceil(99999.4)); // 100000  
console.log(Math.trunc(100000.9)); // 100000  
console.log(25000 * 4); // 100000  
console.log(100_00 * 10); // 100000  
console.log(100 * 1000); // 100000
console.log(parseInt("100000")); // 100000  

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

let num2 = 10;

console.log(Number.isInteger(num2) + true); // 2

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed()); // 10

console.log(parseInt(Math.random() * 5));

let userName = "Elzero";

console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.at(0).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
