// // const mySet = new Set([1,2,3,4,5]);
// // console.log(mySet);

// // const numbers = [1,2,2,3,4,4,5];
// // const uniqueNumbers = new Set(numbers);
// // console.log(uniqueNumbers);

// // const numbers = [1,2,2,3,4,4,5];
// // const uniqueArray = [...new Set(numbers)];
// // console.log(uniqueArray)

// const mySet = new Set();
// mySet.add(10);
// mySet.add(20);
// mySet.add(10);
// mySet.add(30);

// // console.log(mySet)

// console.log(mySet.has(20));

// mySet.delete(10);
// console.log(mySet)

// const myMap = new Map();
// myMap.set('name', 'Rakib Md');
// myMap.set('age', 25);
// console.log(myMap)

// ডুপ্লিকেট বাদ দিয়ে একটা নতুন সেট তৈরি কর [1, 2, 2, 3, 4, 4, 5]।

// const mySet = new Set ([1, 2, 2, 3, 4, 4, 5]);
// console.log(mySet)

// নতুন একটা সেট বানিয়ে সেখানে 10, 20, 10, 30 এই উপাদানগুলো যোগ কর। তারপর সেটটাকে কনসোলে দেখাও।

const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(30);
mySet.delete(10)
console.log(mySet)


// Set { 10, 20, 30 } থেকে 10 উপাদানটি ডিলিট কর।

mySet.delete(10)
console.log(mySet)

// Array-এর মধ্যে [1, 2, 3, 4, 2, 1, 5, 5] উপাদানগুলো নিয়ে সেট তৈরি কর এবং সেই সেটকে array-তে রূপান্তর কর।

const numbers = [1, 2, 3, 4, 2, 1, 5, 5];
const uniqueArray = [... new Set(numbers)];
console.log(uniqueArray)










