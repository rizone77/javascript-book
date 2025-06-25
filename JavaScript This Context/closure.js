 //  let kuddusRoast = 0;
 //  let kuddusRoast = 0;
 //  let mofizRoast = 0;
 //  let samsuRoast = 0;
 //  let mokhlesRoast = 0;
 //  let akkasRoast = 0;
 //  let solaimanRoa
 //  function counter (){
 //    let count = 0;
 //    count++;
 //    return count

 //  function counter (){
 //     let count = 0;
 //     count++;
 //     return function innerFunc
 //     }

 //  function counter (){
 //     let count = 0;
 //     count++;
 //     return func
 //     }

 //  function counter(){
 //     let cou
 //     return function(){
 //         count++;
 //     }

 //  kuddusRoast = co
// // // closure কী জিনিস?

// // **Closure** হলো এমন একটি ফাংশন, যা তার বাইরের ফাংশনের ভ্যারিয়েবলগুলো মনে রাখতে পারে, এমনকি সেই বাইরের ফাংশন শেষ হয়ে যাওয়ার পরেও।

// // ### সংক্ষিপ্ত উদাহরণ:


// // function outer() {
// //   let x = 10;
// //   return function inner() {
// //     console.log(x);
// //   }
// // }

// // const fn = outer();



// // এখানে `inner()` ফাংশন `x` মনে রেখেছে — এটাই closure.


// // // তুই একটা fridgeTracker() ফাংশন বানা এবং তোর মেসের সবার জন্য আলাদা আলাদা ক্লোজার বানা। যাতে যে যতবার ফ্রিজ ওপেন করবে, তার কাউন্টার তত বাড়বে। 
// চমৎকার আইডিয়া! নিচে আমি `fridgeTracker()` নামের একটি ফাংশন বানালাম যা প্রত্যেক মেসমেটের জন্য আলাদা ক্লোজার তৈরি করে। এতে প্রত্যেকে যতবার ফ্রিজ খুলবে, তার নিজস্ব কাউন্টার বাড়বে, অন্য কারোটা না।

// ```javascript
// function fridgeTracker(personName) {
//   let openCount = 0;

//   return function () {
//     openCount++;
//     console.log(`${personName} ফ্রিজ খুলেছে ${openCount} বার`);
//   };
// }

// // এখন মেসের সবার জন্য আলাদা ট্র্যাকার বানাই
// const rakibFridge = fridgeTracker("রাকিব");
// const tanvirFridge = fridgeTracker("তানভীর");
// const nomanFridge = fridgeTracker("নোমান");

// // রাকিব ফ্রিজ খুলছে
// rakibFridge(); // রাকিব ফ্রিজ খুলেছে ১ বার
// rakibFridge(); // রাকিব ফ্রিজ খুলেছে ২ বার

// // তানভীর ফ্রিজ খুলছে
// tanvirFridge(); // তানভীর ফ্রিজ খুলেছে ১ বার

// // নোমান ফ্রিজ খুলছে
// nomanFridge(); // নোমান ফ্রিজ খুলেছে ১ বার
// nomanFridge(); // নোমান ফ্রিজ খুলেছে ২ বার
// nomanFridge(); // নোমান ফ্রিজ খুলেছে ৩ বার
// ```

// ### সংক্ষেপে:

// * `fridgeTracker()` প্রত্যেকজনের জন্য আলাদা ক্লোজার বানায়।
// * প্রতিটা ফাংশনের নিজের `openCount` থাকে, অন্যদের সঙ্গে শেয়ার করে না।

// বললে আমি এটা একটা UI বা ওয়েব অ্যাপ হিসেবেও বানিয়ে দিতে পারি!

// // // তুই একটা taskTracker() ফাংশন বানা, যেখানে প্রতিবার একটা কাজ ফিনিশ হওয়ার পর কাউন্ট এক এক করে বাড়বে। তোর বা তোর ফ্রেন্ড সবার কাজের স্কোপ আলাদা আলাদা থাকবে।

// function taskTracker(personName) {
//   let taskCount = 0;

//   return function () {
//     taskCount++;
//     console.log(`${personName} শেষ করেছে ${taskCount}টি কাজ`);
//   };
// }

// // আলাদা আলাদা মানুষদের জন্য ট্র্যাকার বানাই
// const rakibTask = taskTracker("রাকিব");
// const siamTask = taskTracker("সিয়াম");
// const taniaTask = taskTracker("তানিয়া");

// // রাকিব কাজ করছে
// rakibTask(); // রাকিব শেষ করেছে ১টি কাজ
// rakibTask(); // রাকিব শেষ করেছে ২টি কাজ

// // সিয়াম কাজ করছে
// siamTask(); // সিয়াম শেষ করেছে ১টি কাজ

// // তানিয়া কাজ করছে
// taniaTask(); // তানিয়া শেষ করেছে ১টি কাজ
// taniaTask(); // তানিয়া শেষ করেছে ২টি কাজ
