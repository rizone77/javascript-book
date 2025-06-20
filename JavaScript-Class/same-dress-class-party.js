// const player = {
//     name: 'Dual Lal',
//     runs: 8000,
//     wickets: 108,
// };

// // class Player {
// //     constructor (name, runs, wickets){

// //     }
// // }

// // class Player{
// //     constructor(){

// //     }
// // }

// // const mushi = new Player();
// // console.log(mushi)

// class Player {
//     constructor(name, runs, wickets){
//         this.name = name;
//         this.runs = runs;
//         this.wickets = wickets;
//     }
// }

// // const tam = new Player ('Tam', 5000, 2);
// // console.log(tam);
// // const mash = new Player('Mash', 3200, 180);
// // console.log(mash);

// class FoodOrder{
//     constructor(customer, food, price) {
//         this.vendor = 'panda';
//         this.customer = customer;
//         this.food = food;
//         this.price = price;
//     }
// }

// const order1 = new FoodOrder ('Mizan', 'Pizza', 1500);
// const order2 = new FoodOrder ('Azim', 'Burger', 1000);
// // console.log(order1);
// // console.log(order2);

// console.log(order1 instanceof FoodOrder);
// console.log({age: 91} instanceof FoodOrder);


// ক্লাস আর অবজেক্টের মধ্যে ডিফারেন্স কী?

// অবশ্যই! নিচে একদম সহজভাবে বললাম:

// ---

// ### 🔸 ক্লাস (Class):

// * রেসিপি বা ছক।
// * বলে দেয়, কী কী জিনিস থাকবে।

// ### 🔸 অবজেক্ট (Object):

// * সেই রেসিপি দিয়ে বানানো খাবার।
// * মানে, বাস্তব জিনিস।

// ---

// ### 🎯 উদাহরণ:

// ```javascript
// class Dog {
//   bark() {
//     console.log("Ghew Ghew");
//   }
// }

// const myDog = new Dog(); // অবজেক্ট
// myDog.bark(); // Ghew Ghew
// ```

// ---

// ### 🧠 মনে রাখো:

// > **ক্লাস = ছক**
// > **অবজেক্ট = ছক দিয়ে বানানো জিনিস** ✅


// ক্লাস ইনস্ট্যান্স বলতে কী বুঝায়?

// অবশ্যই! নিচে একদম সহজভাবে বললাম:

// ---

// ### 🔸 ক্লাস (Class):

// * রেসিপি বা ছক।
// * বলে দেয়, কী কী জিনিস থাকবে।

// ### 🔸 অবজেক্ট (Object):

// * সেই রেসিপি দিয়ে বানানো খাবার।
// * মানে, বাস্তব জিনিস।

// ---

// ### 🎯 উদাহরণ:

// ```javascript
// class Dog {
//   bark() {
//     console.log("Ghew Ghew");
//   }
// }

// const myDog = new Dog(); // অবজেক্ট
// myDog.bark(); // Ghew Ghew
// ```

// ---

// ### 🧠 মনে রাখো:

// > **ক্লাস = ছক**
// > **অবজেক্ট = ছক দিয়ে বানানো জিনিস** ✅


// Vehicle নামে একটা class লিখ, সেখানে constructor-এর মধ্যে brand, model এবং price প্রোপার্টি রাখ। Vehicle ক্লাস থেকে দুইটা instance বানা, একটা BMW X5, যেখানে ব্র্যান্ড BMW, মডেল X5 আর price তুই তোর ইচ্ছামতো কোনো একটা দাম বসিয়ে দে। আরেকটা গাড়ির জন্য ব্র্যান্ড Tesla, মডেল Model 3 আর price 40000 ।


class Vehicle {
    constructor (brand, model, price){
          this.brand = brand;
          this.model = model;
          this.price = price;
    }
}

const bmw =  new Vehicle('BMW', 'X5 ', 30000);
const tesla = new Vehicle('Tesla', 3 , 40000);
// console.log(bmw, tesla)

// Worker নামে একটা class বানিয়ে সেখানে id, name আর hoursWorked নামে প্রোপার্টি যোগ কর। তারপর নতুন worker বানা, যার id হবে 101, name হবে Tom Cruise আর hoursWorked হবে 40।

class Worker{
    constructor(id, name, hoursWorked){
        this.id = id;
        this.name = name;
        this.hoursWorked = hoursWorked;
    }
}

const worker1 = new Worker(101, 'Tom Cruise', 40);
// console.log(worker1)


// Library নামে একটা class বানা, যেখানে constructor-এর মধ্যে তিনটা প্রোপার্টি থাকবে name, books, আর location। তারপর নতুন একটা library বানা, যার নাম Central Library, books 10000 আর location Dhaka। এরপর instanceOf দিয়ে চেক কর তোর বানানো অবজেক্টটা Library ক্লাসের ইন্সটান্স কি না।
class Library {
     constructor(name, books, location){
        this.name = name;
        this.books = books;
        this.location = location;

     }
}
const library1 = new Library('Central Library', 10000, 'Dhaka');
// console.log(library1)


// Classroom নামে একটা class বানা, যেখানে students নামে একটা প্রোপার্টি থাকবে, যা শুরুতে খালি array হবে। constructor-এর মধ্যে section আর teacher প্রোপার্টি রাখ। তারপর Classroom থেকে একটা instance বানা, যার section হবে A আর teacher হবে Mr. Plumber ।

class Classroom{
    constructor(section, teacher){
        this.section = section;
        this.teacher = teacher;
        this.students = [];
    }
}
const classroom1 = new Classroom ('A', 'Mr. Plumber');
// console.log(classroom1)


// Product নামে একটা class বানা, যেখানে constructor-এর মধ্যে name, category আর stock থাকবে। তারপর নতুন একটা product বানা, যার নাম হবে Mobile, category হবে Electronics আর stock হবে 50।

// class Product {
//     constructor(name, category, stock){
//         this.name = name;
//         this.category = category;
//         this.stock = stock;
//     }
// }

// const product1 = new Product('Mobile', 'Electronices', 50 );
// console.log(product1)


// Product নামে একটা class বানা, যেখানে constructor-এর মধ্যে name, category আর stock থাকবে। তারপর নতুন একটা product বানা, যার নাম হবে Mobile, category হবে Electronics আর stock হবে 50। যদি অবজেক্ট বানানোর সময় কেউ stock প্রোপার্টির মান না দেয়, তাহলে stock-এর ডিফল্ট মান 0 দিয়ে দিবি। 

class Product {
     constructor(name , category, stock = 0){
        this.name = name;
        this. category = category;
        this.stock = stock;
     }
}

const product1 = new Product('Mobile', 'Electronics' , 50)
console.log(product1)
