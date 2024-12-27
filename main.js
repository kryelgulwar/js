// console.log("hello");

// JavaScript has 8 Datatypes - first seven premitive and last one is non premitive
// Bigint
// Boolean
// String
// Symbol
// Null
// Number
// Undefined
// Object
// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:
// Built-in object types can be:
// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.


//Undefined :
//type of undefined is undefined
// let name ;
// console.log(typeof(name));

//null
// type of null is object , it is a bug in javascript , but we cant get fix it because many js libraries and frameworks written in js with this bug 
// let namess = null;
// console.log(typeof(namess));
// console.log(typeof(null));

//Bigint
// console.log(Number.MAX_SAFE_INTEGER);
// ⬆️ this will provide value = 9007199254740991, if you want to store number with value more then this value then use Bigint
// let numbers = 900719925474094585555591n;
// // or
// let numberss = BigInt(71992547409914644);
// console.log(typeof(numberss));

//BOOLEAN AND COMPARISON OPERATIOR
// boolean gives - true/false
// comparison operator - we know
// let num1 = 3;
// let num2 = 6;
// console.log(num1>=num2);
// == vs === , in == it compare only value not data type but in === it compare value and data type
// let num1 = "3";
// let num2 = 3;
// console.log(num1==num2);
// console.log(num1===num2);
// // != vs !== , in != it compare only value not data type but in !== it compare value and data type
// console.log(num1 != num2);
// console.log(num1 !== num2);

//typeof()
// let name = "karan";
// console.log(typeof(name));

// // number to string and string to number
// // 1. string to number
// // Using Number():
// let str = "123";
// console.log(str, " ", typeof(str));
// str = Number(str);
// console.log(str, " ", typeof(str));

// // Using the Unary + Operator:
// let str = "123";
// let num = +str;
// console.log(num); // 123

// // Using parseInt() for integers:
// let str = "123";
// let num = parseInt(str, 10); // The second argument is the radix (base)
// console.log(num); // 123

// // Using parseFloat() for floating-point numbers:
// let str = "123.45";
// let num = parseFloat(str);
// console.log(num); // 123.45

// // 2. Convert Number to String
// // Using String():
// let num = 123;
// let str = String(num);
// console.log(str); // "123"

// // Using toString():
// let num = 123;
// let str = num.toString();
// console.log(str); // "123"

// // Using String Concatenation:
// let num = 123;
// let str = num + "";
// console.log(str); // "123"

// variable - 
// Variable names must start with a letter, an underscore (_) or a dollar sign ($).
// Variable names cannot contain spaces.
// Variables cannot be the same as reserved keywords such as if or const.
// By convention, JavaScript variable names are written in camelCase.
// Variables should be given descriptive names that indicate their content and usage (e.g. sellingPrice and costPrice rather than x and y).
// As JavaScript variables do not have set types, it can be useful to include an indication of the type in the name (e.g. orderNumber is obviously a numeric ID, whereas order could be an object, a string or anything else).
// let names = "karan";
// console.log(names);
// names = "kartik";
// console.log(names);

// // String indexing 
// let firstName = "Karan";
// console.log(firstName[0]);

// //length of string
// console.log(firstName.length);

// //last index = length -1
// console.log(firstName.length - 1);

//string is immutable i.e. cant be changed so string methods provide new values which we store in new variable
//string methods

//trim() - remove spaces
// let firstName = "karan.";
// firstName = firstName.trim();
// console.log(firstName);

//toUpperCase()
// let firstName = "karan.";
// firstName = firstName.toUpperCase();
// console.log(firstName);

//toLowerCase()
// let firstName = "KARAN.";
// firstName = firstName.toLowerCase();
// console.log(firstName);

//slice() - slice(0, n+1) -> it will make new string from string[0] to string[n]
// let firstName = "karan.";
// firstName = firstName.slice(0, 5);
// console.log(firstName);

//string concatination
// let firstName = "karan";
// let secondName = "rao";
// let fullName = firstName + " " + secondName;
// console.log(fullName);

// template string
// via string concatination:
// let age = 22;
// let name = "karan";
// console.log("my name is " + name + " my age is " + age);
// via template string = (backstics `` & $ & placeholder {})
// console.log(`my name is ${name} and my age is ${age}`);

