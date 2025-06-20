// for( let i = 0; i < 3; i++){
//     let mesg = 'this is inside of loop[block'
//     // console.log(mesg)
// }

// let i = 0;
// while(i < 3){
//     console.log(i)
//     i++
// }

// একটা গ্লোবাল ভেরিয়েবল taxRate ডিক্লেয়ার কর, যার মান হবে 15 । এইখানে taxRate-এর মান বলতে ট্যাক্স রেটের পার্সেন্টেজ বুঝায়। এরপর একটা ফাংশন লিখ, যেটা একজন মানুষের ইনকামকে ইনপুট হিসেবে নিবে। তারপর ফাংশনের ভিতরে taxRate-এর পার্সেন্টেজ ইউজ করে ট্যাক্সের পরিমাণ কত হবে, সেটা রিটার্ন করবে। 

// let taxRate = 15;

// function getTaxAmount(income){
//     const gettax = income * taxRate / 100;
//     return gettax
// }

// console.log(getTaxAmount(100))



// একটা ফাংশন বানা, যেটার মধ্যে let দিয়ে insideSecret নামে ভেরিয়েবল ডিক্লেয়ার কর। এইটার মান হবে “internal secret hiding place” । ফাংশনের বাইরে থেকে insideSecret এক্সেস করতে চেষ্টা কর।


// function insider(){
//     let insideSecret = 'internal secret hiding place';
//     console.log('inside function', insideSecret)

// }

// console.log(insideSecret)


// if ব্লকের ভিতরে let দিয়ে temperature ভেরিয়েবল ডিক্লেয়ার কর এবং সেই ব্লকের বাইরে থেকে এক্সেস করার চেষ্টা কর।

// if(true){
//    let temperature = 30;
//    console.log('insideblock', temperature)
// }

//     console.log('outsideblock', temperature)



// একটা ফাংশন বানা, যার নাম হবে schoolDetails। এই ফাংশনের ভেতরে schoolName নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। এরপর schoolDetails ফাংশনের ভেতরে আরেকটা nested ফাংশন বানা, যার নাম হবে displaySchoolName। এই nested ফাংশন outer ফাংশনের schoolName ভেরিয়েবল এক্সেস করে সেটা console এ প্রিন্ট করবে। ফাংশনগুলো কল করার সময় যেন আউটপুটে স্কুলের নাম দেখা যায়। এখন বাহির থেকে schoolDetails ফাংশনকে কল কর। 

function schoolDetails(){
    let schoolName = 'Omnia';
    function displaySchoolName(){
        console.log(schoolName)
    }
    displaySchoolName()
}
schoolDetails()