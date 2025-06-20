// const name = 'Rakib Md';
// // const age = 30;

// // console.log('Name: ' + name + ',Age: ' + age);
// // console.log(`Name: ${name}, Age: ${age}`)


// // const a = 10;
// // const b = 20;

// // const math = `The sum of ${a} and ${b} is ${a+b}`;
// // console.log(math);

// const email = `
// John Cena
// cena naki ochena
// mair kaile bachena

// `
// // console.log(email)

// const getName = function(){
//     return 'Taspia'
// }
// const message = `na bolle bappy, ase amr ${getName()} !`;
// // console.log(message)

// const age = 10;
// const status = `You are ${age >= 18 ? 'adult' : 'minor'}`;
// // console.log(status)

// const user = {name: 'Rakib',age: 25};
// const info = `Name: ${user.name}, Age: ${user.age}`;
// // console.log(info)

// // const fruits = ['Apple', 'Banana', 'Mango'];
// // const seceond = `My Seceond favorite  is: ${fruits[1]}`;
// // const list = `My Seceond favorite are ${fruits.join(', ')}`
// // // console.log(list)

// const title = 'welcome'
// const body = 'This is a dynamic template';
// const html = `<div>
// <h1> ${title} </h1>
// <p> ${body} </p>

// </div>
// `
// // console.log(html)

// const radious = 5;
// const area = `Circle area is ${Math.PI * radious ** 2}.`
// // console.log(area)

// const greet = function(name){
//     return `Hello, ${name}`;
// };
// // console.log(greet('Nadia'))


// // টেমপ্লেট স্ট্রিংয়ের মাধ্যমে দুটি সংখ্যার বিয়োগফল দেখা। যেমন: The difference between 100 and 20 is 80।

// // const a = 100
// // const b = 20

// // const result = `The Difference between ${a} and ${b} is ${a-b}`
// // console.log(result)

// // একটি অবজেক্ট employee তৈরি কর, যেখানে name, age এবং salary থাকবে। টেমপ্লেট স্ট্রিং দিয়ে তার নাম, বয়স এবং স্যালারি দেখা।

// const employee = {
// name: 'Rakib Md',
// age: 30,
// salary: 20000

// }
// const display = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;

// // console.log(display)


// // fruits নামে একটি অ্যারে তৈরি কর। টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা যে, তোর পছন্দের তৃতীয় ফলটি কী।

// const fruits = ['Apple', 'Banana', 'Mango', 'Staberry', 'Mustikka'];
// const favFruits = `My Favorite Fruits is ${fruits[2]}`
// // console.log(favFruits)

// // const a = 50 এবং const b = 10 থাকলে টেমপ্লেট স্ট্রিং দিয়ে দেখা The division of a and b is 5।
 
// // const a = 50 
// // const b = 10

// // const division = `The Division of a  and b is ${a/b}`
// // console.log(division)

// // const person = { firstName: "Amit", lastName: "Kumar" }; টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা Full Name: Amit Kumar।

// //  const person = { firstName: "Amit", lastName: "Kumar" };
// //  const fullname = `
// //      Full Name: ${person.firstName } ${person.lastName}

// //  `
// //  console.log(fullname)



// // একটি অ্যারে animals = ["Cat", "Dog", "Elephant"] তৈরি কর এবং টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা My favorite animals are Cat, Dog, Elephant।

// // animals = ["Cat", "Dog", "Elephant"];
// // const fav = `My favorite animals are ${animals.join(', ')} `;
// // console.log(fav)


// তোর কাছে স্টুডেন্ট নামে একটা অবজেক্ট আছে, সেই স্ট্রিংয়ের মধ্যে তার নাম আছে, তার বয়স আছে এবং তার তিনটা সাবজেক্টের মার্কস দেয়া আছে results নামক একটা প্রোপার্টির মধ্যে। যেটার মান একটা অ্যারে। এখন তোর কাজ হবে একটা টেমপ্লেট স্ট্রিং দিয়ে একটা স্ট্রিংয়ের মধ্যে এই স্টুডেন্টের নাম, তার তিনটা সাবজেক্টের রেজাল্টের গড় দেখানো। গড় দেখানোর জন্য তিনটা সাবজেক্টের মান যোগ করে তিন দিয়ে ভাগ করবি। 

const students = {
      name: 'Rakib Md',
      age: 24,
      result : [85, 90, 78]

  }


  const details = `Name:${students.name} ,  Age:${students.age} Avarage :${(students.result[0]+ students.result[1] + students.result[2]) / students.result.length}`

    console.log(details)

  




// const student = {
// name: 'Rakib Md Rizone Ahmed',
// age: 30,
// results: [85, 90, 78]

// }
// // const avarage = (student.results[0]+student.results[1]+ student.results[2]) / 3
// const details = ` Name: ${student.name} The avage marks ${(student.results[0]+student.results[1]+ student.results[2]) / 3} `
// console.log(details)



