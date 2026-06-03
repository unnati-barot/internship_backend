#practical1
let num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}


#practical2
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}


#practical3
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

if (num1 > num2) {
    console.log("Largest Number =", num1);
} else {
    console.log("Largest Number =", num2);
}


#practical4
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log("Largest Number =", num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Largest Number =", num2);
} else {
    console.log("Largest Number =", num3);
}

#task1
let username = "moon";
let email = "moon@gmail.com";
let password = "password123";

if (username === "") {
    console.log("Invalid Username");
} else if (password.length < 8) {
    console.log("Password Too Short");
} else {
    console.log("Registration Successful");
}


#task2
const savedEmail = "admin@gmail.com";
const savedPassword = "admin123";

const email = "admin@gmail.com";
const password = "admin123";

if (email === savedEmail && password === savedPassword) {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}