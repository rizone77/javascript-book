
// // JIT compiled process বোঝানোর জন্য একটি ধাপের flowchart কোড লিখ।
// // অবশ্যই! নিচে **JIT (Just-In-Time) Compilation Process** বোঝানোর জন্য একটি ধাপভিত্তিক flowchart তৈরি করার জন্য `Mermaid.js` কোড দেওয়া হলো। এই কোড দিয়ে তুমি Markdown সাপোর্টেড প্ল্যাটফর্মে (যেমন GitHub, Obsidian, VS Code এর Mermaid Preview Extension) flowchart দেখতে পারবে।

// // ---

// // ### ✅ Mermaid Flowchart Code (JIT Compilation Process)

// // ````markdown
// // ```mermaid
// // graph TD
// //   A[JavaScript Code] --> B[Parsing]
// //   B --> C[AST (Abstract Syntax Tree)]
// //   C --> D[Interpreter (Baseline Compilation)]
// //   D --> E[Bytecode Execution]
// //   E --> F{Hot Code?}
// //   F -- No --> G[Continue Interpreting]
// //   F -- Yes --> H[Optimize in JIT Compiler]
// //   H --> I[Machine Code]
// //   I --> J[Execute Optimized Code]
// //   J --> K{Is it still efficient?}
// //   K -- Yes --> L[Keep Using Optimized Code]
// //   K -- No --> M[De-optimize and go back to Interpreter]
// // ```
// // ````

// // ---

// // ### 📌 এই ফ্লোচার্টে কী বোঝানো হয়েছে:

// // | ধাপ              | ব্যাখ্যা                                                           |
// // | ---------------- | ------------------------------------------------------------------ |
// // | **Parsing**      | JS কোড AST-তে রূপান্তর হয়                                          |
// // | **Interpreter**  | শুরুতে interpreter দিয়ে দ্রুত কোড চালানো হয়                        |
// // | **Hot Code**     | কোন কোড অনেকবার চলে? তাহলে সেটি "hot"                              |
// // | **JIT Compiler** | Hot কোডকে অপটিমাইজ করে মেশিন কোডে রূপান্তর করে                     |
// // | **De-optimize**  | যদি পরে দেখা যায় অপটিমাইজড কোড সঠিক না, তখন interpreter-এ ফেরত নেয় |



// জাভাস্ক্রিপ্টে Memory management এবং garbage collection প্রসেস কীভাবে কাজ করে।


// জাভাস্ক্রিপ্টে **Memory Management** এবং **Garbage Collection** স্বয়ংক্রিয়ভাবে কাজ করে, তবে এগুলো বোঝা জরুরি যাতে মেমোরি লিক (memory leak) না হয়।

// ---

// ## 🧠 ১. JavaScript Memory Management কীভাবে কাজ করে?

// JavaScript-এ মেমোরি ব্যবস্থাপনা তিন ধাপে হয়:

// ### ✅ ১. Allocate (মেমোরি বরাদ্দ দেওয়া)

// যখন তুমি ভেরিয়েবল, অবজেক্ট, অ্যারে বা ফাংশন তৈরি করো, তখন জাভাস্ক্রিপ্ট মেমোরিতে জায়গা বরাদ্দ দেয়।

// ```js
// let name = "Rakib"; // Allocate memory for string "Rakib"
// let user = { name: "Ali" }; // Allocate memory for object
// ```

// ---

// ### ✅ ২. Use (ব্যবহার)

// প্রোগ্রামের চলার সময় এই ভেরিয়েবল/অবজেক্ট ব্যবহার হয়।

// ```js
// console.log(user.name); // memory is being used
// ```

// ---

// ### ✅ ৩. Release (মেমোরি ফ্রি করা - Garbage Collection)

// যখন কোনো ভেরিয়েবল বা অবজেক্ট আর রেফারেন্সে থাকে না, তখন জাভাস্ক্রিপ্ট তাকে **"garbage"** মনে করে এবং স্বয়ংক্রিয়ভাবে মেমোরি থেকে সরিয়ে দেয়। একে বলে **Garbage Collection**।

// ---

// ## 🧹 ২. Garbage Collection কীভাবে কাজ করে?

// JavaScript-এর ইঞ্জিন (যেমন V8) গার্বেজ কালেকশন করে **"mark-and-sweep"** অ্যালগরিদম দিয়ে:

// ### 🔍 Mark-and-Sweep Algorithm:

// 1. **Mark**: জাভাস্ক্রিপ্ট সব **reachable (পৌঁছানো যায় এমন)** ভেরিয়েবল/অবজেক্ট চিহ্নিত করে।
// 2. **Sweep**: যেগুলো unreachable (কারো দ্বারা রেফারেন্স করা হচ্ছে না), সেগুলোকে মেমোরি থেকে সরিয়ে দেয়।

// ```js
// let a = { name: "A" };
// let b = a; // a এবং b দুটোই একই অবজেক্ট রেফার করে
// a = null;  // এখনো b আছে, তাই অবজেক্ট গার্বেজ হয়নি
// b = null;  // এখন আর কেউ অবজেক্টটা রেফার করছে না ⇒ Garbage
// ```

// ---

// ## ❗ মেমোরি লিক কখন হয়?

// যখন কোন অবজেক্ট ব্যবহার করা হচ্ছে না, কিন্তু রেফারেন্স এখনো থেকে গেছে, তখন সেটাকে গার্বেজ কালেক্টর সরাতে পারে না। একেই বলে **memory leak**।

// ```js
// let leaky = {};
// function leak() {
//   leaky.bigData = new Array(1000000).fill("leak"); // leaky থেকে রেফারেন্স থেকে যায়
// }
// ```

// ---

// ## ✅ উপসংহার

// | বিষয়                   | ব্যাখ্যা                                                          |
// | ---------------------- | ----------------------------------------------------------------- |
// | **Memory Allocation**  | ভেরিয়েবল/অবজেক্ট তৈরি হলেই বরাদ্দ হয়                              |
// | **Garbage Collection** | Unused রেফারেন্স গুলো মুছে ফেলে                                   |
// | **Best Practice**      | ব্যবহার শেষে বড় ডেটা `null` করে দাও বা `let`/`const` scope-এ রাখো |

// ---







