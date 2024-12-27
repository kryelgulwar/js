// //object method (function inside object )
// //this -it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.
// const person = {
//     firstname : "karan",
//     age : 23,
//     about: function Info(){
//         console.log(this.age, this.firstname);
//     }
// }
// console.log(person.about());
// function personInfo(){
//     console.log(`person name is ${this.firstname} and age is ${this.age}`);
// }
// const person1 = {
//     firstname : "karan",
//     age : 23,
//     about: personInfo 
// };
// const person2 = {
//     firstname : "ronak",
//     age : 22,
//     about: personInfo 
// };
// const person3 = {
//     firstname : "gaurav",
//     age : 21,
//     about: personInfo 
// };
// person2.about();
// //if we directly use this it will return window object. this and window will return same thing
// console.log(this);
// console.log(window);
//"use strict"; - in previous version of js window.func is defined and provide output so we have to use "use strict" but this is not in newer js

// //call, apply, bind
// //call - The call() method of Function instances calls this function with a given this value and arguments provided individually.
// //call(thisArg, arg1, arg2, /* …, */ argN)
// function hello (){
//     console.log("hellow world");
// };
// hello.call();
// //we can use method of any object for any other objct's property, example -\
// const person1 = {
//         firstname : "karan",
//         age : 23,
//         about: function (){
//             console.log(`firstname is ${this.firstname} and age is ${this.age}`);
//         }
//     };
//     const person2 = {
//         firstname : "ronak",
//         age : 22, 
//     };
// person1.about.call(person2); // here callback value for this is person2
// person1.about.call(); // it will show undefined because there is no value for this keyword

//example 2 - for function outside object 
// function about (){
//     console.log(this.firstname);
// };
// const person3 = {
//     firstname : "karan",
//     age : 23,
// };
// const person4 = {
//     firstname : "ronak",
//     age : 22, 
// };
// about.call(person4);
// we can also use other parameter with call() if function also contains parameter, example -
// function about2 (branch, collage){
//     console.log(`${this.firstname} and branch is ${branch} and collage is ${collage}`);
// };
// const person5 = {
//     firstname : "karan",
//     age : 23,
// };
// const person6 = {
//     firstname : "ronak",
//     age : 22, 
// };
// about2.call(person5, "csbs", "soit");

// //apply - The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).
// //example -  
// about2.apply(person6, ["cse", "uit"]);
// // example 2- 
// const numbers = [5, 6, 2, 3, 7];
// const max = Math.max.apply(null, numbers);
// console.log(max);
// // Expected output: 7
// const min = Math.min.apply(null, numbers);
// console.log(min);
// // Expected output: 2

// //bind - The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called., example -
// const func = about2.bind(person5, "mechenical", "uit");
// func();
// // example 2
// const module = {
//     x: 42,
//     getX: function () {
//       return this.x;
//     },
// };
// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // Expected output: undefined
// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // Expected output: 42
  
// example 3 for bind
// const user1 ={
//     firstname : "harshit",
//     age : 8,
//     about : function(){
//         console.log(this.firstname, this.age);
//     }
// };
//user1.about();
//dont do this - it will give undefined because myfunc contain reference from user1.about() so for myfunc value of this is window object
// const myfunc = user1.about();
// myfunc();
// use bind to create new variable like above
// const myfuncc = user1.about.bind(user1);
// myfuncc();

//arrow function - for arrow function value of this is one level above (99% - window function )
//in arrow function using this will return undefined, example
// const user8 ={
//     firstname : "harshit",
//     age : 8,
//     about : () =>{
//         console.log(this.firstname, this.age);
//     }
// };
// user8.about();

// //other ways of writing methods inside object
// const user9 ={
//     firstname : "harshit",
//     age : 8,
//     about(){
//         console.log(this.firstname, this.age);
//     }
// };
// user9.about();

