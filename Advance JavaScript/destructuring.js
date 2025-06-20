// // const actor = {
// //     name:'Rakib Md',
// //     age: 30,
// //     phone: '0406147337',
// //     money: 123132313
// // }

// // const name = actor.name;
// // const age = actor.age;
// // const phone = actor.phone;
// // const money = actor.money;

// // console.log(name,age,phone,money)

// // const {name , age, money, phone} = actor;



// // const { age: boyos, money, phone} = actor
// // console.log(boyos)

// // const book = {title: '1984', author: 'George Orwell'};

// // const {title: BookTitle, author: bookAuhor} = book;
// // console.log(BookTitle, bookAuhor)

// // const numbers = [45, 99];
// // const [first, second] = numbers
// // console.log(first);
// // console.log(second)

// // function doubleThem (a, b){
// //     return [a * 2 , b * 2]
// // }

// // const [prothom, ditiyo] = doubleThem(6,9);
// // console.log(prothom, ditiyo)

// // const person = {name: 'Amit', age: 25};
// // const {name, phone = 'N/A'} = person;

// // console.log(name)
// // console.log(phone)

// // function introduce({name, age}){
// //     console.log(`Name: ${name}, Age: ${age}`);
// // }
// // const user = {name: 'Arohi', age: 22, hobby: 'Reading'};
// // introduce(user)

// // function sum([a, b]){
// //     return a + b;
// // }

// // console.log(sum([5, 10]));

// // const numbers = [1,2,3,4,5,];

// // const [, second , fourth] = numbers

// // console.log(second)
// // console.log(fourth)


// অবজেক্ট থেকে brand প্রোপার্টি আলাদা কর। const product = { name: "Laptop", price: 50000, brand: "Dell" };

// const product = { name: "Laptop", price: 50000, brand: "Dell" };

// const { brand } = product
// console.log(brand)






// Item অবজেক্ট থেকে phone এবং price প্রোপার্টি ডিস্ট্রাকচারিং কর। const item = { name: "Mobile", price: 20000, phone: "Samsung" }।
// const item = { name: "Mobile", price: 20000, phone: "Samsung" }

// const { phone, price } = item

// console.log(phone)
// console.log(price)


// অ্যারে থেকে প্রথম দুইটা উপাদান বের কর। const colors = ["red", "blue", "green", "yellow"];

// const colors = ["red", "blue", "green", "yellow"];
// const [prothom, ditiyo] = colors;
// console.log(prothom)
// console.log(ditiyo)




// তিনটা সংখ্যার একটা অ্যারে থেকে `destructuring` করে সেকেন্ড সংখ্যাটা আলাদা করে second নামক ভেরিয়েবলে রাখ। 

// const numbers = [10,20,30];
// const [, second ,] = numbers;
// console.log(second)


// অ্যারের প্রথম এবং শেষ উপাদানকে destructuring করে two এবং eight নামের ভেরিয়েবলে রাখ। const digits = [2, 4, 6, 8]।

// const digits = [2, 4, 6, 8];

// const [two, , , eight] = digits
// console.log(eight)




// ফাংশন রিটার্ন থেকে ডিস্ট্রাকচারিং করে প্রথম এবং দ্বিতীয় ভ্যালু আলাদা কর। function multiply(a, b) { return [a * 3, b * 3]; }।

// function multiply(a, b) { 
//     return [a * 3, b * 3];
//  }
 
// const [prothom, ditiyo] = multiply(2,6)
// console.log(prothom)
// console.log(ditiyo)

// person অবজেক্ট থেকে name এবং city আলাদা কর। আর phone না থাকলে ডিফল্ট ভ্যালু N/A সেট কর। const person = { name: "Rahim", city: "Dhaka" }।


// const person = { name: "Rahim", city: "Dhaka" };

// const {name, city, phone ='N/A'}= person;
// console.log(name)
// console.log(city)
// console.log(phone)




// teacher অবজেক্ট থেকে name এবং profession-এর ভ্যালু বের কর, যেখানে profession-এর নাম alias হিসেবে job রাখ। const teacher = { name: "Maria", profession: "Teacher" }।

// const teacher = { name: "Maria", profession: "Teacher" };

// const {name, profession:job} = teacher;
// console.log(name)
// console.log(job)