/* 
Name     : Abdul Moiz Lakhani
Roll No. : 5093
Batch    : 4.1 (Bright Section)
*/

// Question # 1

var name = prompt("Please Enter Your Name");
alert("Hi, "+name);

// Question # 2

var def_table = 5;
var table = prompt("Enter the number of Table", def_table);

console.log("The Multiplication Table of " + table + " is:\n\n");

for(var i = 1; i<=10; i++)
{
    console.log(table + " x " + i + " = " + table*i);
}

// Question # 3

var city = prompt("Enter the name of city");

if(city==="Karachi" || city==="karachi")
{
    alert("Welcome to the City of Lights.");
}
else
{
    alert("Welcome to " + city);
}

// Question # 4

var gender = prompt("Enter Your Gender. (eg. Male or Female)");

if(gender==="Male" || gender==="male")
{
    alert("Welcome Sir");
}
else if(gender==="Female" || gender==="female")
{
    alert("Welcome Ma'am");
}
else
{
    alert("Wrong Insert!");
}

// Question # 5

var signal = prompt("Enter the Color of Traffic Signal (eg. Red, Yellow, Green)");

if(signal==="Red" || signal==="red")
{
    alert("Vehicles Must Stop");
}
else if(signal==="Yellow" || signal==="yellow")
{
    alert("Vehicles Should Get Ready to Move");
}
else if(signal==="Green" || signal==="green")
{
    alert("Vehicles Can Move Now");
}
else
{
    alert("Wrong Insert!");
}

// Question # 6

var max_age = prompt("Enter Maximum Age");
var curr_age = prompt("Enter Current Age");

if(curr_age <= max_age)
{
    alert("You are Welcome");
}
else
{
    alert("You are not allowed");
}

// Question # 7

var curr_fuel = prompt("Enter the Remaining Fuel in Your Car (in litres)");

if(curr_fuel < 0.25)
{
    alert("Please refill the Fuel in your Car");
}
else
{
    alert("No need to refill the Fuel");
}

// Question # 8

// Part a
alert("Question # 8. Part (a)");
var a = 4;
if (++a === 5){
alert("Given condition For Variable a is True \n\nReason: Because variable a is Increamented before checking the equal condition.");
}

// Part b
alert("Question # 8. Part (b)");
var b = 82;
if (b++ === 83)
{
alert("Given condition For variable b is True");
}
else
{
    alert("The Condition is False. \n\nReason: Because variable b is Increamented after checking the equal condition.");
}

// Part c

alert("Question # 8. Part (c)");
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
alert("Reason: \n\nIn Condition 1: The Value of c is 12 when checking the Condition. \nIn Condition 2: The Value of c is 13 when checking the Condition because of Increament in Condition 1. \nIn Condition 3: The Value of c is 14 when checking the Condition because of Pre-Increament and Condition is False because 14 < 14. \nIn Condition 4: The Value of c is 14 when checking the Condition because of Increament in Condition 3.");

// Part d

alert("Question # 8. Part (d)");
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
alert("Reason: Because variable totalCost has same value as laborCost + materialCost. So, 22,000 = 22,000");

// Part e

alert("Question # 8. Part (e)");
if (true){
alert("True");
}
if (false){
alert("False");
}
alert("Reason: Because if condtion has a Boolean Value");

// Part f

alert("Question # 8. Part (f)");
if("car" < "cat")
{
alert("Car is Smaller than Cat");
}
console.log("\n\n");

// Question # 9

alert("Question # 9 - MarkSheet");
var totalMarks = 300;
var marksObt = prompt("Please, Enter Obtained Marks out of 300");
var perctge = marksObt*100/totalMarks;
var grade;
var remarks;

if(perctge >= 80)
{
    grade = "A-one";
    remarks = "Excellent";
}

else if(perctge >= 70)
{
    grade = "A";
    remarks = "Good";
}

else if(perctge >= 60)
{
    grade = "B";
    remarks = "You need to improve";
}

else if(perctge < 60)
{
    grade = "Fail";
    remarks = "Sorry";
}

