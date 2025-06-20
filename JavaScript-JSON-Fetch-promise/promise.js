// // // const orderFood = new Promise((resolve, reject)=>{
// // //     const foodReady = true;


// // // //     if(foodReady){
// // // //         resolve('food is ready');
// // // //     }
// // // //     else{
// // // //         reject('bap er hotel bondo')
// // // //     }
// // // // })

// // // // orderFood
// // // //     .then((message)=> {
// // // //         console.log(message)
// // // //     })
// // // //     .catch((error)=> {
// // // //         console.log(error)
// // // //     })



// // // const getUsers = new Promise((resolve, reject) => {
// // //     const userAvailable = true;
// // //     const users = ['John', 'Alice', 'Bob', 'Chalie'];


// // //     if(userAvailable){
// // //         resolve(users)
// // //     }
// // //     else{
// // //         reject('no user data availabe')
// // //     }
// // // });


// // // getUsers
// // //       .than((userNames)=>{
// // //     console.log(userNames)
// // // })
// // //        .catch((error)=>{
// // //     console.log(error)

// // // })

// //   const getUsers = new Promise((resolve, reject) => {
// //     const usersAvailable = true;
// //     const users = ["John", "Alice", "Bob", "Charlie"];

// //     if (usersAvailable) {
// //       resolve(users);
// //     } else {
// //       reject("No user data available.");
// //     }
// //   });

// //   getUsers
// //     .then((userNames) => {
// //       console.log(userNames);
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //     });


// const orderFood = new Promise((resolve, reject)=>{
//     const foodReady = true;


//     if(foodReady){
//         resolve('food is ready!');
//     }
//     else{
//         reject('baap er hotel bondo');
//     }
// });

//     orderFood
//        .then((message)=>{
//         console.log(message)
//        })
//        .catch((error)=>{
//         console.log(error)
//        })



//        const getUsers = new Promise((resolve, reject)=>{
//         const userAvailable = true;
//         const users = ['john', 'alice', 'bob', 'charlie'];

//           if(userAvailable) {
//             resolve(users);
//           }
//           else{
//             reject('no user data available.')
//           }

//        });

//        getUsers 
//         .then((userNames)=>{
//             console.log(userNames);
//         })
//         .catch((error)=>{
//             console.log(error);
//         })


//         const moneyRequest = new Promise((resolve, reject)=>{
//             setTimeout(() => resolve('request submitted'), 1000);
//         });

//         const transferMoney = new Promise((resolve, reject)=>{
//             setTimeout(() => resolve('money transfrred!'), 2000);
//         });

//         const payFee = new Promise((resolve, reject)=> {
//             setTimeout(() => resolve('fee paid ') , 2000);
//         });

//         Promise.all([moneyRequest, transferMoney, payFee])
// //               .then((results)=> {
// //                 console.log(results);
// //               })
// //               .catch((error)=>{
// //                 console.log('error', error)
// //               })
    

// //               একটা প্রমিজ লিখে ফেল। এই প্রমিজ যখন resolve করবে, তখন রিটার্ন হিসেবে একটা অ্যারে পাবে, সেখানে অনেকগুলা ইউজারের নাম থাকবে। আর যদি reject করে, তখন রিটার্ন করে, কোন ইউজারের ডাটা নাই। 

//    const getUsers = new Promise((resolve, reject) => {
//          const userAvailable = true;
//          const users = ['Rakib md', 'Main', 'Uddin', 'Md Rizone'];

//          if(userAvailable){
//             resolve(users)
//          }
//          else{
//             reject('no user data founnd')
//          }
//    });

//         getUsers 
//            .then((userNames)=>{
//             console.log(userNames)
//            })
//            .catch((error)=>{
//             console.log(error)
//            })
//               তুই একটা পেমেন্ট প্রসেস করার প্রমিজ বানা। সেখানে amount নামে একটা ভেরিয়েবল থাকবে। এই ভেরিয়েবলের মান পজিটিভ হলে (0 এর বেশি হলে) প্রমিজ সফলভাবে প্রসেস হবে। আর যদি এমাউন্টের মান 0 বা তার কম হলে প্রমিজ reject হবে।

//  const getAmount = new Promise((resolve, reject)=>{
//        let amount = 10
    
//     if(amount > 0){
//        resolve(amount)
//     }
//     else{
//         reject('no amount found')
//     }
//  })

//       getAmount
//          .then((amount)=>{
//             console.log(amount)
//          })
//          .catch((error)=>{
//             console.log(error)
//          })


//               এখন sendEmail নামে একটা ফাংশন বানিয়ে ফেল। সেই ফাংশনের ভিতরে একটা প্রমিজ বানিয়ে ফেলবি এবং সেই প্রমিজকে রিটার্ন করবি। এই ফাংশন একটা প্যারামিটার নিবে। প্যারামিটার হিসেবে একটা ই-মেইল নিবি এবং প্রমিজের ওপরে সেই ফাংশনের ভিতরে validEmail-এর একটা অ্যারে থাকবে। যে ই-মেইল প্যারামিটার হিসেবে পাঠানো হয়েছে, সেটা যদি validEmail-এর অ্যারের মধ্যে থাকে, তাহলে প্রমিজ resolve করে বলে দিবে, Email from Nigerian prince। আর যদি ইমেইল এড্রেস validEmail-এর মধ্যে না পায়, তাহলে বলে দিবে, Lets Dance in the spam folder।


function sendEmail(email){
   
    return new Promise ((resolve, reject)=>{
       
          const validEmails = ["alice@example.com", "bob@example.com", "charlie@example.com"];


         if(validEmails.includes(email)){
            resolve('Email from Nigerian prince')
         }
         else{
            reject(' Lets Dance in the spam folder')
         }
    })
}

      sendEmail("alice@example.comm")
            .then((getMail)=>{
                console.log(getMail)
            })
            .catch((error)=>{
                console.log(error)
            })




