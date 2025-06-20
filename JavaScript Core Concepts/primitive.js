
// // // let x = 5;
// // // let y = x;
// // // console.log(x,y);

// // // y = 7;
// // // console.log(x, y)

// // let p = {
// //     job: 'web developer'
// // };
// // let q = p;
// // console.log(q,p);

// // q = {
// //     job: 'backend developer'
// // };
// // console.log(q,p);

// let p = {
//     job: 'web developer'
// }
// let q = p;
// console.log(p,q)
// q.job = 'front-end developer';
// console.log(p,q)

// একটি ভ্যারিয়েবল বানা, যার নাম হবে num এবং সেটাতে 15 রাখ। আরেকটি ভ্যারিয়েবল বানা, যার নাম হবে copy এবং num-এর মান সেট কর। এবার copy-এর মান পরিবর্তন করে 25 কর। এরপর console.log-এ num এবং copy-এর মান দেখ। দুইটা কি সেইম নাকি আলাদা আলাদা। 

// let num = 15;
// let copy = num;
// copy = 25;
// console.log(num)
// console.log(copy)



// একটি অ্যারে তৈরি কর, যার নাম হবে arr এবং সেটাতে [1, 2, 3] থাকবে। সেটি আরেকটি ভ্যারিয়েবলে সেট কর। কপি করা ভ্যারিয়েবলে 88 যোগ কর। তারপর প্রথম এবং কপি করা অ্যারে কনসোল লগ করে দেখ, দুইটা কি ডিফারেন্ট আউটপুট দেখাচ্ছে? 

// let arr = [1, 2, 3];
// let copy = arr;
// copy.push(88);
// console.log(arr);
// console.log(copy)





// একটি অবজেক্ট বানা, যার নাম হবে language, যার মধ্যে দুটি প্রোপার্টি থাকবে name এবং age। name হবে JS এবং age হবে 30। language অবজেক্টটি একটি নতুন ভ্যারিয়েবল newVersion-এ সেট কর। এরপর newVersion-এ নতুন প্রোপার্টি যোগ কর, যেটার key হবে location এবং value হবে Browser। console.log ব্যবহার করে person এবং newPerson-এর মান দেখাও।

const language = {
     
    name:'Js',
    age: 30

}
const newVersion = language;
newVersion.location = 'Browser';
console.log(newVersion)
