// // function inchToFeet(inch){
// //     let feetFraction = inch / 12;
// //     let feetNumber = parseInt(feetFraction);
    
// //     let remainingInch = inch % 12;
// //     let result = feetNumber + 'ft ' + remainingInch + 'inch ';
// //     return result
// // }


// // console.log(inchToFeet(75))

// // function mileToKilometer(mile){
// //         const kilo = mile * 1.60934;
       
// //         return kilo

// // }

// // console.log(mileToKilometer(100))

// // function kiloToMile(kilo){
// //     const mile = kilo * 0.621371;
// //     return mile
// // }

// // console.log(kiloToMile(100))

// তুই জানস, 1760 গজে একমাইল। তাহলে একটা ফাংশন লিখে ফেল, যাতে বের করতে পারিস, 13 মাইলে কত গজ।

//  function mileToGoz(mile){
//     const goz = mile * 1760;
//     return goz
//  }
// console.log(mileToGoz(13))


// শুনতে কঠিন, কিন্তু চিন্তা করলে সহজ একটা বিষয় হচ্ছে, 1 কিলোওয়াট ঘণ্টা মানে 860 কিলো ক্যালরি। তাহলে একটা ফাংশন লিখে বের কর। যেটাতে যেকোনো কিলোওয়াট ঘণ্টা দিলে সে সেটাকে কিলো ক্যালরিতে কনভার্ট করে দিবে। 

// function kiloWattToKiloKalori(kiloWatt){
//        const kiloKelori = kiloWatt * 860
//        return kiloKelori
// }

// console.log(kiloWattToKiloKalori(100))


// ঘণ্টাকে সেকেন্ডে কনভার্ট করতে একটি ফাংশন বানা। এক ঘণ্টাতে কত মিনিট বা এক মিনিটে কত সেকেন্ড। সেটা আমি বলে দিচ্ছি না। তুই চিন্তা করে বের কর এবং আমাকে একটা ফাংশন লিখে দে, যেটা ঘণ্টা দিলে আমাকে সেকেন্ডে কনভার্ট করে দিবে।

// function hourToSecond(hour){
//     const seceond = hour * 3600;
//     return seceond;
// }

// console.log(hourToSecond())



// সেন্টিমিটারকে মিটারে কনভার্ট করার জন্য একটি ফাংশন তৈরি কর। তারপর বিভিন্ন মান দিয়ে সেই ফাংশনকে টেষ্টা কর। আর তুই তো জানস, 1 মিটার = 100 সেন্টিমিটার। 


// function sentimeterToMeter(senti){
//     const meter = senti / 100
//     return meter
// }

// console.log(sentimeterToMeter(1000))


// ইঞ্চিকে সেন্টিমিটারে রূপান্তর করার ফাংশন লিখ। 1 ইঞ্চি = 2.54 সেন্টিমিটার। 

// function inchToCm(inch){
//     const cm = inch * 2.54
//      return cm
// }

// console.log(inchToCm(100))

// যদি 1 পাউন্ড = 0.453 কিলোগ্রাম হলে পাউন্ড থেকে কিলোগ্রামে কনভার্ট করার একটা ফাংশন লিখে ফেল। 

// function poundToKilo(pound){
//       const kilo = pound * 0.453
//       return kilo
// }

// console.log(poundToKilo(10))



// গজকে মিটারে কনভার্ট করার জন্য একটি ফাংশন তৈরি কর। 1 গজ = 0.91 মিটার


// function gozToMeter(goz){
//     const meter =  goz * 0.9144;
//     return meter
// }

// console.log(gozToMeter(10))