//conditional execution & falsy and truthy value
//if - else , in if section if contionans has truthy boolean value  then if-block will get executed and for falsy value else-block will get executed
// let fnames = "karan";
// if (fnames){
//     console.log(`name is ${fnames}`);
// }
// else{
//     console.log(`no name`);
// }
//falsy value:
//false
//" "
//undefined
//null
//0
//truthy value: all remaining values
// let fname ;
// if(fname){
//    console.log("hellow");
// }
// else{
//     console.log("nothing");
// }

//ternary operator or conditional operator
// let age = 22;
// let drink = age >= 18 ? "wine" : "milk" ;
// console.log(drink);

// and / or operator
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

//prompt , it is using to take input . it takes input as a string to use that input as a number we have to use type conversion
// let number = prompt("enter the number");
// number = +number;
// console.log(number);

// // nested if else
// if(number === 19){
//     console.log("right guess");
// }
// else{
//     if(number < 19){
//         console.log("it is small");
//     }if
//     else{
//         console.log("it is big");
//     }
// }

//switch case 
// let day = 2
// switch(day){
//     case 0: 
//         console.log("monday");
//         break;
//     case 1:
//         console.log("tuesday");
//         break;
//     case 2:
//         console.log("wednesday");
//         break;
//     case 3:
//         console.log("thirsday");
//         break;
//     case 4:
//         console.log("friday");
//         break;
//     case 5:
//         console.log("satuday");
//         break;
//     case 6:
//         console.log("sunday");
//         break;
// }

//loops - based on principle - DRY (DONT REPEAT YOURSELF)
// SUM OF ALL NATURAL NUMBER TILL N ( WE CAN ALSO DO THIS WITH A.P.)
//WHILE LOOP
// let n = 100;
// let total = 0;
// let i = 1;
// while(i <= n){
//  total = total + i;
//  i++;
// }
// console.log(total);

//for loop - it containt initialization condition and updation
// for(let i = 0; i<=10; i++){
//     console.log(i);
// }

//break and continue, break just stop the execution but in continue it only stop that line of code related to condition
//break
// for(let i = 0; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }
// console.log("hi");

//continue
// for(let i = 0; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
// console.log("hi");

//do while loop - in this if condition has falsy value then loop will axecute at least once
// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);

//Array - refference data type(object) & it is ordered collection of item
// let fruits = ["apple", "Banana", "mango"];
// let numbers = [1, 2, 3, 4];
// let mixed = [1, 3, "apple", null, undefined];
// console.log(fruits);
// console.log(numbers);
// console.log(mixed);
// let fruit = ["apple", "banana", "mango"];
// console.log(fruit[0]);
// fruit[0] = "orange";
// console.log(fruit[0]);
// //type of array is object
// console.log(typeof fruit);

// // to check variable is array or not
// console.log(Array.isArray(fruit));
 
//PUSH AND POP => to insert an element in array from end
//push 
//let fruit = ["banana", "orange", "mango", "apple"];
// console.log("fruit");
// fruit.push("lichi");
// console.log(fruit);
// //pop - it return removed element
// let popped_fruit = fruit.pop();
// console.log(fruit);
// console.log(popped_fruit);
//shift & unshift => remove and insert an element from starting of an array
// it is slower then push and pop because to insert or remove an element from starting we have to move all the element from last position
//unshift - to add an element
// let fruit = ["banana", "orange", "mango", "apple"];
// fruit.unshift("lichi");
// console.log(fruit);
// //shift - to remove an element
// let removed_element = fruit.shift();
// console.log(fruit);
// console.log(removed_element);

// primitive vs reference data type
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

//clone array
// there are three methods - slice(), concat(), spread operator ...
//let array1 = [1, 2, 3];
// let array2 = array1.slice(0);
//let array2 = [].concat(array1);
//let array2 = [...array1];
//console.log(array2);

// if we want to add new element or array with cloning
//let oneMoreArray = [5, 6];
// let array2 = array1.slice(0).concat([7, 8]);
// let array2 = [].concat(array1, [7, 8]);
// let array2 = [...array1, ...oneMoreArray, 7, 8];
// console.log(array2);

//for loop in array
//last index = array.length - 1
// let fruits = ["apple", "banana", "orange", "mango"];
// let index = fruits.length -1;
// for (let i = 0; i<= index; i++){
//     console.log(fruits[i]);
// };
// // insert element of fruits into fruits2 with uppercase
// let fruits2 = [];
// for(let i = 0; i<=index; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);

