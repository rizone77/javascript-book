// // তোর দেওয়া array-এর মধ্যে যতগুলো উপাদান আছে, উপাদানের সংখ্যা জোড় নাকি বিজোড়, তা চেক কর। ফাংশন লিখে এটা করে দেখ।


// //  function getOddEven(numbers){
// //       const len = numbers.length;
// //       if(len % 2 === 0){
// //           return true
// //       }
// //       else{
// //         len % 2 === 1
// //         return false
// //       }
// //  }

// //  let numbers = [ 10,230,21,23,42,1,3,4,2]
// //  let result = getOddEven(numbers)
// //  console.log(result)

// // ধর, তোকে এমন একটা ফাংশন বানাতে হবে, যেটাতে একটা নাম পাস করলে সেটার প্রথম অক্ষরটা রিটার্ন করবে। ধর 'Raju' দিলে 'R' রিটার্ন করবে।

// // function firstWordReturn(num){
// //         for(ele of num){
// //             return ele
// //         }
// // }
// // console.log(firstWordReturn('Sodor uddin'))

// // তুই একটা ফাংশন বানাবি, যেটাতে একটা সংখ্যা দিবি। ফাংশনটা চেক করবে, সংখ্যাটা 10-এর বড় কি না। বড় হলে 10 দিয়ে ভাগ করবে। আর 10-এর ছোট হলে 10 দিয়ে গুণ করবে। তারপর রেজাল্ট রিটার্ন করবে। 

// // function checkBigOrSmall(num){
// //       if(num > 10){
// //         let sum = num /10
// //         return sum
// //       }
// //       else{
// //         num > 10;
// //         sum = num * 10
// //         return sum
// //       }
// // }

// // console.log(checkBigOrSmall(9))

// // একটা ফাংশন বানা, যেটা একটা array নিবে এবং array-এর প্রথম এবং দ্বিতীয় উপাদান যোগ করে যোগফল রিটার্ন করবে।

// // function getEvenNumberFromArray(numbers){
// //       let result =  numbers[0] + numbers[1];
// //       return result
// // }

// // const numbers = [ 12,34,56,78]
// // const result = getEvenNumberFromArray(numbers);
// // console.log(result)

// // একটা ফাংশন বানাবি, যেটা কোনো সংখ্যা n পাবে, আর সেই সংখ্যা দ্বিগুণ করে রিটার্ন করবে, যদি n পজিটিভ হয়। যদি n নেগেটিভ হয়, তাহলে তিনগুণ করে রিটার্ন করবে।

// function getPositive(n){
    
//        if(n > 0){
        
//         return n * 2
//        }
//        else{
//         n < 0
//        return n * 3
//        }
// }

// // console.log(getPositive(-11))

// // তুই এমন একটা ফাংশন লিখবি, যা দুইটা নাম নিবে, প্রথম নাম আর দ্বিতীয় নাম। যদি প্রথম নামের দৈর্ঘ্য দ্বিতীয় নামের দৈর্ঘ্যের চেয়ে বেশি হয়, তাহলে true রিটার্ন করবে, না হলে false।

// function getVertical(num1, num2){
//     if(num1 > num2){
//         return true
//     }
//     else{
//         num1 < num2
//         return false
//     }
// }

// // console.log(getVertical(23,22))

// // তুই এমন একটি ফাংশন লিখ, যা দুইটি সংখ্যা নিবে এবং তাদের গুণফল রিটার্ন করবে। তবে, গুণফল 100-এর বেশি হলে শুধু তার অর্ধেক রিটার্ন করবে।


// function getMultiply(num1, num2){
//         let gun = num1 * num2;
//         let gunfol = gun;
//        if( gunfol < 100 ){
//         return gunfol
//        }
//        else{
//         gunfol > 100
//         return gunfol / 2
//        }
      
       
         
// }

// console.log(getMultiply(10, 10))


for( let i = 0; i < 5; i++){
    if(i < 1){
        console.log('*')
    }

    else   if(i < 2){
        console.log('**')
    }
   else  if(i < 3){
     
    console.log('***')
    }
    else  if(i < 4){
        console.log('****')
    }
    else {
        i < 5
        console.log( '*****')
    }
}

let i = 0;
while(i < 5){
    
    if(i < 1){
        console.log('*')
    }
    else if(i < 2){
        console.log('**')
    }
    else if(i < 3){
        console.log('***')
    }
    else if(i < 4){
        console.log('****')
    }
    else if (i <= 5){
        console.log('*****')
    }
    i++
}
