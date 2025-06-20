// // // // // async function fetchData(){

// // // // // }

// // // // // const fetchUserData = async () => {}

// // // //     // fetch('https://jsonplaceholder.typicode.com/users/1')
// // // //     //   .then( response => response.json())
// // // //     //   .then(data => {
// // // //     //     console.log(data);
// // // //     //   })
// // // //     //   .catch(error => {
// // // //     //     console.log('Error', error)
// // // //     //   });

// // // //     async function fetchData(){
// // // //         try {
// // // //             const url = 'https://jsonplaceholder.typicode.com/users/1';
// // // //             const response = await fetch(url);
// // // //             const data = await response.json();
// // // //             console.log(data)
// // // //         }
// // // //         catch (error){
// // // //             console.error('Error:', error);
// // // //         }

// // // //     }

// // // //        console.log(fetchData())
// // // // 

// // //     const fetchUserData = async () => {
        
// // //           try {
           
// // //             fetch('https://jsonplaceholder.typicode.com/users/1')
// // //             const data = await response.json();
// // //             console.log(data)
// // //           }  catch (error) {
// // //                console.error('error:', error)
// // //           }
// // //     };

// // //     fetchUserData()

import fetch from 'node-fetch';
import { parse } from 'path';

// // const fetchUserData = async () => {
// //   try {
// //     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
// //     const data = await response.json();
// //     console.log(data);
// //   } catch (error) {
// //     console.error('error:', error);
// //   }
// // };

// // fetchUserData();


// async-await কেন ব্যবহার করা হয়?


// একটি async ফাংশন লিখে ফেল, আর এইটার নাম দিবি fetchUser। এই ফাংশনের ভিতরে এই url লিংক 'https://jsonplaceholder.typicode.com/users/2' থেকে ডাটা লোড করে ডাটাকে console লগ করবি। এ ছাড়া অবশ্যই try-catch ইউজ করবি। 

//  async  function fetchUser(){
//         try {
//            const url = 'https://jsonplaceholder.typicode.com/users/2'
//            const response = await fetch(url);
//            const data = await response.json();
//            console.log(data)
//         } catch (error){
//          console.log('error:', error)
//         }
//   }

//   fetchUser()


// Callback hell বা Pyramid of Doom কী জিনিস? এইটা কখন হয়, আর এর সমাধান কী?


// 'https://jsonplaceholder.typicode.com/posts?userId=1' থেকে তার সব পোস্ট লোড কর। দুইভাবে কর। প্রথমবার callback স্টাইলে আর পরেরবার async-await দিয়ে।

// async function fetchPost(url){
//    try{
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log('posts:', data)
//    } catch (error){
//     console.error('error:', error)
//    }
// }

// const url = 'https://jsonplaceholder.typicode.com/posts?userId=1'
// fetchPost(url)

   
// async-await দিয়ে একটা ফাংশন লিখ, যা 'https://jsonplaceholder.typicode.com/comments' থেকে কমেন্ট লোড করবে। অবশ্যই try-catch-finally ইউজ করবি এবং finally-তে একটা console.log দে, 'Request completed!'.।


// async function getComment(url){
//      try{
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data)
//      }
//      catch(error){
//         console.error('Error:', error)
//      }
//      finally{
//         console.log('Request completed!')
//      }
// }


// const url = 'https://jsonplaceholder.typicode.com/comments'
// getComment(url)


// Async-await দিয়ে এমন একটা ফাংশন লিখ, যেটা ইউজার ID প্যারামিটার হিসেবে নিবে। তারপর 'https://jsonplaceholder.typicode.com/users/ID' থেকে সেই ইউজারের ডাটা লোড করবে। ইউআরএলের মধ্যে লাস্টে টেমপ্লেট স্ট্রিং দিয়ে প্যারামিটার হিসেবে যেই ID দিবি, সেটা ডায়নামিকভাবে বসিয়ে দিবি। কোনো এরর হলে সেটাকে try-catch দিয়ে হ্যান্ডল করবি।


const fetchUserById = async (userId) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if(!response.ok){
          throw new Error('user not found')
        }
        const user =  await response.json();
        console.log(user)
    }
    catch(error){
        console.error('Error:', error)
    }
}


fetchUserById(1)









//   const fetchUserById = async (userId) => {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     if (!response.ok) {
//       throw new Error('User not found');
//     }
//     const user = await response.json();
//     console.log('User data:', user);
//   } catch (error) {
//     console.error('Error fetching user:', error.message);
//   }
// };

// Example call
// fetchUserById(3);



