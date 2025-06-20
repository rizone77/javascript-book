// পিতা ও পুত্রের বয়সের সমষ্টি বের করার একটা ফাংশন লিখ। 

// function getAgeFatherAndSon(a, b){
//     console.log('Father Age:-', a, 'Son Age:-', b)
//      let totalAge = a + b;
//      return totalAge
// }
// console.log( 'total age:-' ,getAgeFatherAndSon(12,23))



// তোর এক বন্ধু তোকে বলল ক্যালকুলেটর বানাতে, কিন্তু ক্যালকুলেটরে শুধু যোগ বা বিয়োগ করার অপশন থাকলে হবে না। একটা ফাংশন লিখ, যেখানে দুইটা সংখ্যার গুণ বের করে দেখাস। যেমন, যদি 20 আর 15 পাঠালে আউটপুট হবে 300।



// function myCalculator(a , b){
//     let result = a * b;
//     return result
// }
// console.log(myCalculator(20, 15))


// একটা ফাংশন লিখ, যেটা তিনটা সাবজেক্টের পরীক্ষার মার্কসের সমষ্টি তোকে দিবে।

// function allMarks(a, b, c){
//        let result = a+b+c;
//        return result;
// }

// console.log(allMarks(60,40,50))

// function overallMarks(a,b,c){
//         const result = a+ b+ c;
//         return result
// }

// console.log(overallMarks(40,40,40))


// বয়স বের করার একটা ফাংশন লিখ। যেটাকে তুই তোর কোন বছর জন্ম, সেটা বলবি। তারপর ফাংশনের ভিতরে এই বছর থেকে তোর জন্মসাল বিয়োগ করলে তোকে বলবে, তুই কত বছর বুইড়া হইছস (মানে তোর বয়স কত হইছে)।

// function getAgeByBirthYear(num){
//     let result = 2025 - num ;
//     return result;
// }
// console.log(getAgeByBirthYear(2004))

// তুই একটা দোকানে গেছিস, যেখানে প্রতিটা লাউ কেনার জন্য 35 টাকা লাগবে। এখন একটা ফাংশন লিখ, যা প্যারামিটার হিসেবে নিবে, তুই লাউয়ের জন্য কত টাকা দিতে চাস। তারপর ভাগ করে বলবে, তুই কয়টা লাউ কিনতে পারবি।

// function lawKina(number){
//      let result = number / 35;
//      result.toFixed(1)
//      return result
// }
// console.log(lawKina(170))

// একটি ফাংশন লিখ, যেখানে চারটা সংখ্যার গড় বের করবে।
   
// function getAvarage(number){
//       let size = number.length;
//       let avg = 0;
//       for(num of number ){
//         avg = avg + num / size
        
//       }
//       return avg
// }

// console.log(getAvarage([12,23,34,45]))


// একজন দোকানদার প্রত্যেকটা আইটেমে 250 টাকা লাভ করে। একটা ফাংশন লিখ, যেখানে কোনো একটা জিনিসের কেনা দাম দিবি, তাহলে সে বিক্রির দাম (selling price) দিবে। 

// function sellingPrice(number){
//      const result = number + 250
//      return result
// }

// console.log(sellingPrice(250))

// একটি ফাংশন লিখ, তারপর সেই ফাংশনকে তোর জন্মসাল প্যারামিটার হিসেবে দিবি। তারপর সে বলে দিবে, কোন বছর তোর বয়স 100 বছর হবে।

// function whenYouGet100YearsOld(num){
//     const result = num + 100;
//     return result
// }


// console.log(whenYouGet100YearsOld(1994))

// একটি ফাংশন লিখ, যেখানে প্যারামিটার হিসেবে দিবি, প্রতিদিন তুই কয় ঘণ্টা সময় মোবাইল ফোন ইউজ করস। তারপর সেই ফাংশন বের করবে, মাসে তুই কত ঘণ্টা সময় মোবাইল ফোন ইউজ করস। ধরে নে, এক মাসে 30 দিন হয়।

function getMobileUsesByOneMonth(num){
    const result = num * 30;
    return result;
}

console.log(getMobileUsesByOneMonth(7.5))