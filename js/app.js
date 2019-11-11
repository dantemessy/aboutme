'use strict'

var user= prompt("hi , Whats your name ?")
alert( user+ ', Are you Ready to play guess game ?' );
var q1 = prompt("My hair color is black ? (yes or no)");
var q2 = prompt("am i a pet lover ? (yes or no)");
var q3 = prompt("i don't ware glasses ? (yes or no)");
var q4 = prompt("am i longer than 178 ? (yes or no)");
var q5 = prompt("my favourite color is blue ? (yes or no)");
var result = 0 ;

q1 = q1.toLowerCase();  
q2 = q2.toLowerCase();
q3 = q3.toLowerCase();
q4 = q4.toLowerCase();
q5 = q5.toLowerCase();

if( q1 === 'yes' || q1 === 'y' ){
    result= result + 1
// console.log(q1);
}
if( q2 === 'no' || q2 === 'n' ){
    result++
}
// console.log(q2);

if( q3 === 'no' || q3 === 'n' ){
    result++
}
// console.log(q3);

if( q4 === 'yes' || q4 === 'y' ){
    result++
}
// console.log(q4);

if( q5 === 'no' || q5 === 'n' ){
    result++
}
// console.log(q5);


alert('Good Job ' +user+ ' Your score is: ' +result+ '  Where is 5 mean you know me well and 0 mean you know nothing about me ');