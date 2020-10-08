"use strict";
/**
 * TYPE BASIC
 */
// let character = "mario";
// let age = 30;
// let isLoggedIn = true;
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// Return NaN
// console.log(circ("hello"));
// console.log(circ(10));
/**
 * OBJECTS & ARRAYS
 */
//  ARRAYS
// let names = ["syaifuddin", "zuri", "alex"];
// names.push("john");
// //names.push(100); //! Error
// let numbers = [10, 20, 40];
// numbers.push(100);
// //numbers.push("John"); //! Error
// let mixed = ["Ken", 100, true];
// mixed.push(false);
// mixed.push(109);
// // OBJECTS
// let ninja = {
//   name: "mario",
//   belt: "black",
//   age: 10,
// };
// //ninja.name = 100; //! Error
// //ninja.skills = ['saya', 'dia'] //! Error
// ninja.name = "Syaifuddin";
/**
 * EXPLICIT TYPES
 */
//  exclipit type
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// age = 20;
// character = "John";
// isLoggedIn = true;
// // arrays
// let ninjas: string[] = [];
// ninjas.push("John");
// // union ypes
// let mixed: (string | number)[] = [];
// mixed.push("Black");
// mixed.push(100);
// let uid: number | string;
// uid = "123";
// uid = 123;
// // objects
// let ninjaOne: object;
// ninjaOne = {
//   name: "Me",
//   age: 30,
// };
// let ninjaTwo: {
//   name: string;
//   age: number;
// };
// ninjaTwo = {
//   name: "Saya",
//   age: 300,
// };
/**
 * DYNAMIC (ANY) TYPES
 */
// let age: any;
// age = 100;
// console.log(age);
// age = "John";
// console.log(age);
// age = { name: "yoshi" };
// console.log(age);
// let mixed: any[] = [];
// mixed.push("123");
// mixed.push(123);
// console.log(mixed);
// let ninja: { name: any; age: any };
// ninja = { name: "yoshi", age: 200 };
// console.log(ninja);
// ninja = { age: 200, name: "yoshi" };
// console.log(ninja);
/**
 * FUNCTION
 */
// let greet: Function;
// greet = () => {
//   console.log("Hello world");
// };
// greet();
// const add = (a: number, b?: number | string): void => {
//   console.log(a);
//   console.log(b);
// };
// add(2, 5);
// add(2, "100");
// const minus = (a: number, b: number): number => {
//   return a - b;
// };
// let result = minus(10, 2);
// console.log(result);
/**
 * ALIAS TYPES
 */
//  alias
// type stringOrNum = string | number;
// type objWithName = { name: string; uui: stringOrNum };
// const logDetails = (uid: stringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello!`);
// };
/**
 * FUNCTION SIGNATURE
 */
// Example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// Example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