//use const for crating array (use const for reference type ) here in const we cant repeat creation of that array but we can perform all the methods or operation on array
//  const fruit = ["apple", "banana", "mango"];
//  fruit.push("papaya");
//  console.log(fruit);

//while loop
// let fruits = ["apple", "banana", "mango"];
// let i = 0;
// let index = fruits.length - 1;
// while (i<= index) {
//     console.log(fruits[i]);
//     i++;
// };

//for of loop => mostly used one 
// const fruits = ["apple", "banana", "mango"];
// for(let fruit of fruits){
//     console.log(fruit);
// };

// //for in loop
// for(let index in fruits){
//     console.log(fruits[index]);
// };

//array destructuring
//normal method
//const arr1 = ["value1", "value2", "value3", "value4"];
// let a1 = arr1[0];
// let a2 = arr1[1];
// console.log(a1, a2);
// in javascript
// let [a1, a2 ] = arr1;
// console.log(a1, a2);
// if we want to take value3 in a2 then
// let [a1 , ,a2]= arr1;
// console.log(a1, a2);
// for remaining values 
// let [a1, a2, ...a3] = arr1;
// console.log(a1, a2, a3);

//objects (reference type)
//arrays are good but not sufficient
//for real world data
//objects store key value pairs
//objects dont have index
//create objects (key store as a string in a object)
// const person = {
//     name:"karan",
//     age : 23,
//     hobbies : ["coding", "mandi"]
// };
// //access data from object
// //via dot
// console.log(person.name);
// //via bracket 
// console.log(person["age"]);
// //add key value pair in object
// //via dot and bracket
// person.gender = "male";
// person["weight"] = 79;
// console.log(person);

//dot vs bracket notation
// if any key contains space then we cant access that key via dot we have to use bracket
// const person = {
//         name:"karan",
//         age : 23,
//         "my hobbies" : ["coding", "mandi"]
//     };
// console.log(person["my hobbies"]);
// // if we want to add value of any variable as a key then we have to use bracket 
// const key = "email";
// person[key] = "karanyelgulwar@gmail.com";
// console.log(person);

//iterate objects - 
//for in loop / Object.keys
//for in loop (dont use dot notation use bracket only)
// const person = {
//             name:"karan",
//             age : 23,
//             "my hobbies" : ["coding", "mandi"]
//         };
// // for (let key in person){
// //     console.log(key, person[key]);
// // };
// //object.keys - it provide array of keys in a object , then we can use for of loop for iterate
// console.log(Object.keys(person));
// console.log(Array.isArray(Object.keys(person)));
// for (let key of Object.keys(person)){
//     console.log(person[key]);
// };

//computed properties - if we have two variable and we want to make -
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// // and we want to make - const obj = {
// //           objkey1 : "myvalue1";
// //           objkey2 : "myvalue2";       
// //};
// // method 1
// // const obj = {
// //     [key1] : value1,
// //     [key2] : value2
// // };

// //method 2
// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);

//spread operator in object (in object one key can apear only once and latest value of that key will be final value)
// const obj1 = {
//     key1 : "karan",
//     key2 : 23
// }
// const obj2 = {
//     key2 : 22,
//     key3 : "yash",
//     key4 : 21
// }
// const newObj = {...obj1, ...obj2, key5: "rakesh"};
// console.log(newObj);
// //spread operator for array in object - here key will be index of array
// const obj = {...["item1", "item2", "item3"]};
// console.log(obj);
// //spread operator for string in object - here key will be index of string
// const objj = {..."abcdefghijklmnopqrstuvwxyz"};
// console.log(objj);

//object destructuring - we can make key as a variable with value of that key
// we can also rename that varibale
// we can also make new object from remaining key of that object using spread operator
// const band = {
//     bandName :"led zepplin",
//     famousSong : "strairway to heave",
//     year: 1968,
//     anotherSong : "kashmir"
// };
// let {bandName, famousSong:var2, ...restkey} = band;
// console.log(bandName,",", var2, restkey);

//Object inside array - we can use any loop which is used in array
// const users = [
//     {userId:1, firstName: "harshit", gender:"male"},
//     {userId:2, firstName: "mohit", gender:"female"},
//     {userId:3, firstName: "nitish", gender:"gay"}
// ];
// for (let user of users){
//     console.log(user);
// }
// for (let user of users){
//     console.log(user.userId, user["firstName"]);
// }

