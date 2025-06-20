// সাতটা সংখ্যা 45, 11, 89, 23, 56, -12, -56-এর মধ্যে সবচেয়ে ছোট সংখ্যা বের কর।
const min = Math.min(45, 11, 89, 23, 56, -12, -56)
// console.log(min)

// তিনটা সংখ্যা 21, 35, 67-এর মধ্যে সবচেয়ে বড় সংখ্যাটা বের কর।

const max = Math.max(21, 35, 67)
// console.log(max)

// 7.6 এবং 7.2-কে তার নিকটবর্তী পূর্ণসংখ্যায় রূপান্তর কর।

// console.log(Math.round(7.6))
// console.log(Math.floor(7.2))


// 9.8 এবং 5.3-কে তার নিকটবর্তী ছোট পূর্ণসংখ্যায় রূপান্তর কর।

// console.log(Math.floor(9.8))

// 3.1 এবং 6.9-কে তার নিকটবর্তী বড় পূর্ণসংখ্যায় রূপান্তর কর।

// console.log(Math.ceil(3.1))

// Math.abs ব্যবহার করে -34-এর absolute মান বের কর।

//   console.log(Math.abs(-34))

// একটি ফাংশন লিখ, যেটা একটা দশমিকওয়ালা সংখ্যা ইনপুট প্যারামিটার হিসেবে নিবে। তারপর সেই ফাংশনের ভিতরে সেই সংখ্যাটিকে Math.round, Math.floor এবং Math.ceil ব্যবহার করে কনসোল লগ কর।

function convert(num){
     console.log(Math.round(num));
     console.log(Math.floor(num));
     console.log(Math.ceil(num));
}

console.log(convert(4.4))