// // const maxc = Math.max(5,23,45,1,89,34)
// // console.log(maxc)

// // const numbers = [3,5,2,45,5,43,90,32,15];
// // const arrayMax = Math.max(numbers);

// // console.log(arrayMax)

// // const arrayMax = Math.max(... numbers);
// // console.log(arrayMax)

// // const friends = [4,5,87,9]
// // const bondhu = friends;

// // bondhu.push(12);
// // console.log(friends)

// // const friends = [4,5,87,9];
// // const dosto = [... friends];
// // console.log(dosto)
// // friends.push(100);
// // console.log(dosto)
// // console.log(friends)

// // const friends = [4,5,87,9];
// // const sonkha = [...friends, 9999];
// // console.log(sonkha)

// // const fruits = ['apple', 'banana'];
// // const moreFruits = ['mango', ...fruits, 'orange'];
// // console.log(moreFruits)

// // const array1 = [1,2];
// // const array2 = [3,4];

// // const combinedArray = [...array1, ...array2];
// // console.log(combinedArray)

// // const person = {name: 'amit', age: 30};
// // const clonedPerson = {...person};
// // console.log(clonedPerson)

// const student = {name: 'Rafi'};
// const updatedStudent = {...student, age: 22 };
// console.log(updatedStudent)


// নতুন একটা অ্যারে বানা, যেখানে প্রথম উপাদান হবে "variable", তারপরের উপাদানগুলো আসবে const technologies = ["Condition", "array", "loop"], অ্যারে Spread Operator দিয়ে কপি করে।
// const technologies = ["Condition", "array", "loop"]
// elments = ['variable', ...technologies];
// console.log(elments)

// myFruits নামে নতুন একটা অ্যারে তৈরি কর, যেখানে const fruits = ["Apple", "Banana", "Mango"], এই অ্যারেটার উপাদানগুলো থাকবে আর শেষে papaya, orange থাকবে। 
// const fruits = ["Apple", "Banana", "Mango"]
// const myFruits = [...fruits, 'papaya', 'orange'];
// console.log(myFruits)


// তিনটা অ্যারে আছে const frontEnd = ["JavaScript"], const backEnd = ["Node.js"], const database = ["MongoDB"], এগুলোকে Spread Operator দিয়ে একটাতে একত্রিত কর।
// const frontEnd = ["JavaScript"];
//  const backEnd = ["Node.js"] ;
//  const database = ["MongoDB"];
// const getTogether = [...frontEnd, ...backEnd, ...database];
// console.log(getTogether)

// const website = { name: "MySite", type: "e-commerce", status: "active" } এই অবজেক্টে নতুন প্রোপার্টি theme: "dark" যোগ করে নতুন অবজেক্ট তৈরি কর এবং প্রিন্ট কর।
//  const website = { name: "MySite", type: "e-commerce", status: "active" };
//  const add = {...website, theme: 'dark'};
//  console.log(add)


// const young = { name: "Arif", age: 30, country: "B Baria" } এই অবজেক্টের একটি কপি তৈরি কর এবং country বাদে বাকিসব প্রোপার্টি নতুন অবজেক্টে রেখে প্রিন্ট কর।
const young = { name: "Arif", age: 30, country: "B Baria" }
const  {country, ...rest} = young
console.log(rest)


// const car = { make: "Toyota", model: "Corolla", year: 2020 } এই অবজেক্টের একটি কপি তৈরি কর এবং year আপডেট করে 2032 করে নতুন অবজেক্ট তৈরি কর।

const car = { make: "Toyota", model: "Corolla", year: 2020 }
const updateModel = {...car, year: 2032};
console.log(updateModel)
