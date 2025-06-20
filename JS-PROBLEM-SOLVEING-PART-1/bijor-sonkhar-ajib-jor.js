// // // function oddAverage(numbers){
// // //      const odds = [ ];
// // //      for( const number of numbers){
      
// // //        if(number % 2 === 1){
// // //         odds.push(number);
// // //        }
       
// // //      }

// // //      if(odds.length === 0){
// // //         return 0
// // //      }

// // //      let sum = 0;
// // //      for(const number of odds){
// // //         sum += number;
// // //      }
// // //  const count = odds.length;
// // //  const avg = sum / count;
// // //  return avg
   
     
     
     
// // // }


// // // // const nums = [ 42,13,58,65,81,96,7];
// // // // console.log(oddAverage(nums))

// // // const numbers = [2,4,6,8,10];
// // // const avg = oddAverage(numbers);
// // // console.log('average of the odd numbers is:', avg)

// একটি অ্যারের জোড়সংখ্যাগুলোর গড় বা এভারেজ বের করার একটা ফাংশন লিখ এবং বিভিন্ন মান দিয়ে সেই ফাংশনকে চেক করবি, ঠিক রেজাল্ট দিচ্ছে কি না।

// // function evenAverage(numbers){
// //       let evens = [ ];

// //       for(number of numbers){
// //         if(number % 2 === 0){
// //             evens.push(number)
// //         }
// //       }

// //       let sum = 0;
// //       for(even of evens){
// //         sum += even
// //       }
// //      let size = evens.length;
// //      let avg = sum / size;
// //      return avg
// // }


// // const numbers = [22,43,62,83,11,34,54,64,68];
// // console.log(evenAverage(numbers))

// একটা অ্যারের বিজোড় সংখ্যাগুলাকে 2 দিয়ে গুণ করে একটি নতুন অ্যারে বানিয়ে নতুন অ্যারে রিটার্ন কর।

// function oddMultiply(numbers){
//         let odds = [ ]  ;
//         let oddNew = [ ]
//     for( let number of numbers){
//         if( number % 2 === 1){
//             odds.push(number)
//         }
//     }
//     for(let odd of odds){
//        let multi = odd * 2
//        oddNew.push(multi)
//     }
//     return oddNew
    
    
// }







// const numbers = [43,63,73,71,8,1,31];
// console.log(oddMultiply(numbers))


// একটি অ্যারেতে যদি বিজোড়সংখ্যা না থাকে, তবে "No odd numbers found" দেখানোর ব্যবস্থা কর। আর যদি বিজোড়সংখ্যা থাকে, তাহলে "Odd numbers found" রিটার্ন কর।

// function oddNumbers(numbers){
//     for(const number of numbers){
//         if(number % 2 !== 1){
//           return 'No odd numbers found'
//         }
//         else if( number % 2 === 1){
//             return 'Odd numbers found';
//         }
//     }
// }
// const numbers = [42,62,72,72,8,2,30];
// console.log(oddNumbers(numbers))


//  একটি অ্যারেতে বিজোড়সংখ্যাগুলোর গড় বের করে দশমিকের পরে দুই ঘর পর্যন্ত মান রিটার্ন কর। 

// function oddAvgDecimal(numbers){
//        const odds = []
//        for(const number of numbers){
//             if(number % 2 === 1){
//                 odds.push(number)
//             }
//        }
//        let sum = 0
//         for(let odd of odds){
//             sum = sum + odd
//         }
//         const size = odds.length;
//         const result = sum / size
//          return result.toFixed(2)
// }

// const numbers = [42,63,72,71,8,9,31];
// console.log((oddAvgDecimal(numbers)))


// অ্যারেতে প্রতিটি বিজোড় সংখ্যা থেকে 1 বিয়োগ করে একটি নতুন অ্যারে বানিয়ে ফেল।


function oddNumber(numbers){
    let odds = []
    let newOdd = []
      for(let number of numbers ){
         if(number % 2 === 1){
            odds.push(number)
         }
      }

      let sum = 0;
      for( odd of odds){
          sum = odd - 1
          newOdd.push(sum)
      }
      return newOdd
}




const numbers = [42,63,72,71,8,9,31];
console.log((oddNumber(numbers)))

