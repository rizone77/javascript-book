// // const [first, seceond, ...rest] = [10,20,30,40,50]

// // console.log(first)
// // console.log(seceond)
// // console.log(rest)


// // const person = {name:'Rakib', age:30, city:'Dhaka',Country:'Bangladesh'};
// // const {name,city, ...details} = person;
// // console.log(name);
// // console.log(city);
// // console.log(details)

// function multiply(multiplier1,multi2 , ...numbers){
//     console.log(numbers);
// }
// multiply(2,1,2,3);
// multiply(3,4,5,6)


// একটা product অবজেক্ট আছে const product = { name: "Laptop", price: 50000, brand: "Dell" }; এইটা থেকে name বাদে বাকি প্রোপার্টিগুলা আলাদা একটা অবজেক্টে রাখ। 

// const product = { name: "Laptop", price: 50000, brand: "Dell" };
// const {name, ...rest} = product
// console.log(name)
// console.log(rest)

// const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Corp" }; এখানে title বাদে বাকি প্রোপার্টিগুলা আলাদা একটা অবজেক্টে রাখ।

// const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Corp" }; 
// const {title, ...rest} = project
// console.log(title)
// console.log(rest)


// const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React" }; এখানে language আর specialty আলাদা প্রোপার্টি হিসেবে রেখে বাকিগুলা details নামে একটা অবজেক্টে রাখ।
// const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React" };

// const {language, specialty, ...details} = programmer
// console.log(language);
// console.log(specialty)
// console.log(rest)



// একটা সংখ্যার array আছে। [10, 20, 3, 30, 300, 3000] এইটা থেকে প্রথম দুইটা উপাদান বাদে বাকিগুলা আলাদা আরেকটা array-এর মধ্যে রাখ। 

// const [first, seceond, ...rest] = [10, 20, 3, 30, 300, 3000];
// console.log(first,seceond,rest)



// একটা function লেখ, যেটা দুইটা প্যারামিটার বাদে বাকিসব প্যারামিটারকে রেস্ট অপারেটর দিয়ে ধরে রাখবে। ফাংশনটি সেই বাকি প্যারামিটারগুলোর যোগফল রিটার্ন করবে।

// function jogFol(num1,num2, ...rest){
//         let i = 0
//         for(let numbers of rest){
//             i += numbers
//         }

//         return i
// }

// console.log(jogFol(10,20,30,40))


// একটা ফাংশন লেখ, যে সব প্যারামিটারকে রেস্ট অপারেটর দিয়ে একটা array-তে রাখবে, তারপর আর্গুমেন্টগুলো যোগ করবে। ফাংশনটি array-এর উপাদানগুলোর গড় রিটার্ন করবে।

// function getAdd(...rest){
//     let i = 0
    
//    for(let numbers of rest){
//      i += numbers
//    }
//    return rest.length === 0 ? 0 : i / rest.length;
// }

// console.log(getAdd(10,20,30))