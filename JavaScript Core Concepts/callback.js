//  function greeting(greatingHandler) {
//   console.log(greatingHandler);
//  }
//  function morningGreet() {
//   console.log('Good Morning');
//  }
//  greeting(morningGreet);

//  একটি ফাংশন লিখ, তার ভিতরে আরেকটি ফাংশন প্যারামিটার হিসেবে পাঠিয়ে তাকে কল কর এবং রেজাল্ট দেখ।

// function firstF(parr){
//     console.log(parr)
// }

// function seceondf(){
//     console.log('hyvaa huomenta')
// }

// firstF(seceondf())


//  ফাংশন লিখ, যেটি একটি অবজেক্ট প্যারামিটার নিবে এবং callback-এর মাধ্যমে অবজেক্টের সব কিগুলো কনসোলে দেখাবে।

function showKyes (obj, callback){
    const keys = Object.keys(obj);
    callback(keys)
}

function printkeys(keysArray){
   for(let keys of keysArray){
    console.log(keys)
   }
}

const person = {
  name: "Rifat",
  age: 28,
  city: "Dhaka"
};
showKyes(person, printkeys)

//  numberProcessor নামে একটি ফাংশন লিখ, যেটি একটি সংখ্যা এবং একটি callback নিবে এবং সংখ্যাটিকে 5 দিয়ে ভাগ করে callback-এর মাধ্যমে আউটপুট দেখাবে।


 function numberProcessor(num1 , callback){
             const res = num1 /5
             callback(res)
 }

function printResult (value){
   console.log('result is', value)
}

numberProcessor(10,printResult)
//  তুই ফাংশনের ভিতর থেকে অন্য একটা ফাংশন কল করবি, যেমন greeting ফাংশনের ভিতরে greetingHandler() ফাংশন কল করা হয়েছে। একবার তুই একটা প্রোগ্রাম লিখে দেখ, যেখানে প্রথম ফাংশনটি অন্য ফাংশনকে কল করবে এবং ফাংশনের আউটপুট কনসোলে দেখাবে।

function greeting(greetingHandler){
   greetingHandler()
}
function morningGreet (){

    console.log('good morning')
}

greeting(morningGreet)
