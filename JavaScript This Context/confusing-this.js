// // console.log(this)

// const player = {
//     name: 'Sakep',
//     score: 100,
//     showScore(){
//         console.log(this.score)
//     }
// }

// // player.showScore();


// class Player {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }

//     showDetails(){
//         console.log(this.name);
//         console.log(this.level)
//     }
// }

// const gamer = new Player('Alex', 5);
// // gamer.showDetails();

// function doSomething (number){
//     console.log(this)
// }

// // doSomething()

// function Person(name){
//     this.name = name;
// }

// const user = new Person('Ayan');
// // console.log(user.name);

// {/* <button id="get-user"> element that was clicked </button>

// document.getElementById("get-user").addEventListener("click", function(){
//     console.log(this)
// }) */}


// const person = {
//     name:'John',
//     greet: () => {
//         return `Hello, I am ${this.name}`
//     }
// }

// // console.log(person.greet());


// "use strict";
// function test(){
//     console.log(this);
// }
// test();


// ### ✅ প্রশ্নের সহজ উত্তর:

// ---

// **১. ব্রাউজারে `window` অবজেক্ট জিনিসটা কী?**
// 👉 ব্রাউজারে সবকিছুই (যেমন ফাংশন, ভেরিয়েবল, টাইমার, ইভেন্ট) `window` অবজেক্টের অংশ। এটা গ্লোবাল অবজেক্ট।

// ---

// **২. ব্রাউজারে `console.log(this);` রান করলে `this`-এর ভ্যালু কী হবে?**
// 👉 গ্লোবাল স্কোপে `this` === `window`
// তাই আউটপুট হবে: `window` অবজেক্ট।

// ---

// **৩. অবজেক্টের মেথড নরমাল ফাংশন আর অ্যারো ফাংশন দিয়ে ডিক্লেয়ার করলে `this`-এর কোনো ডিফারেন্স হয়?**
// ✅ **হ্যাঁ!**

// * `normal function`: `this` হয় সেই অবজেক্ট যেটার ভেতরে ফাংশনটা আছে।
// * `arrow function`: `this` হয় প্যারেন্ট স্কোপের `this` (মানে বাইরের `this` কপি করে নেয়)।

// ---

// ### 🔍 উদাহরণ:

// js
// const obj = {
//   name: "Tom",
//   regularFn: function () {
//     console.log(this.name); // Tom
//   },
//   arrowFn: () => {
//     console.log(this.name); // undefined (window.name if declared)
//   }
// };

// obj.regularFn(); // Tom
// obj.arrowFn();   // undefined


// ---

// **➡️ সহজভাবে মনে রাখো:**

// * নরমাল ফাংশনে `this` কাজ করে ঠিক মতো।
// * অ্যারো ফাংশনে `this` বাইরের স্কোপ থেকে নেয়, তাই অবজেক্টের রেফারেন্স হারায়।



