// Basics of Programming in JavaScript

// // Hello world program
// console.log(`hello world`);

// // Declare variable using var
// var n1 = 'Mohit';
// var n1 = 'Rohit';
// console.log(n1);

// rules for naming variables 

// you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)

// you can use only undersore _ or dollar symbol 
// first_name (valid)
// _firstname (valid) 
// first$name (valid)
// $firstname (valid)

// you cannot use spaces 
// var first_name = "harshit"; // snake case writing 
// var firstName = "harshit"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase (not for classes)

// // Let
// let fName = 'karan';
// console.log(fName);
// fName = 'yash';
// console.log(fName); 
// // we use let over var because of 1. you cant redefine a varibale once defined but you can change the value of that variable, 2. block scope vs function scope 

// // Const
// const mName = 'karan';
// mName = 'karan';  
// console.log(mName);
// // in const you cant change the value once assigned it will show 'Typeerror'

// JavaScript has 8 Datatypes - first seven premitive and last one is non premitive
// //typeof() - we use typeof to check Datatype
// let name = "karan";
// console.log(typeof(name));

// // 1. Bigint
// console.log(Number.MAX_SAFE_INTEGER);
// // ⬆️ this will provide value = 9007199254740991, if you want to store number with value more then this value then use Bigint
// let numbers = 900719925474094585555591n;
// // or
// let numberss = BigInt(71992547409914644);
// console.log(typeof(numberss));

// // 2. Boolean
// // it stores true/false
// let yourResult = true;
// let myResult = false;
// console.log(yourResult, myResult);

// // 3. String
// let fName = 'Rao';
// console.log(fName);
// // String Indexing
// console.log(fName[0], fName[2]);
// // Useful string methods - string is immutable i.e. cant be changed so string methods provide new values which we store in new variable
// // length of string
// console.log(fName.length);
// // finding last index
// let lastIndex = fName.length -1;
// console.log(lastIndex);
// // trim() - remove spaces
// let firstName = "karan.";
// firstName = firstName.trim();
// console.log(firstName);
// // toUpperCase()
// firstName = firstName.toUpperCase();
// console.log(firstName);
// // toLowerCase()
// firstName = firstName.toLowerCase();
// console.log(firstName);
// // slice() - slice(0, n+1) -> it will make new string from string[0] to string[n]
// let slicedString = firstName.slice(0,2);
// console.log(slicedString);

// // combining strings
// // 1. via strint concatination
// let myName = `karan`;
// let age = 23;
// let collage = `SOIT`;
// console.log("my name is "+myName+"and age is"+age);
// // 2. Template Strings
// console.log(`my name is ${myName} and i am ${age} years old`);

// // 4. Symbol
// // stores unique value
// let sm1 = Symbol(); 
// let sm2 = Symbol();
// console.log(sm1, sm2, sm1 == sm2);
// let sm3 = Symbol("karan");
// let sm4 = Symbol("karan");
// console.log(sm3, sm4, sm3 == sm4);


// // 5. Null
// let names = null;
// // type of null is object , it is a bug in javascript , but we cant get fix it because many js libraries and frameworks written in js with this bug 
// console.log(names, typeof names);

// // 6. Number
// let num = 45;
// console.log(num);

// type conversion - number to string and string to number
// // 1. string to number
// // using Number()
// let str = '123';
// str = Number(str);
// console.log(str, typeof str);
// // using Unary(+) operator
// let zen = '987';
// zen = +zen;
// console.log(zen, typeof zen);
// // using parseInt() to convert into integer only
// let gen = '456';
// gen = parseInt(gen, 10); // The second argument is the radix (base in number system here it is 10(decimal number system))
// console.log(gen);
// // using parseFloat() to convert into float only
// let jain = '100';
// jain = parseFloat(jain);
// console.log(jain, typeof jain);
// // but if
// let cat = 'five';
// cat = Number(cat);
// console.log(cat); // NaN(not a number)

// // 2. number to String
// // using string concatination
// let num = 1123;
// num = num + ``;
// console.log(num, typeof num);
// // using String()
// let numm = 562;
// numm = String(numm);
// console.log(numm, typeof numm);
// // using toString();
// let numn = 895;
// numn = numn.toString();
// console.log(numn, typeof numn);
// // String vs toString (to be)

