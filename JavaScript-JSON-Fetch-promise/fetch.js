// //  const url = 'https://jsonplaceholder.typicode.com/users';


// //  const url = 'https://jsonplaceholder.typicode.com/users';
// // fetch(url);

// // // or
// // fetch('https://jsonplaceholder.typicode.com/users')

// // fetch ফাংশন থেকে রিটার্ন করা প্রমিজের মাধ্যমে response.json() কল করে, ডাটা কনভার্ট কেন করা হয়। 


// // fetch কেন ইউজ করা হয়। 


// // fetch আর প্রমিজের মধ্যে ডিফারেন্স কী।

// // একটা API কল লিখে ফেল। যেটা 'https://jsonplaceholder.typicode.com/users' থেকে ইউজার লিস্ট লোড করবে। 


// // fetch প্র্যাকটিস করে ফেল 'https://jsonplaceholder.typicode.com/users/1' এই ইউআরএল থেকে ডাটা লোড করার জন্য। 


// চলো খুব সহজভাবে সব প্রশ্নের উত্তর দেই:

// ---

// ### ✅ `fetch` ফাংশন থেকে `response.json()` কেন কল করি?

// `fetch()` দিয়ে ডেটা আনলে সেটা প্রথমে **Response Object** আকারে আসে।
// তাতে ডেটা **JSON format** এ থাকে, যেটা সাধারণ JavaScript object না।
// তাই `.json()` দিয়ে JSON-কে JavaScript object-এ রূপান্তর করি।

// ```js
// fetch(url)
//   .then(res => res.json()) // JSON → JS object
//   .then(data => console.log(data));
// ```

// ---

// ### ✅ `fetch` কেন ইউজ করা হয়?

// `fetch()` ইউজ করি **server থেকে data আনতে বা পাঠাতে (API call করার জন্য)**।

// উদাহরণ: ইউজার লিস্ট, পোস্ট, কমেন্ট, প্রোডাক্ট ইত্যাদি লোড করতে।

// ---

// ### ✅ `fetch()` আর `Promise` এর মধ্যে ডিফারেন্স কী?

// * `fetch()` হল একটি **built-in ফাংশন**, যা **প্রমিজ রিটার্ন করে**।
// * `Promise` হল জাভাস্ক্রিপ্টের একটি **মেকানিজম** – যা future value-এর সাথে কাজ করে।

// 🔹 মানে, `fetch()` → প্রমিজ রিটার্ন করে → তারপর `.then()` ইউজ করা হয়।

// ---

// ### ✅ একটি API কল উদাহরণ (ইউজার লিস্ট লোড):

// ```js
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => console.log(users))
//   .catch(error => console.error('Error:', error));
// ```

// ---

// ### ✅ আরেকটি API কল (একজন ইউজার লোড):

// ```js
// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(user => console.log(user))
//   .catch(error => console.error('Error:', error));
// ```

// ---

// সবগুলো উদাহরণে `.then()` এর মাধ্যমে প্রমিজ রিসলভ করে ডেটা পাওয়া যায়।

// আরো fetch বা async/await নিয়ে প্র্যাকটিস করতে চাইলে বলো, হেল্প করব! ✅
