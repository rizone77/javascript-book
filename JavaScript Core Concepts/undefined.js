
// তুই একটা ভ্যারিয়েবল ডিক্লেয়ার করলি, কিন্তু কোনো ভ্যালু দিলি না। এবার সেটা কনসোলে প্রিন্ট কর আর দেখ, কী আসে।

// let number ;
// console.log(number)

// তোর একটা ফাংশন আছে, যা দুইটা নাম্বার যোগ করে, কিন্তু কোনো রিটার্ন স্টেটমেন্ট নেই। এখন ওই ফাংশনটাকে কল করে কনসোলে দেখ, রিটার্ন কী আসছে।

// function add(a,b){
//     const result = a+ b;

// }

// console.log(add(10,20))

// [10, 20, 30, 40, 50]। তারপর এর মধ্যে থেকে 2 ইনডেক্স (যেটাতে 30 আছে) এলিমেন্টটি ডিলিট কর। পরে ঐ ইনডেক্সে গিয়ে দেখ, কীরকম আউটপুট আসে।

// const numbers =  [10, 20, 30, 40, 50]
//  delete numbers[2]
// console.log(numbers)

// যোগ করার একটা ফাংশন লিখে ফেলেছিস function sum(a, b, c) { }। আর এই ফাংশনকে কল করছস sum(5, 10); এইভাবে। এইবার ফাংশনের ভিতরে কনসোল লগ করে দেখ, থার্ড প্যারামিটারের মান কী। কেন সেটা হয়েছে। 

function sum(a, b, c) { 

    const result = a + b+ c
    console.log(c)
    
}


console.log(sum(5, 10))

// const student = { name: "serious sojib", roll: 1, masks: 99 }; এই অবজেক্ট থেকে student-এর marks পেতে গেলে কত পাবি। সেটা কেন পাচ্ছস?

const student = { name: "serious sojib", roll: 1, masks: 99 };
console.log(student.marks)