//nested destructuring
// const users = [
//         {userId:1, firstName: "harshit", gender:"male"},
//         {userId:2, firstName: "mohit", gender:"female"},
//         {userId:3, firstName: "nitish", gender:"gay"}
// ];
// const[user1, user2, user3] = users;
// console.log(user1, user2);

// const[{firstName:user1firstname, gender}, ,{userId}] = users;
// console.log(user1firstname);
// console.log(gender);
// console.log(userId);

//function - it takes value as parameter and return value
// to use function we have to invoke function or run it
//function declaration - it starts with function keyword
//find even or not
// function isEven (num){
//     if(num %2 === 0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// };
// isEven(8);

//take any string and return first letter of string
// function firstLetter(anyString){
//     console.log(anyString[0]);
// }
// firstLetter("karan");

//target search in any array and return its index
// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i] === target){
//             console.log(i);
//         }
//         else{
//             console.log(-1);
//         }
//     }
// }
// const arr1 = [1, 2, 4, 65, 76];
// findTarget(arr1, 67);

// function expression - in this function stored in a variable and name of the variable is the name of function
// const firstLetter = function (anyString){
//         console.log(anyString[0]);
//     }
// firstLetter("karan");

//arrow function
// const firstLetter = (anyString) =>{
//     console.log(anyString[0]);
// }
//if we have only one parameter
// const firstLetter = anystring =>{
//     console.log(anystring[0]);
// }
//if we have only one parameter and one statement inside function
//const firstLetter = anystring => console.log(anystring[0]);
//firstLetter("karan");

//hoisting

//function inside function
// const fun1 = (num1, num2)=>{
//     const fun2 = (num1, num2)=>{
//         console.log(num1*num2);
//     }
//     console.log(num1, num2);
//     fun2(num1, num2);
// }
// fun1(2,3);

//lexical scope - if any varible is not present in that block from which that variable called then it will check within its lexical scope
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

//block scope vs function scope
// //let and const are block scope
// {
// let firstName = "karan";
// }
// {
// const firstName = "harshit";
// }
// console.log(firstName);
// var is function scope
// const hello = ()=>{
//     var hi = "hello";
//     function d () {
//         console.log(hi);
//     }
//     d();
// }
// console.log(hi);
// hello();

//default parameter - in this we intialize parameter with any value
// const sum =(a = 0, b=0)=> console.log(a+b);
// sum(2);

//rest parameters - in this we can make array of rest parameters
// const names = (a, b, ...c)=>{
//     console.log(`${a} & ${b} & ${c}`);
// }
// names(1,2,3,4,5,6,7,8);
// //use of rest parameter - sum of numbers
// const sum = (...a)=>{
//     let total = 0;
//     for (let num of a){
//      total = total + num;
//     }
//     console.log(total);}
// sum(1,2,3,4,5,6,7,8);

//parameter destructuring - used in react and object
//we can access value from object via key in any function but we can also use parameter destructuring
// const person ={
//     firstName :"harshit",
//     gender : "male",
//     age : 22
// }
// //now we want to access key value via function this can be done by simple method or parameter destructuring both
// //simple method-
// function printDetails (obj){
//     console.log(obj.firstName);
// }
// printDetails(person);
// //via prarameter destructuring
// const printde =({firstName, gender})=>{
//     console.log(firstName, gender);
// };
// printde(person);

//callback function
// function myfun2(name){
//     console.log("inside myfun2");
//     console.log(`your name is ${name}`);
// }

// function myfun(callback){
//     console.log("hello");
//     callback("harshit");
// };
// myfun(myfun2);

//function returning function
// function fun1 (){
//     function hello(){
//         console.log("hellow world");
//     }
//     return hello;
// };
// const ans = fun1();
// ans();

//important array method
//1.forEach()
// const number = [1, 8, 3, 4, 5];
// // const printall = (num)=>console.log(num);
// // number.forEach(printall);

// number.forEach(function(inde, num){
//     console.log(inde, num);
// })
// const names = [
//     {firstname:"karan", age : 22}, {firstname:"harshit", age:22}, {firstname:"yash", age:21}
// ];
// names.forEach(function(num){
//  console.log(num.firstname);
// })