// // 7. Undefined
// let namee;
// // type of undefined is undefined
// console.log(namee, typeof namee)

// Object

// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:
// Built-in object types can be:
// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

// // Operators in javascript 

// // Ternary Operator or conditional operator
// let age = 22;
// let drink = age >= 18 ? `wine` : `milk` ;
// console.log(drink);

// // && || operator
// let fname = "karan";
// let age = 23;
// let lname = "rao";
// if (fname[0] === "k" && age === 23 ){
//     console.log("you are karan");
// }
// else{
//     console.log("you are not karan");
// }
// if (lname[0] === "r" || age === 23){
//     console.log("your surname is rao");
// }
// else{
//     console.log("nothing");
// }

// //Comparison Operator
// let num1 = 2;
// let num2 = 5;
// console.log(num1 >= num2);
// // ** == vs === , in == it compares only value not data type but in === it compare value and data type
// let num3 = '3';
// let num4 = 3;
// console.log(num3 == num4);
// console.log(num3 === num4);
// // ** != vs !== , in != it compares only value not data type but in !== it compare value and data type
// console.log(num3 != num4);
// console.log(num3 !== num4);

// //prompt , it is using to take input . it takes input as a string to use that input as a number we have to use type conversion
// let number = prompt("enter the number");
// number = +number;
// console.log(number);

// // Truthy and Falsy Values & If else statement
// //falsy value:
// //false
// //" "
// //undefined
// //null
// //0
// // NaN(not a number, it comes when we use type converesion) is also a falsy value
// //truthy value: all remaining values
// // example =
// let co = prompt('enter the number');
// co = Number(co);
// if (co) {
//     console.log(`${co}, ${typeof co}`);
// } else {
//     console.log(`invalid`);
// };
// // or 
// if (!isNaN(co) && co) {
//     console.log(`${co}, ${typeof co}`);
// } else {
//     console.log('invalid');
// };

// // Nested if else
// let number = 25;
// if (number === 19){
//     console.log(`your guess is right`);
// }else{
//     if (number < 19){
//         console.log(`it is small`);
//     }else{
//         console.log(`it is big`);
//     };
// };

// // If elseif else
// let time = 35;
// if (time < 10){
//     console.log(`good morning`);
// }else if(time < 20){
//     console.log(`good afternoon`);
// }else{
//     console.log(`good night`);
// };

// //break and continue
// //break
// for(let i = 0; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }
// console.log("hi");
////continue
// for(let i = 0; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
// console.log("hi");

// // Switch statement
// let day = 6;
// switch(day){
//     case 0:
//         console.log(`Monday`);
//         break;
//     case 1:
//         console.log(`Tuesday`);
//         break;
//     case 2:
//         console.log(`wednesday`);
//         break;
//     case 3:
//         console.log(`Thursday`);
//         break;
//     case 4:
//         console.log(`Friday`);
//         break;
//     case 5:
//         console.log(`Saturday`);
//         break;
//     case 6:
//         console.log(`Sunday`);
//         break;
// };

// // loops - based on principle DRY
// // While loop 
// // example - sum of all natural number till n
// let n = 100;
// let total = 0;
// let i = 1;
// while(i <= n){
//     total += i;
//     i ++;
// };
// console.log(total);

// // For loop (initialization; condition; updation)
// // For loop example
// let n = 100;
// let sum = 0;
// for(let i = 1; i<=n; i++){
//     sum += i;
// };
// console.log(sum);

// // Do while loop - atleast execute at once
// let n = 100;
// let sum = 0;
// let i = 1;
// do{
//     sum += i;
//     i++;
// }while(i <= n);
// console.log(sum);

// // Arrays in JavaScript
// //Array - refference data type(object) & it is ordered collection of item
// let mixed = [3, " ", 'apple', true, undefined ];
// console.log(mixed, mixed[2]);
// mixed[2] = false;
// console.log(mixed, mixed[2]);
// // typeof Array is object in javascript
// console.log(typeof mixed);
// // check varibale is Array or not
// console.log(Array.isArray(mixed));

// //use const for crating array (use const for reference type ) here in const we cant repeat creation of that array but we can perform all the methods or operation on array
//  const fruit = ["apple", "banana", "mango"];
//  fruit.push("papaya");
//  console.log(fruit);

