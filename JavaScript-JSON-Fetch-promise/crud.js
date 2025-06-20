// // // // const url = 'https://jsonplaceholder.typicode.com/users';
// // // // fetch(url)
// // // // .then((res) => res.json())
// // // // .then((data) => console.log(data))





// // // const url = 'https://example.com/api/user';
// // // const user = {
// // //     name:'Rakib Md', email:'rakib@mail.com'
// // // }
// // // const options = {
// // //     method: 'POST',
// // //     body: JSON.stringify(user),
// // //     headers: {
// // //         'Content-type': 'application/json'
// // //     },
// // // }

// // //       fetch(url, options)
// // //     .then(res => res.json())
// // //     .then(data => console.log(data))
// // //     .catch(error => console.error(error));


// //     const url = 'https://jsonplaceholder.typicode.com/users/1';

// //     const updatedUser = {name: 'Rakib md', email:'rizonerakib@gmail.com'};

// //     const options = {
// //         method: 'PUT',
// //         body: JSON.stringify(updatedUser),
// //         headers : {
// //             'Content-type': 'application/json', 
// //         },
// //     };

// //     fetch(url, options)
// //         .then(res => res.json())
// //         .then(data => console.log(data))

// //         .catch(error => console.error(error))



// const url =' https://jsonplaceholder.typicode.com/users/1';
// const options = {
//     method: 'DELETE',
// };

// fetch(url, options)
//      .then(res => res.json())
//       .then(data => console.log('Deleted', data))
//       .catch(error => console.error(error))












// 1️⃣ **প্রোফাইল সিঙ্গেল না মেরিড – চেইঞ্জ করলে?**
// ➡️ **PATCH** (কারণ আংশিক ডাটা আপডেট করছো)

// ---

// 2️⃣ **ডাটাবেজে নতুন ইনফো যোগ করতে কোন HTTP মেথড?**
// ➡️ **POST**

// ---

// 3️⃣ **ওয়েবসাইটে ভিডিও দেখতে গেলে কী অপারেশন হয়?**
// ➡️ **READ** (অর্থাৎ **GET**)

// ---

// 4️⃣ **CRUD কী?**
// ➡️ **C**reate, **R**ead, **U**pdate, **D**elete – ডাটার উপরে কাজ করার ৪টি মেইন ধাপ

// ---

// 5️⃣ **HTTP মেথড বা verb কী কী? কী কাজ করে?**

// | Method     | কাজ                   |
// | ---------- | --------------------- |
// | **GET**    | ডাটা পড়া (read/view) |
// | **POST**   | নতুন ডাটা তৈরি        |
// | **PUT**    | পুরো ডাটা আপডেট       |
// | **PATCH**  | আংশিক ডাটা আপডেট      |
// | **DELETE** | ডাটা মুছে ফেলা        |

// ---

// বললে CRUD-এর সাথে HTTP method mapping বা diagram দিয়েও বুঝিয়ে দিতে পারি।
// // 