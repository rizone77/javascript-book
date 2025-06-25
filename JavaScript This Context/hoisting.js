// sayHello();

// function sayHello(){
//     console.log('hello , world')
// }

// একটা ভেরিয়েবল ডিক্লেয়ার কর, যেটার মধ্যে কমেন্টের সংখ্যা থাকবে। এখন এই ভেরিয়েবলটাকে ডিক্লেয়ার করার আগের লাইনে এইটার মান এক বাড়ানোর চেষ্টা কর। দেখ কী হয়।
// commentCount++;  // ডিক্লেয়ার করার আগেই বাড়ানোর চেষ্টা
// let commentCount = 0;
// console.log(commentCount);



// const দিয়ে views নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। আর ডিক্লেয়ার করার আগের লাইনে এই ভেরিয়েবলকে 2 দিয়ে ভাগ কর। তাহলে ভাগফল কত পাবি?

// console.log(views / 2);  // ডিক্লেয়ার করার আগেই এক্সেস করার চেষ্টা
// const views = 100;




// Temporal Dead Zone (TDZ) কাকে বলে এবং এটি কেন গুরুত্বপূর্ণ?

// **TDZ (Temporal Dead Zone)** হলো সেই সময়, যখন `let` বা `const` ভেরিয়েবল ডিক্লেয়ার হওয়ার আগে এক্সেস করলে **ReferenceError** হয়।

// 👉 এটা কোডকে নিরাপদ রাখে এবং ভুল এক্সেস আটকায়।


// function expression দিয়ে লেখা ফাংশনকে hoisting করলে কেন initialization-এর আগে কল করা যায় না? 

// sayHi(); // ❌ Error

// const sayHi = function() {
//   console.log("Hi!");
// };

// সংক্ষেপে:
// Function expressions are not hoisted with their definitions — তাই initialization-এর আগে কল করলে error হয়।


// var দিয়ে ডিক্লেয়ার করা ভেরিয়েবলের hoisting behavior কেমন? উদাহরণসহ ব্যাখ্যা কর।

// ### ✅ `var` Hoisting (সংক্ষেপে):

// `var` দিয়ে ডিক্লেয়ার করা ভেরিয়েবল **hoist** হয় এবং মান হয় **undefined** যতক্ষণ না সেটায় ভ্যালু অ্যাসাইন করা হয়।

// ---

// ### 🧠 উদাহরণ:

// ```javascript
// console.log(x); // undefined
// var x = 5;
// ```

// 👉 ডিক্লেয়ারের আগে এক্সেস করা যায়, কিন্তু মান পাওয়া যায় `undefined`।


// let এবং var-এর hoisting behavior একই?

// **না**, `let` আর `var` এর hoisting এক নয়।

// * `var` → hoist হয়, মান হয় `undefined`
// * `let` → hoist হয়, কিন্তু **TDZ**-এর কারণে আগে এক্সেস করলে **ReferenceError** হয়


// দুইটা সংখ্যার মধ্যে বড় সংখ্যা কোনটা, সেটা বের করার একটা ফাংশন লিখে ফেল। তারপর এই ফাংশন ডিক্লেয়ার করার আগেই সেই ফাংশনকে কল করে ফেল 87 আর 12 দিয়ে। তারপর রিটার্ন যেটা পাবি, সেটাকে কনসোল লগ করে ফেল। যেখানে কনসোল লগ করছস, সেখানে কমেন্ট করে লিখে ফেল, কীভাবে ফাংশন ডিক্লেয়ার করার আগেই সেই ফাংশনকে ইউজ করতে পারলি। 

// ফাংশন ডিক্লেয়ার করার আগেই কল করছি, কারণ function declaration হোইস্ট হয়
// console.log(biggerNumber(87, 12)); // Output: 87

// // ফাংশন ডিক্লেয়ারেশন
// function biggerNumber(a, b) {
//   return a > b ? a : b;
// }

// function দিয়ে লেখা function declaration গুলা hoist হয় সম্পূর্ণভাবে — নামসহ ও তার শরীর (body) সহ।
// তাই উপরে থেকে কল করলেও JavaScript সেটা আগে থেকেই চিনে ফেলে।
// এজন্য ডিক্লেয়ার করার আগেই ফাংশন কল করা যায়। ✅