//proto
//if we want to make many object with similar properties or methods then with the help of function we can made 
//example - we want to create objects with this kind of functionality👇
// const exampleUser = {
//     firstName : "karan",
//     lastName : "rao",
//     email : "karan@gmail.com",
//     age : 22,
//     address : "jabalpur",
//     about : function (){
//         return `${this.firstName} is ${this.age} year old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// };

// function createUser (firstName, lastName, email, age, address){
//  const user = {};
//  user.firstName = firstName;
//  user.lastName = lastName;
//  user.email = email;
//  user.age = age;
//  user.address = address;
//  user.about = function(){
//     return `${this.firstName} is ${this.age} year old`;
//  };
//  user.is18 = function(){
//     return this.age >= 18;
// };
// return user;};
// const user3 = createUser("harshit", "vashisth", "@gmail.com", 22, "jablaput");
// console.log(user3);
// console.log(user3.is18());

// //here every time when we will create user from the function method will also crate 
// //it means if we want to create million user then every user will store same method too, which can increase storage
// //to overcome this problem we can create another object with required methods outside the createUser function and pass refference of the methods inside function , which will store reference address only
// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} year old`;
//      },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// function createUser2 (firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//    return user;};
//    const user4 = createUser2("yash", "vashisth", "@gmail.com", 17, "jablaput");
//    console.log(user4);
//    console.log(user4.is18());

// //there is a problem in this 👆 approach
// //if we want to increase no of methods in userMethods then we have to also create change in createUser2 function i.e. we have to create refference in that function also and if we are crearing thousand of methods then it will be difficult
// // to overcome this we use __proto__

// //Object.create()
// //example - let here 👇 in this example i want if there are two object obj1 and obj2 
// // to main chahta hoon ki console.log(obj2.key1) me javascript pehle key1 ko obj 2 me check kare and print kare
// // aur agar key1 obj2 me nahi h to javascript use obj1 me check kare aur print kare
// //Object.create() is method to create new object in which inside create we pass __proto__ or [[prototype]] object for Object
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// };
// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";
// console.log(obj2.key3);
// console.log(obj2.key1);
// console.log(obj2);
// console.log(obj2.__proto__);
// // back to our problem
// //using proto to create users

// const userMethodss = {
//     about : function(){
//         return `${this.firstName} is ${this.age} year old`;
//      },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// function createUser3 (firstName, lastName, email, age, address){
//     const user = Object.create(userMethodss);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//    return user;
// };
//    const user5 = createUser2("yash", "vashisth", "@gmail.com", 17, "jablaput");
//    console.log(user5);
//    console.log(user5.is18());

//prototype

//in javascript , function can treated as function and also as object, example-
// function hello(){
//     console.log("hellow world");
// };
// console.log(hello.name);
// //here👆 name property provide name of function
// //we can add our own properties in function 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);
// //function provides more usefull properties like - call, apply, bind

// //every function in javascript provides an empty object which is called prototype in which we can add key value pair
// //and only function provides prototype
// console.log(hello.prototype);
// hello.prototype.abc = "abc";
// hello.prototype.sing = function(){
//     return "sa re ga ma pa";
// };
// console.log(hello.prototype.sing());

//using prototype with proto 
// function createUser4 (firstName, lastName, email, age, address){
//     const user = Object.create(createUser4.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//    return user;
// };
// createUser4.prototype.about = function(){
//     return `${this.firstName} is ${this.age} year old`;
//  };
// createUser4.prototype.is18 = function(){
//     return this.age >= 18;
// };
//    const user5 = createUser4("yash", "vashisth", "@gmail.com", 20, "jablaput");
//    console.log(user5);
//    console.log(user5.is18());

//new keyword - what new keyword do
//1. create an empty object this = {}
//2. if function has properte with this then it create it 
//3. return this
// function createUser (firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// };
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// };
// const user1 = new createUser("yash", 20);
// console.log(user1);
// user1.about();

