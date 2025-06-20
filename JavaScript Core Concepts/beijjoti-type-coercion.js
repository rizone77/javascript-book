// তুই একটা প্রোগ্রাম লিখে চেক কর, যদি true আর 1 ডাবল ইকুয়াল হয়, তবে “same” দেখাবে, আর না হলে “different” দেখাবে।  

// if(true == 1){
//     console.log('same');
// }
// else{
//     console.com('diffrent')
// }

// তুই দুইটা আলাদা object তৈরি কর, তারপর ট্রিপল ইকুয়াল দিয়ে চেক কর, তারা সমান কি না। যদি সমান না হয়, তাহলে কেন, তা চিন্তা কর।  

// const a = {};
// const b = {};
// if(a === b){
//     console.log('done')
// }
// else{
//     console.log('not good')
// }


// একটা array তৈরি কর, তারপর আরেকটা ভেরিয়েবলে ওই array টাকে reference হিসেবে রাখ। এবার ট্রিপল ইকুয়াল দিয়ে চেক কর, এই দুইটা সমান কি না।  

// const a =[]
// const newA = a;
// if(a === newA ){
//     console.log('good')
// }
// else{
//     console.log('not ')
// }

// একটা ফাংশন লিখ, যেখানে প্রথম প্যারামিটার হলো, কোনো সংখ্যা আর দ্বিতীয় প্যারামিটার হলো boolean। ফাংশনটা চেক করবে, এই দুইটা মান ডাবল ইকুয়াল কি না, আর আউটপুট দেখাবে।

// function getSome(num, bool){
//         if(num == bool){
//             console.log('good')
//         }
//         else{
//             console.log('not')
//         }
// }

// console.log(getSome(0,false))

// খালি string এবং false সমান কি না, সেটা ডাবল ইকুয়াল দিয়ে চেক করে দেখ।


const s = '';
const b = false;
const res = s == b;
// console.log(res)

// null এবং undefined-কে ট্রিপল ইকুয়াল দিয়ে তুলনা কর এবং এর আউটপুট কী হয়, তা দেখ।
// console.log(null === undefined)


// 1 == '1' চেক কর এবং জাভাস্ক্রিপ্ট কীভাবে টাইপ কনভার্সন করে, তা ব্যাখ্যা কর।

console.log(1 == '1')