console.log("Mark Sheet");
console.log("----------\n");
console.log("Total Marks    : " + totalMarks);
console.log("Marks Obtained : " + marksObt);
console.log("Percentage     : " + perctge + "%");
console.log("Grade          : " + grade);
console.log("Remarks        : " + remarks);

// Question # 10

alert("Question # 10 - Shopping Cart");
var itemName1 = prompt("Please Enter the name of the Item 1");
var itemName2 = prompt("Please Enter the name of the Item 2");
var itemPrice1 = prompt("Please Enter the price of the Item 1");
var itemPrice2 = prompt("Please Enter the price of the Item 2");
var itemOrder1 = prompt("Please Enter the ordered quantity of the Item 1");
var itemOrder2 = prompt("Please Enter the ordered quantity of the Item 2");
var shipCharges = prompt("Enter Shipping Charges");

itemPrice1 = parseInt(itemPrice1);
itemPrice2 = parseInt(itemPrice2);
itemOrder1 = parseInt(itemOrder1);
itemOrder2 = parseInt(itemOrder2);
shipCharges = parseInt(shipCharges);

var total = ( shipCharges + (itemPrice1*itemOrder1) + (itemPrice2*itemOrder2) );
var discnt = total - ((total*10)/100);

console.log("SHOPPING CART");
console.log("-------------\n\n");
console.log("Price of " + itemName1 + " is Rs." +  itemPrice1);
console.log("Quantity of " + itemName1 + " is " +  itemOrder1);
console.log("Price of " + itemName2 + " is Rs." +  itemPrice2);
console.log("Quantity of " + itemName2 + " is " +  itemOrder2);
console.log("\n");
console.log("Shipping Charges " + shipCharges);
console.log("\n");
console.log("Total Cost of Your Order is " + total + " PKR");
if(total > 2000)
{
    console.log("Discounted Price is " + discnt + " PKR");
}

// Question # 11

alert("Question # 11 - Guess Game");

var secretNumber = 6;
var numberGuessed = prompt("Guess any Number From 1 to 10");
numberGuessed = parseInt(numberGuessed);
if( secretNumber === numberGuessed )
{
    alert("Bingo! Correct Answer");
}
else if( numberGuessed === secretNumber+1 || numberGuessed === secretNumber-1 )
{
    alert("Close enough to the Correct Answer");
}
else
{
    alert("Wrong Guess! Try Again");
}

// Question # 12

alert("Question # 12 - To check Number Divisble by 3 or not");

var num1 = prompt("Please Enter any Number");
if( num1%3 === 0 )
{
    alert("The Number is divisible by 3");
}
else
{
    alert("The Number is not divisible by 3");
}

// Question # 13

alert("Question # 13 - To check Which team has Won");

var team1 = prompt("Please Enter the Name of Team A");
var score1 = prompt("Please Enter the Score of Team A");
var team2 = prompt("Please Enter the Name of Team B");
var score2 = prompt("Please Enter the Score of Team B");

score1 = parseInt(score1);
score2 = parseInt(score2);

if( score1 === score2 )
{
    alert("There is a tie between " + team1 + " and " + team2);
}
else if ( score1 > score2)
{
    alert(team1 + " has won the Game.");
}
else
{
    alert(team2 + " has won the Game.");
}

// Question # 14

alert("Question # 14 - To check Data Type");

var str = prompt("Enter any string");
var num3 = prompt("Enter any Number");
num3 = parseInt(num3);
var bool = prompt("Enter a boolean value (true or false)");

alert("\n" + str + " is a " + typeof(str) );
alert("\n" + num3 + " is a " + typeof(num3) );

if ( bool === "true" || bool === "false" )
{
    alert("\n" + bool + " is a Boolean" );
}
else
{
    alert("Not Boolean");
}

// Question # 15

alert("Question # 15 - To check Number is Even or Odd");

var num4 = prompt("Please Enter any Number");
if( num4%2 === 0 )
{
    alert("The Number is Even");
}
else
{
    alert("The Number is Odd");
}

// Question # 16

alert("Question # 16 - Reacting on Temperature");

