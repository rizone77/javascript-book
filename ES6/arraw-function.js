// // function add(a, b){
// //     const result =  a + b;
// //     return result
// // }

// // console.log(add(5, 90));


// // function add(a,b){
// //     return a+ b
// // }
// // console.log(add(5,90))

// // const add2 = function(a, b){
// //     return a + b;
// // }
// // console.log(add2(5 , 95))

// // const add3 = (a, b) => a + b;
// // const sum = add3(5, 30);
// // console.log(sum)

// // const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

// // const sum = add4(5,30,4,6);
// // console.log(sum)

// // const student = {
// //     name: 'ananta',
// //     age: 23
// // }
// // const getName = person => person.name;
// // const getAge = (person) => person.age;
// // const age = getAge(student);
// // const name = getName(student)
// // console.log(name)

// // const getThird = numbers => numbers[3];
// // const third = getThird([5, 36, 6, 26, 6]);
// // console.log(third)

// // const getPi = () => Math.PI;
// // console.log(getPi())

// // const doMath = ( x, y, z) => {
// //     const sum = x+y+z;
// //     const mult = x * y * z;
// //     const result = sum + mult;
// //     return result
// // }

// // const result = doMath(3,5,8)
// // console.log(result)

// // const person = {
// //     name: 'Ananta',
// //     greetRegular : function () {
// //         console.log('hello,' + this.name)
// //     },
// //     greetArrow: () => {
// //         console.log('hello,' + this.name)
// //     }
// // }
// // person.greetRegular();
// // person.greetArrow();

// // const greet = (name = 'Guest') => `Hello, ${name}!`;
// // console.log(greet());
// // console.log(greet());

// //wrong
// // const getObject = () => {key: 'value'};
// // console.log(getObject())

// // right

// // const getObject = () => ({key: 'value'});
// // console.log(getObject())


// একটি array-এর প্রথম ইনডেক্সের মান রিটার্ন করবে, এমন একটা অ্যারো ফাংশন লিখ।


// const getFirstNumber = numbers => numbers[0]
// const first = [4,34,54,23,43,12,]
// console.log(getFirstNumber(first))

// তিনটি সংখ্যা নিয়ে তাদের গুণফল রিটার্ন করে, এমন একটা অ্যারো ফাংশন লিখ।

// const mult = (num1, num2, num3) => num1 * num2 * num3 
// console.log(mult(5,5,5))


// এমন একটি arrow function তৈরি কর, যা কোনো প্যারামিটার নেয় না শুধু "unknown" রিটার্ন করে।

// const add2 = () => 'unknown'
// console.log(add2())


// একটি object-এর মধ্যে নাম এবং পকেটে কত টাকা আছে এমন দুইটা প্রপার্টি আছে। এখন এমন একটা অ্যারো ফাংশন লিখ, যেটা টাকার পরিমাণকে 5 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 
 const details = {
    name: 'rakib MD',
    money: 100
 } 

// const getDivide = details => (details.money)/ 5;
// console.log(getDivide(details))

// জাভাস্ক্রিপ্টে কোনো একটা অ্যারের শেষ উপাদান পাওয়ার জন্য শেষ উপাদানের ইনডেক্স বের করতে হয়। শেষ উপাদানের ইনডেক্স বের করার সিস্টেম হচ্ছে, অ্যারের লেংথ বের করে সেটা থেকে 1 বিয়োগ করবি। এইটা আগে একটু প্র্যাকটিস করে ফেল। তারপর একটি array-এর প্রথম ও শেষ উপাদান যোগ করে যোগফল রিটার্ন করবে, এমন একটা arrow function লিখে ফেল।


// const getRes = numbers => (numbers[4] + numbers[0])
// const array = [12,34,56,78,90];
// // const getL = array.length - 1;

// console.log(getRes(array))




// এমন একটা ফাংশন তৈরি কর, যা দুইটা সংখ্যা যোগ করবে। প্রথম সংখ্যা না থাকলে 10, আর দ্বিতীয় সংখ্যা না থাকলে 5 ধরে যোগফল দেখাবে। এইটা Arrow function দিয়ে করবি। 

const getJog = (num1 = 10, num2 = 5) => num1 + num2
console.log(getJog(10,10))