//2.map() method
//it create new array with executed function , to use map method we have to make function with return statement only
// const number = [1, 8, 3, 4, 5];
// // const square = (num) => {return num*num};
// // const newarr = number.map(square);
// // console.log(newarr);

// const newarr = number.map((num)=>{return num*num;});
// console.log(newarr);

//3.fiter() method
//it will create a new array of element for which callback function provide value true i.e. in filter method callback function should always return boolean value
// const number = [1, 8, 3, 4, 5];
// const evenNumber = number.filter((num)=>{return num%2 ===0;});
// console.log(evenNumber);

//4.reduce() method
//it has two parameter (accumulator & currentvalue) in first step accumulator = arrray[0] and currentvalue = array[1] (we can also intialize value of accumulator that we want in that case current value will be firs element of array) then it returns value of performed operation on accumulator and currentvalue and then update return value as accumulator and next array value as currentvalue untill all the element of array accesed
//example - aim : to find sum of all the element of array
// const number = [1, 8, 3, 4, 5];
// const sum = number.reduce((accumulator, currentvalue)=>{return accumulator + currentvalue;});
// console.log(sum);
//accumulator, currentvalue, return
//     1,          8,          9
//     9,          3,          12
//     12,          4,          16
//     16,          5,          21(final value)

// if we initialize value of accumulator as 100
// const number = [1, 8, 3, 4, 5];
// const sum = number.reduce((accumulator, currentvalue)=>{return accumulator + currentvalue;},100);
// console.log(sum);

//example 2 - sum of price of product in cart
// const userCart =[
// {Id : 1, name:"mobile", price:85000},
// {Id : 2, name:"fridge", price:75000},
// {Id : 3, name:"press", price:5000}
// ];
// const totalPrice = userCart.reduce((total, currentprice)=>{
//  return total + currentprice.price;
// },0)
// console.log(totalPrice);

//5. sort method
//it change the array on which we perform operation
// sort method treat elements of array as string and sort them according to their asci value, and take asci value of first digit(from left) of that number, example-
// const number = [1, 88, 13, 4, 5];
// number.sort();
// console.log(number);
//to perform right sorting we use
//1. for ascending order
// const number = [1, 88, 13, 4, 5];
// number.sort((a,b)=>a-b);
// console.log(number);
// ///2. for descending order
// number.sort((a,b)=>b-a);
// console.log(number);
// //here a-b compare two element of array and check condition true or false(i.e. check it gives negative or positive value)
// //example- let in any e-comerce website there is a option for price sorting
// //if we direct use sort method then it will change in real sequece so we will create new sorted object or array
// const products =[
//     {productId: 1, name:"sunscream", price:2400},
//     {productId: 2, name:"namkeen", price:400},
//     {productId: 3, name:"cream", price:240}
// ];
// //low to high
// const lowToHigh = products.sort((a,b)=>a.price - b.price);
// console.log(lowToHigh);
// //high to low
// const highToLow = products.sort((a,b)=>b.price - a.price);
// console.log(highToLow);

//6. find()
//it find and crate new array for which callback function of find is true
//example - find name in object users for which length of name >4
// const users = [
//     {userId: 1, name:"har"},
//         {userId: 2, name:"namkeen" },
//          {userId: 3, name:"cream" }
// ];
// const newUser = users.find((a)=> {return a.name.length >4;});
// console.log(newUser);

//7. every() method
// it returns only boolean value for any call back function if function if true for every element of array then it return true else it will return false
//example - check all element in an array are even or not
// const numbers = [2, 4, 6, 8, 10];
// const check = numbers.every((a)=> a%2 ===0);
// console.log(check);
// //example - check all the product in cart have value < 20000
// const products =[
//         {productId: 1, name:"sunscream", price:2400},
//         {productId: 2, name:"namkeen", price:400},
//         {productId: 3, name:"cream", price:240}
//     ];
// const productCheck = products.every((item)=>item.price < 20000);
// console.log(productCheck);

//8. some() method
// it is oposite of every method , in this - if callback function's condition is true for atleast one element then it will return true else false
// const numbers = [2, 4, 6, 8, 10];
// const check = numbers.some((a)=> a%2 ===0);
// console.log(check);

