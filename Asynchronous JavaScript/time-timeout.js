// // // let num = 0;
// // // setInterval(()=>{
// // //     num++;
// // //     console.log(num);
// // // }, 1000)

// // let num = 0;
// // const intervalId = setInterval(()=>{
// //     num++;
// //     console.log(num);


// //     //stop the interval when num reaches 5
// //     if(num === 5){
// //         clearInterval(intervalId)
// //     }
// // }, 1000)


// setTimeout() দিয়ে একটা ফাংশন তৈরি কর, যেখানে 3 সেকেন্ড পর “I wasted 3 seconds of my life by looking at screen and doing nothing” প্রিন্ট হবে।

// setTimeout(()=>{
   
//     console.log('I wasted 3 seconds of my life by looking at screen and doing nothing')
// }, 3000)


// দুই সেকেন্ড পর পর একটা একটা করে সংখ্যা দেখাবে। 131 থেকে শুরু হবে এবং প্রতিবার দুই করে বাড়বে। 

// let i = 131;
// setInterval(()=>{
//     i++
//     console.log(i)
// }, 2000)

// দুই সেকেন্ড পরপর কনসোলে I am learning javascript লগ করবি এবং ৬ বার আউটপুট দেখানোর পর থেমে যাবে। 

// let i = 0;
//  const intervalId = setInterval(()=>{
//    i++;
//    console.log(i,'I am learning javascript')

//    if(i === 6){
//     clearInterval(intervalId)
//    }

// }, 2000)




// setTimeout()-এর সেকেন্ড প্যারামিটার বাদ দিলে ডিফল্ট হিসেবে কত মাইক্রোসেকেন্ড ধরে নেয়?

// 0 miliseceond