// // Push, pop, unshift, shift 
// // push(insert element from end), pop(returns and remove an element from end)
// const fruitName = ['apple', 'orange', 'banana', 'papaya'];
// fruitName.push('lichi');
// console.log(fruitName);
// let removedFruit = fruitName.pop();
// console.log(fruitName, removedFruit);

// // unshift (insert element from start), shift returns and remove an element from start)
// // it is slower then push and pop because to insert or remove an element from starting we have to move all the element from last position
// const fruitName = ['apple', 'orange', 'banana', 'papaya'];
// fruitName.unshift('lichi');
// console.log(fruitName);
// let removedFruit = fruitName.shift();
// console.log(fruitName, removedFruit);

// Primitive vs reference data types
// premitive => it use stack to store data 
// let num1 = 3;
// let num2 = num1;
// console.log(num1, num2);
// num1++;
// console.log(num1, num2);
// //reference => it use stack and heap to store data, stack contains address of the location of heap where data stored so any change in data will affect both
// let arr1 = ["1", "2"];
// let arr2 = arr1;
// console.log(arr1, arr2);
// arr1.push("3");
// console.log(arr1, arr2);

// // Clone array & spread operator
// // for cloning array there are three methods- 1. slice(), 2.concat(), 3. spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // using slice()
// const arr3 = arr1.slice();
// console.log(arr3);
// // using concat()
// const arr4 = [].concat(arr1);
// console.log(arr4);
// // using spread operator ...
// const arr5 = [...arr1];
// console.log(arr5);
// // add new element or array with cloning
// const arr6 = [...arr1,...arr2,7,8,9];
// console.log(arr6);
// const arr7 = [...(arr1.slice().concat(arr2)),...[7,8,9]];
// console.log(arr7)

// // For loop in Array
// const fruits = ['apple', 'banana', 'papaya'];
// for(let i = 0; i<= (fruits.length -1); i++){
//     console.log(fruits[i]);
// };
// // task - copy item of fruits into fruits2 with uppercase
// const fruits2 =[];
// for(let i = 0; i<=(fruits.length -1); i++){
//     fruits2.push(fruits[i].toUpperCase());
// };
// console.log(fruits2);

// // While loop in array
// const fruits = ['apple', 'banana', 'papaya'];
// let i = 0;
// while(i <= (fruits.length - 1)){
//     console.log(fruits[i]);
//     i++;
// };

// // For of loop
// const fruits = ['apple', 'banana', 'papaya'];
// for(let fruit of fruits){
//     console.log(fruit);
// };

// // For in loop
// const fruits = ['apple', 'banana', 'papaya'];
// for (let key in fruits){
//     console.log(fruits[key]);
// };

// // Array destructuring
// // 1. simple method
// const arr2 = ['value1','value2','value3','value4'];
// let v1 = arr2[0];
// let v2 = arr2[1];
//console.log(v1, v2);
// // 2. method only for javascript
// let [val1, val2] = arr2;
// console.log(val1, val2); //value1 value2
// // but if we want to store arr[3] in val2 then
// let [val1, ,val2]= arr2;
// console.log(val1, val2); //value1 value3
// // for remaining values
// let [a1, a2, ...a3]= arr2;
// console.log(a1, a2, a3); //value1 value2 [ 'value3', 'value4' ]

// // Objects (refference type) in JavaScript
// //Array is good but not for real world data, objects store key value pair it dont have index, in object key store as a string inside object
// const person = {
//     fullName : 'karan',
//     age : 22,
//     techStack : 'web dev'
// };
// // access data from object 
// // 1. via dot
// console.log(person.fullName);
// // 2. via bracket
// console.log(person['age']);
// // add key value pair in object
// person.gender = 'male';
// person['weight'] = '55kg';
// console.log(person);

// // Dot vs Bracket Notation
// // if key name contain space example - (full Name) then it cant be access by dot notation
// const person = {
//     'full Name' : 'karan',
//     age : 22
// }
// console.log(person['full Name']);
// // if we want to add value of any variable as a key then we have to use bracket
// const key = 'email';
// person[key]= 'karan@gmail.com';
// console.log(person);

