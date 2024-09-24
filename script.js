// Chapter:1
// alert
alert("Welcome to the page");

// Chapter:2
// Variables For Strings
var firstName = ("Muhammad Anus");
var lastName=("Hussain\n");
var nationality=("Pakistani");
let info=(firstName+lastName+nationality);

console.log(info);

// Chapter:3
// Variables For Numbers
//addition
var a= (14);
var b = (20);
var c = (a + b);
console.log ("14 + 20 = " + c);

//subtraction
var x = (130);
var y = (50);
var z = (x - y);
console.log ("130 - 50 = " + z);

//multiplication
var q = (100);
var r = (10);
var s = (q * r);
console.log ("100  x  10 = " + s);

// Chapter:4
// legal variables
// let age = 25;
// const _name = 'Alice';
// var $price = 19.99;
// let userName = 'Bob';
// let count2 = 10;

// illegal Variables names
// let 2count = 10;
// let my variable = 'assignmnet'; 
// let my-var = 'assignment'; 
// let function = 'assignment';

// Chapter: 5
// Familiar Operators
// Modulus
var x=25;
var y=5;

console.log("27%5="+27%5);

// Chapter:6
// Unfamiliar Operator
var num =4;
var newNum=num++ ; 
console.log(newNum);

// Chapter:7
// Eliminating Ambiguity
var a=(13*4)-6+4;
console.log("a="+ a);

// Chapter : 8
// Concatenating Text Strings
var greet="Thanks";
var message="for Coming";
var exc="!";
let greeting=(greet+message+exc);

alert(greeting);

// Chapter:9
// prompts
var que1=prompt("Whats your name ?")
var que2=prompt("Whats your Father name ?")
console.log(que1,que2);

// Chapter : 10 to 12
// If & Else Statement
var marks=prompt("Whats your marks ?");
 if (marks>=80 ){
    console.log("A-one Grade");
 }
else if (marks<=79 && marks>69){
    console.log("A Grade");
 }
else if (marks<=69 && marks>59){
     console.log("B Grade");
 } 
else if (marks<=59 && marks>49){
     console.log("C Grade");
 } 
else if(marks<=49 && marks>40){
     console.log("D Grade");
 } 
else if(marks<=40 && marks>33){
    console.log("E Grade");
 } 
else {
     console.log("Failed");
 };

// Greetings
var time=prompt("Whats time in your country ?");
 if (time >=1 && time<=5 ){
    alert("Good Night and sweet dreams !");
 }
else if (time>=6 && time<=12){
    alert("Good Morning !");
 }
else if (time>=13 && time<=16){
     alert("Good Afternoon !");
 } 
else if (time>=17 && time<=24){
     alert("Good Evening !");
 } 