//when we use new keyword then first letter of name of constructor fuction should be in capital letter
//constructor function-
// function CreateUser4 (firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// };
// CreateUser4.prototype.about = function(){
//     return `${this.firstName} is ${this.age} year old`;
//  };
// CreateUser4.prototype.is18 = function(){
//     return this.age >= 18;
// };
//    const user5 = new CreateUser4("yash", "vashisth", "@gmail.com", 20, "jablaput");
//    console.log(user5);
//    console.log(user5.is18());

// //print all the key in user5
// for (let key in user5){
//     console.log(key);
// };
// //print its own key
// for (let key in user5){
//     if(user5.hasOwnProperty(key)){
//         console.log(key);
//     };
// };

// //analysis of prototype - just for understanding
// let numbers = [1, 2, 3];
// //array has some inbuild methods, which are stored in its prototype
// //but earlier we have studied that only function has prototype
// //actuly in js Array is a constructor function 
// let number = new Array(1, 2, 3);
// // in simplified way we just wrote it as - let number = [1, 2, 3];
// //in prototype of Array constructor function we have all the methods of array
// console.log(Array.prototype);
// //or in above number array
// console.log(Object.getPrototypeOf(numbers));
// //prototype of array is array
// console.log(Array.isArray(Array.prototype));
// //by default prototype is object but we can change its type (jisne bhi javascript banayi use laga array ka prototype array hona chahiye)
// //change type of prototype
// function hello(){
//     console.log("hello");
// };
// console.log(hello.prototype);
// hello.prototype = [];
// console.log(hello.prototype);
// hello.prototype.push("1");
// console.log(hello.prototype);

//class keyword
//class are fake 
// class CreateUser {
//     constructor (firstName, lastName, email, age, address){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//     about(){
//         return `${this.firstName} is ${this.age} years old`;
//     }
//     sing(){
//         return `la la la`
//     }
//     print(a){
//         console.log(a);
//     }
// };
// const user5 = new CreateUser("yash", "vashisth", "@gmail.com", 20, "jablaput");
// console.log(user5);
// console.log(user5.about());
// user5.print("karan");

// //superclass and derived class - we use extends keyword to create derived class
// class Animal{
// constructor(name, age){
//     this.name = name;
//     this.age = age;
// }   
// eat(){
//     return `${this.name} is eating`;
// }
// isSuperCute(){
//     return this.age<1;
// }
// isCute(){
//     return true;
// }
// }
// class Dogy extends Animal{
// } ;
// //object
// const tommy = new Dogy("tommy", 0.5);
// console.log(tommy.isSuperCute());

// //super keyword
// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name, age);
//         this.speed = speed;
//     }
//     eat(){
//         return `method from derived class:${this.name} is eating`;
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}`
//     }
// }

// const cherry = new Dog("cherry", 2, 45);
// console.log(cherry);
// console.log(cherry.run());
// console.log(cherry.isCute());
// //when we use any method - js firstly take from derived or used class then it will check from super class
// //example-
// console.log(cherry.eat());

// //getter and setters
// //get and set change method(functions)  to properties
// //splice return array and it break string from given input (here " ") and pass as a element in array
// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return`${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullname){
//         const [firstName, lastName] = fullname.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// const person1 = new Person("harshit", "sharma", 20);
// //printing full name using get
// console.log(person1.fullName);
// //changing full name using set
// person1.fullName = "karan rao";
// console.log(person1.fullName);

// //static methods and properties - methods inside class for which we dont relay on object of the class we can directly call them
// //static methods and properties cant accessed by object of class
// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     // static property
//     static color = "black";
//     //static method
//     static classInfo(){
//         return `this is person clss`;
//     }
//     get fullName(){
//         return`${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullname){
//         const [firstName, lastName] = fullname.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// const person1 = new Person("harshit", "sharma", 20);
// console.log(Person.color);
// console.log(Person.classInfo());


