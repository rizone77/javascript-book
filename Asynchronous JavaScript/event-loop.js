// // // // // console.log('start');

// // // // // setTimeout(()=>{
// // // // //     console.log('timeout 1');
// // // // // }, 5000);

// // // // // setTimeout(()=>{
// // // // //     console.log('timeout 2')
// // // // // }, 500);

// // // // // // console.log('end')

// // // // ইভেন্ট লুপ কীভাবে কাজ করে, বিস্তারিত ব্যাখ্যা কর। 
// // // একটা লুপ কন্টিনিউয়াসলি চলতে থাকে, আর বারবার চেক করে, Call Stack খালি আছে কি না। যদি খালি না থাকে, তাহলে সে কলস্ট্যাকের কাজ করে। আর যদি কলস্ট্যাক খালি থাকে, তাহলে Callback Queue থেকে কাজ নিয়ে Call Stack-এ পাঠায়। আর ইভেন্ট কিউতেও যদি কাজ না থাকে, তখন আর কী করবে? চুপচাপ বসে বসে মুড়ি খায়। 
 
// // // //  call stack আর callback queue-এর মধ্যে ডিফারেন্স কী।

// // JavaScript-এ **call stack** আর **callback queue** হলো asynchronous behavior বোঝার জন্য সবচেয়ে গুরুত্বপূর্ণ দুইটি জিনিস। নিচে সহজ বাংলায় দুটার পার্থক্য ব্যাখ্যা করছি:

// // ---

// // ## 🔁 Call Stack (কল স্ট্যাক)

// // ### ✅ কী?

// // **Call Stack** হলো একটা **stack data structure**, যেখানে ফাংশনগুলো **একটা একটা করে উপরে উঠায়** আর কাজ শেষ হলে **ফেরত নিয়ে নেয়**।

// // ### 🧠 কাজ কী?

// // * JavaScript যখন কোনো ফাংশন রান করে, তখন সেটা **call stack**-এ যায়।
// // * কাজ শেষ হলে **পপ** হয়ে stack থেকে বের হয়।

// // ### 📌 উদাহরণ:

// // ```javascript
// // function one() {
// //   two();
// // }
// // function two() {
// //   console.log("Hello");
// // }
// // one();
// // ```

// // **Call Stack flow:**

// // ```
// // Global -> one() -> two() -> console.log()
// // ```

// // ---

// // ## ⏳ Callback Queue (কলব্যাক কিউ)

// // ### ✅ কী?

// // **Callback Queue** হলো যেখানে **asynchronous ফাংশনের কাজ (যেমন setTimeout, fetch)** শেষ হলে **তাদের callback গুলো জমা থাকে**, JavaScript call stack খালি হওয়ার জন্য অপেক্ষা করে।

// // ### 🧠 কাজ কী?

// // * ইভেন্ট লুপ **call stack খালি থাকলে** callback queue থেকে একে একে ফাংশন নিয়ে আসে।
// // * এর কাজ হলো **async ফাংশন গুলো পরে চালানো**।

// // ---

// // ## 🧠 ইভেন্ট লুপ (Event Loop)

// // ইভেন্ট লুপ **call stack খালি হলেই** callback queue থেকে একটা ফাংশন এনে চালায়।
// // এই কারণে asynchronous কোড পরে চলে।

// // ---

// // ## 🚀 পার্থক্য এক নজরে:

// // | বিষয়             | Call Stack                 | Callback Queue                    |
// // | ---------------- | -------------------------- | --------------------------------- |
// // | গঠন              | Stack (LIFO)               | Queue (FIFO)                      |
// // | কাজ              | ফাংশন রান করার জন্য        | async ফাংশনের callback জমিয়ে রাখা |
// // | কবে এক্সিকিউট হয় | সাথে সাথেই (synchronously) | পরে, যখন call stack খালি হয়       |
// // | কে পরিচালনা করে  | JavaScript engine          | ইভেন্ট লুপ                        |

// // ---

// // ## 📌 উদাহরণ (setTimeout দিয়ে বোঝা):

// // ```javascript
// // console.log('1');

// // setTimeout(() => {
// //   console.log('2');
// // }, 0);

// // console.log('3');
// // ```

// // **আউটপুট:**

// // ```
// // 1
// // 3
// // 2
// // ```

// // 🔍 কারণ:

// // * `console.log('1')` → call stack-এ গিয়ে সাথে সাথে চলে যায়
// // * `setTimeout(...)` → callback queue-তে যায়
// // * `console.log('3')` → সাথে সাথে চলে যায়
// // * তারপর call stack খালি → callback queue থেকে `console.log('2')` নেয়

// // ---

// // ## ✅ উপসংহার:

// // * **Call Stack** — সিঙ্ক্রোনাস কাজের জন্য
// // * **Callback Queue** — অ্যাসিঙ্ক্রোনাস কাজ জমিয়ে রাখার জন্য
// // * **Event Loop** — call stack খালি হলে callback queue থেকে কোড এনে চালায়

 


// // // //  জাভাস্ক্রিপ্ট যদি সিঙ্গেল থ্রেডেড হয়, তাহলে asynchronous কাজগুলো কীভাবে হ্যান্ডেল করে?

// ভাল প্রশ্ন! জাভাস্ক্রিপ্ট সিঙ্গেল থ্রেডেড হলেও সে খুবই স্মার্ট — সে **asynchronous কাজগুলো নিজে না করে অন্যদের দিয়ে করায়**, আর শেষে এসে রেজাল্ট নেয়। নিচে সহজভাবে ব্যাখ্যা করছি:

// ---

// ## ✅ প্রথমে বোঝা দরকার:

// **JavaScript সিঙ্গেল থ্রেডেড** মানে হচ্ছে, সে একবারে একটা কাজই করতে পারে — call stack-এ একসাথে একাধিক কাজ চলে না।

// তাহলে প্রশ্ন হলো...

// ---

// ## ❓Asynchronous কাজ (যেমন: `setTimeout`, `fetch`, `event listener`) কীভাবে চলে?

// ### 🔧 আসল কাজ করে ব্রাউজারের **Web APIs** বা Node.js এর **libuv**

// জাভাস্ক্রিপ্ট যখন async কাজ দেখে, তখন সে বলে:

// > “এই কাজ আমি পরে করব, তুমি ব্রাউজারকে দিয়ে করাও।”

// তাহলে, behind the scenes কী ঘটে?

// ---

// ## ⚙️ কাজের flow (step by step):

// ### 🧵 Step 1: JS call stack দেখে async কাজ (যেমন setTimeout)

// ```javascript
// setTimeout(() => {
//   console.log("Done");
// }, 2000);
// ```

// → **setTimeout** ব্রাউজারের **Web API**-কে দিয়ে দেয়।

// ---

// ### ⏲️ Step 2: Web API কাজ চালায়

// → Timer গুনে **2000ms**।

// → meantime, JavaScript অন্য কোড চালাতে থাকে।

// ---

// ### 📥 Step 3: Timer শেষ হলে callback যায় **Callback Queue**-তে

// ---

// ### 🔁 Step 4: **Event Loop** চেক করে

// → যদি call stack খালি থাকে, তবে callback queue থেকে callback (যেমন `console.log("Done")`) call stack-এ পাঠায়।

// ---

// ### ✅ Step 5: Call Stack callback চালায়

// → এরপর “Done” প্রিন্ট হয়।

// ---

// ## 🧠 উদাহরণ দিয়ে বুঝি:

// ```javascript
// console.log("Start");

// setTimeout(() => {
//   console.log("Async");
// }, 0);

// console.log("End");
// ```

// ### 🔎 Output:

// ```
// Start
// End
// Async
// ```

// 👉 যদিও `setTimeout(..., 0)` দিয়েছি, তাও “Async” সবার শেষে আসে। কারণ:

// * setTimeout callback **Web API**-তে যায়,
// * 0ms পর **Callback Queue**-তে ফেরে,
// * তারপর **Event Loop** দেখে call stack খালি হলে চালায়।

// ---

// ## 🔄 উপসংহার:

// | বিষয়                  | কাজ                                         |
// | --------------------- | ------------------------------------------- |
// | **JavaScript Engine** | শুধু main thread চালায় (call stack)         |
// | **Web APIs / libuv**  | async task চালায় (setTimeout, fetch, I/O)   |
// | **Callback Queue**    | async callback জমায়                         |
// | **Event Loop**        | call stack খালি হলে queue থেকে callback নেয় |

// ---

// ## ✅ এক লাইনে সারাংশ:

// **JavaScript নিজে async কাজ না করে, Web API দিয়ে করায়; ইভেন্ট লুপ-এর মাধ্যমে সেই কাজ শেষে callback নিয়ে এসে চালায়।**