var temper = prompt("Enter the Temperature");
temper = parseInt(temper);
if( temper > 40 )
{
    alert("It is too hot Outside.");
}
else if( temper > 30 && temper <= 40 )
{
    alert("The Weather today is Normal.");
}
else if( temper > 20 && temper <= 30 )
{
    alert("Today’s Weather is Cool.");
}
else if( temper > 10 && temper <= 20 )
{
    alert("OMG! Today’s weather is so Cool.");
}
else
{
    alert("Please Enter Above 10");
}

// Question # 17

alert("Question # 17 - Simple Calculator");

var val1 = prompt("Please Enter First Value");
var val2 = prompt("Please Enter Second Value");
var oper = prompt("Please Enter Operation (+, - , x, /, %)");

val1 = parseInt(val1);
val2 = parseInt(val2);

if(oper === "+")
{
    alert("Addition of " + val1 + " and " + val2 + " = " + (val1+val2) );
}
else if(oper === "-")
{
    alert("Subtraction of " + val2 + " from " + val1 + " = " + (val1-val2) );
}
else if(oper === "x" || oper === "*")
{
    alert("Multipication of " + val1 + " and " + val2 + " = " + (val1*val2) );
}
else if(oper === "/")
{
    alert("Division of " + val1 + " by " + val2 + " = " + (val1/val2) );
}
else if(oper === "%")
{
    alert("Remainder of " + val1 + " divided by " + val2 + " = " + (val1%val2) );
}
else
{
    alert("Wrong Insert!");
}

// Question # 18

alert("Question # 18 - Your Favourite Day");

var days = prompt("Enter any Day");

if ( (days === "Monday" || days === "monday") || (days === "Tuesday" || days === "tuesday") || (days === "Thursday" || days === "thursday") || (days === "Friday" || days === "friday") )
{
    alert("It's a Week Day");
}
else if ( (days === "Saturday" || days === "saturday") )
{
    alert("It's Weekend");    
}
else if ( (days === "Sunday" || days === "sunday") )
{
    alert("Yay! It's a Holiday");    
}
else
{
    alert("Wrong Insert!");
}

// Question # 19

alert("Question # 19 - Checking Score");

var scr = prompt("Enter Your Score");
scr = parseInt(scr);
if( scr > 50 )
{
    alert("You are Passed");
}
else
{
    alert("Try Again!");
}

// Question # 20

alert("Question # 20 - Checking Greater Number");

var num5 = prompt("Enter First Number");
num5 = parseInt(num5);
var num6 = prompt("Enter Second Number");
num6 = parseInt(num6);

if ( num5 > num6 )
{
    alert("The Greater number of " + num5 + " and " + num6 + " is " + num5);
}
else if ( num5 < num6 )
{
    alert("The Greater number of " + num5 + " and " + num6 + " is " + num6);
}
else if( num5 === num6 )
{
    alert("Both numbers are Equal");
}

// Question # 21

alert("Question # 21 - Hello, World in Different Languages");

var lang = prompt("Enter Language Code \n For Exapmle:\n en - for English \n es - for Spanish \n de - for German \n el - for Greek \n fr - for French", "en");
if( lang === "en" )
{
    alert("Hello, World!");
}
else if (lang === "es")
{
    alert("Hola, Mundo!");
}
else if (lang === "de")
{
    alert("Hallo, Welt!");
}
else if (lang === "el")
{
    alert("Γειά σου Κόσμε");
}
else if (lang === "fr")
{
    alert("Bonjour le monde");
}
else
{
    alert("Wrong Insert!");
}

// Question # 22

alert("Question # 22 - Chech Whether is Positive or Negative");

var valCheck = prompt("Enter any Number");
valCheck = parseInt(valCheck);

if ( valCheck > 0 )
{
    alert("Number is Postive");    
}
else if ( valCheck == 0 )
{
    alert("Not Negative Nor Positive");
}
else
{
    alert("Number is Negative");
}

// Question # 23

alert("Question # 23 - The Pluralizer");

var numb = prompt("Please Enter a Number");
numb = parseInt(numb);

var noun = prompt("Please Enter a Noun");

if (numb > 1)
{
    alert(numb + " " + noun + "s");
}
else
{
    alert(numb + " " + noun);
}