//9. fill() method
// it change the value in any array
//it contains value(to be fill), start(index from where to start), end (last index for fill)
//example 1 - fill an array with value 8 from index 2 to 4
// const array = [ 1, 2, 3, 4, 5, 6, 7, 8];
// array.fill(8, 2, 4);
// console.log(array);

// //example 2 - create a new array with same value , here we will create an array with 5 element and value = 0
// const myArray = new Array(5).fill(0);
// console.log(myArray);

//10. splice method
//start, delete. insert
//it changes array (delete item and insert new value), 
// it also return array with deleted item
// example -delete
// const numbers = [2, 4, 6, 8, 10];
// const deleted = numbers.splice(2,3);
// console.log(numbers);
// console.log(deleted);
//example - insert
// const numbers = [2, 4, 6, 8, 10];
// numbers.splice(1, 0, "insert");
// console.log(numbers);

//example - insert and delete
// const numbers = [2, 4, 6, 8, 10];
// const deleted = numbers.splice(2, 1, 22, 38);
// console.log(numbers);
// console.log(deleted);


//iterables - jispe hum for of loop laga sakte hain
// string , array are iterable but object is not iterable

//array like object
//jinke pas length property hoti hai
//aur jinko hum index se access kar sakte hain
//example - string
// const firstName = "karan";
// console.log(firstName.length, firstName[0]);

//set (it is iterable)
//store data
//sets also have its own methods
//no index-based access
//Order is not guaranteed
//unique items only(no duplicates allowed) but in reference data data types which have different adress but same value can store
// initialization 
// const names = new Set([1, 2, 3]);
// console.log(names);

// const numbers = new Set();
// const item = ["item1", "item2", "item3"];
// numbers.add(1);
// numbers.add(2);
// numbers.add(item);
// numbers.add(item);
// numbers.add([5, 6]);
// numbers.add([5, 6]);
// console.log(numbers);

// //check any element is present or not in set - using has() - it provide boolean value
// const check = numbers.has(item);
// console.log(check);

// //for of loop in set
// for (let number of numbers){
//     console.log(number);
// };

// //create set of unique element in array and find length of set(number of unique element)
// const myArray = [1, 2, 2, 8, 8, 5, 6];
// const uniqueElement = new Set(myArray);
// console.log(uniqueElement);
// console.log(`myArray : ${myArray} and uniqueElement : ${uniqueElement}`);
// let length = 0;
// for (let elementh of uniqueElement){
//     length ++;
// }
// console.log(`length of uniqueElement is ${length}`);

//map
//map is an iterable
//store data in ordered fashion
//store key value pair(like object)
//duplicate keys are not allowed like object
// difference between map and object =>
//object is also called as object literal, in object : key stored as
//key -> string (99%)
//key -> symbol (1%)
// in maps you can use anything as key - like array, number, string
//example
// const person = new Map();
// person.set("firstname", "harshit");
// person.set("age", 7);
// person.set(1, "one");
// person.set([8, 9], "number");
// person.set({name: "karan"}, "value");
// console.log(person);
// console.log(person.get(1));
//we can print all the key using keys() which is a iterable we can also use for of loop with keys()
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key, typeof key);
//};
// for of loop in map - it provide array of keys in map
// for (let key of person){
//     console.log(key);
// };

//second method for creating  map
// const names = new Map([[1, "karan"], [2, "gaurav"], [3, "harshit"]]);
// console.log(names);
// //accsess key and value
// for (let [key, value] of names){
//     console.log(key, value);
// };

// //making map with object and other object, i.e. creating map with object key and object value
// const person1 = {
//     id : 1,
//     firstname: "ronak"
// };
// const extraInfo = new Map();
// extraInfo.set(person1, {age:8, gender:"male"});
// console.log(extraInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);

//clone using Object.assign
// const obj = {
//     key1: "value1",
//     key2:"value2"
// }
// //method 1 for cloning - we know this method (spread operator)
// //const obj2 = {...obj};

// //method 2 - in this method obj and obj2 have same address in heap so when we will change in obj it will also change obj2
// //const obj2 = obj;

// //method 3 - Object.assign - this will cover in oop
// const obj2 = Object.assign({}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

//optional chaining
//it is using for get undefined for key value which is not present now but can present letter in any object
// const user = {
//     firstName : "harshit",
//     adress : {houseNumber : '1234'}
// };
// console.log(user?.firstName);
// console.log(user?.adress?.houseNumber);