// // Iterate objects
// // 1. for in loop (dont use dot notation use bracket only)
// const person = {
//     'full Name' : 'karan',
//     age : 22,
//     gender : 'male'
// };
// for (let key in person){
//     console.log(person[key]);
// };
// // 2. for of loop :object.keys - it provide array of keys in a object , then we can use for of loop for iterate
// console.log(Object.keys(person));
// for(let key of Object.keys(person)){
//     console.log(person[key]);
// };

// // Computed properties
// // if we have 2 variables , example-
// const key1 = 'objkey1';
// const value1 = 'myValue1';
// // and i want to make :- const obj = {objkey1 : 'myValue1'} then there are two methods - 
// // method 1
// const obj = {
//     [key1] : value1,
// };
// console.log(obj);
// // method 2
// const obj1 = {};
// obj1[key1] = value1;
// console.log(obj1);

// // Spread operator in objects
// // 1. we can use spread operator to combine two or more obj (in object one key can apear only once and latest value of that key will be final value)
// const obj1 = {
//     key1 : 'karan',
//     key2 : 23
// };
// const obj2 = {
//     key2 : 22,
//     key3 : 'yash',
//     key4 : 21
// };
// const newObj = {...obj1, ...obj2, key5: 'gaurav'};
// console.log(newObj);
// // 2. converting array to object (spread operator for array in object - here key will be index of array)
// const arr6 = [1,2,3,4];
// const obj4 = {...arr6, ...[5,6,7]};
// console.log(obj4);
// // 3. converting string to object (spread operator for string in object - here key will be index of string)
// const obj5 = {...'abcdefghijklmnopqrstuvwxyz'};
// console.log(obj5);

// // Object Destructuring 
// // use key value pair as a new variable where key=variable name and key value = value of that variable, in this - 1. we can rename the name of variable, 2. we can also create new object from remaining key value pair
// const person = {
//     fname :'karan',
//     age : 22,
//     gender : 'male',
//     city : 'mumbai',
//     state : 'maharashtra'
// };
// let {fname, age, gender:ling, ...restkey} = person;
// console.log(fname, age, ling, restkey);

// // Objects inside Array
// const users = [
//     {userId:1, firstName: "harshit", gender:"male"},
//     {userId:2, firstName: "mohit", gender:"female"},
//     {userId:3, firstName: "nitish", gender:"gay"}
// ];
// for(let user of users){
//     console.log(user);
// };
// for(let user of users){
//     console.log(user.userId, user['firstName']);
// };
// // Nested Destructuring
// const [{firstName:user1firstname, gender}, ,{userId}] = users;
// console.log(user1firstname, gender, userId);

// // Functions in JavaScript
// // takes value as parameter and return any thing
// // Function declaration
// // example - even odd 
// function isEven (num){
//     if(num%2 ==0){
//         console.log('even');
//     }else{
//         console.log('odd');
//     };
// };
// isEven(8);
// // example - take any string and return its first letter
// function printFirstLetter(anyString){
//     console.log(anyString[0]);
// };
// printFirstLetter('karan');
// // example - targetsearch in any array and return its index
// function findTarget(array, target){
//     for(let i = 0; i< array.length; i++){
//         if(array[i] === target){
//             console.log(`${target} present in index no ${i}`);
//         };
//     };
// };
// const arr9 = [1,2,3,4,5,6];
// findTarget(arr9, 4);

// // Function Expression
// // in this function stored in a variable and name of the variable is the name of function
// const firstLetter = function(string){
//     console.log(string[0]);
// };
// firstLetter('karan');

// // Arrow Functions
// const printFirstLetter = (anyString)=>{
//     console.log(anyString[0]);
// };
// printFirstLetter('karan');
// // if we have only one parameter
// const firstLetter = string =>{
//     console.log(string[0]);
// };
// firstLetter('yash');
// // if we have only one parameter and one statement inside function
// const first = string => console.log(string[0]);
// first('rao');

// Function declarations are hoisted  (covered in great detail , later in this course)

// // Function inside function
// const fun1 = (num1, num2)=>{
//     const fun2 = (num1, num2)=>{
//         console.log(num1 * num2, `inside fun2`);
//     };
//     console.log(num1, num2, `inside fun1`);
//     fun2(num1, num2);
// };
// fun1(4,5);

// // Lexical Scope
// // if any varible is not present in that block from which that variable called then it will check within its lexical scope
// const myVar = "value1";
// function my (){
//     //const myVar = "value2";
//     function myf(){
//         //const myVar = "value3";
//      console.log(myVar);
//     }
//     myf();
// }
// my();

// // Block Scope Vs Function Scope
// //let and const are block scope
// {
//     let firstName = "karan";
// }
// {
//     const firstName = "harshit";
// }
// console.log(firstName);
// // var is function scope    
// const hello = ()=>{
//     var hi = "hello";
//     function d () {
//         console.log(hi);
//     }
//     d();
// }
// console.log(hi);
// hello();

// // Default Parameters
// //in this we intialize parameter with any value
// const sum = (a = 0, b=0)=> console.log(a+b);
// sum(2);
// sum(2,3);

// // Rest Parameters
// // in this we can create array of rest(remaining) parameter
// const names = (a, b, ...c)=>{console.log(`${a} &   ${b} &    ${c}`)};
// names(1,2,3,4,5,6,7,8);
// // use of rest parameter - sum of numbers
// const sum = (...a)=> {
//     let total = 0;
//     for(let num of a){
//         total += num;
//     };
//     console.log(total);
// };
// sum(1,2,3,4,5,6,7,8);

// // Parameter Destructuring - (used in react and object)
// //we can access value from object via key in any function but we can also use parameter destructuring
// const person ={
//     firstName :"harshit",
//     gender : "male",
//     age : 22
// };
// //now we want to access key value via function 
// // 1. simple method
// function printDetails (obj){
//     console.log(obj.firstName);
// };
// printDetails(person);
// // 2. parameter destructuring
// const printdetails = ({firstName, gender})=>{
//     console.log(firstName, gender);
// };
// printdetails(person);

// //callback functions Very brief intro(covered in great detail , later in this course)
// function fun2(name){
//     console.log(`inside fun2`);
//     console.log(name);
// };
// function fun1(callback){
//     console.log(`inside fun1`);
//     callback('harshit');
// };
// fun1(fun2);

// // Functions returning Functions
// function fun3(){
//     function fun4(){
//         console.log(`inside fun4`)
//     };
//     return fun4;
// };
// const returnedFun = fun3();
// returnedFun();

// Very Important Array Methods
// Foreach method
// Map method
// Filter
// Reduce
// Sort
// Find
// Every
// Some
// Fill method
// Splice method


// More useful things -
// Iterables
// we can use for of loop in iterable
// string , array are iterable but object is not

// // array like object
// // it has length property and we can access them via index , example : string
// const firstName = 'karan';
// console.log(firstName[0]);

// // Sets
// // some points about sets :- 
// // 1. store data, 2. no index-based access, 3. Order is not guaranteed, 4. unique item only(no duplicate allowed) but in reference data but in reference datatypes which have different adress but same value can store.
// // set declaration
// const numbers = new Set([1,2,3]);
// console.log(numbers);
// // add() - add element in set
// const numbers2 = new Set();
// const item = [1,2,3,4];
// numbers2.add(1);
// numbers2.add(2);
// numbers2.add(2);
// numbers2.add(item);
// numbers2.add(item);
// numbers2.add([5,6]);
// numbers2.add([5,6]);
// console.log(numbers2);
// // has() check element is present or not in set
// console.log(numbers2.has(item));
// // for of loop in set
// for(let numbers of numbers2){
//     console.log(numbers);
// };
// // example - in anyu array find number of unique element
// const myArray = [1,2,2,8,8,5,6];
// const uniqueElement = new Set(myArray);
// console.log(uniqueElement); //array with unique elemnt
// let length = 0;
// for (let item of uniqueElement){
//     length ++;
// };
// console.log(`nuber of unique element in given array is ${length}`);

// Maps
//map is an iterable,store data in ordered fashion, store key value pair(like object and duplicate keys are not allowed like object)
// difference between map and object =>
//object is also called as object literal, in object : key stored as 1. key -> string (99%), 2.key -> symbol (1%). but in maps you can use anything as key - like array, number, string
// example -


// Object.assign
// Optional chaining
