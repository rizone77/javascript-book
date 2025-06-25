// class Player {
//     constructor(name, runs, wickets){
//         this.name = name;
//         this.runs = runs;
//         this.wickets = wickets;
//     }

//     addRun(run){
//      this.runs = this.runs + run;
//    }
// }


// const player1 = new Player('Tamim', 5000, 100);
// player1.addRun(200);
// player1.addRun(31);
// // console.log(player1)

// class BankAccount  {
//     constructor(owner, balance){
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//         return this.balance;
//     }

//     withdraw(amount) {
//         if(this.balance >= amount){
//             this.balance -= amount;
//             return amount;
//         }
//         else{
//             return 'Insufficient balance';
//         }
//     }
// }

// const myAccount = new BankAccount('Leo', 5000);
// myAccount.deposit(2000);
// myAccount.withdraw(500);
// // console.log(myAccount)



// হোটেলের জন্য একটা ক্লাস বানিয়ে ফেল। যেখানে হোটেলের নাম, রুমসংখ্যা এবং রাতে থাকার খরচ থাকবে। তারপর getName মেথডকে কল করলে হোটেলের নাম রিটার্ন করবে। 

class Hotel {
    constructor(name, rooms, cost){
        this.name = name;
        this.rooms = rooms;
        this.cost = cost
    }

    getname(){
        return this.name;
    }
}

const hotel1 = new Hotel('Sheraton',120, 5000);
const getHotelName = hotel1.getname();
// console.log(getHotelName)

// Employee ক্লাস বানিয়ে ফেল, যেখানে থাকবে কর্মীর নাম, পদ এবং বেতন। getSalary বললে তার স্যালারি (বেতন) কত, সেটা রিটার্ন করবে। 

class Employee {
    constructor(name,position, salary ){
        this.name = name;
        this.position= position;
        this.salary = salary;
    }
    getSalary(){
       return this.salary 
    }
}
const employee1 = new Employee('Rakib', 'Assistant Shift Manager', 2500);
const rakibSalary = employee1.getSalary();
// console.log(rakibSalary);




// একটা ক্লাস লিখে ফেল, যেটার নাম দিবি Library। এইটার ভিতরে একটা প্রোপার্টি থাকবে books নামে, আর সেই প্রোপার্টির প্রাথমিক মান হবে একটা খালি অ্যারে। এরপর addBook নামে একটা মেথড লিখবি। সে প্যারামিটার হিসেবে একটা বইয়ের নাম নিবে। তারপর books প্রোপার্টিতে সেই বই যোগ করে দিবে। আরেকটা মেথড লিখবে hasBook নামে, সে একটা প্যারামিটার নিবে। প্যারামিটারে থাকবে বইয়ের নাম। সে গিয়ে চেক করবে, যে নাম দিয়ে বই খুজঁতেছস, সেই বই যদি books প্রোপার্টিতে থাকে, তাহলে সে true রিটার্ন করবে। আর না থাকলে সে false রিটার্ন করবে। 

class Library{
    constructor(){
        this.books =[];
    }
    addBook(bookName){
    this.books.push(bookName)
    }
    hasBook(bookName){
        return this.books.includes(bookName);
    }
}

const myLibrary = new Library();

myLibrary.addBook('Javascript for beginners');
myLibrary.addBook('golpe golpe js');

// console.log(myLibrary.hasBook('Javascript for '))


// এখন একটা ShoppingCart ক্লাস লিখে ফেল, যেখানে products নামে একটা প্রোপার্টি থাকবে, আর totalPrice নামে একটা প্রোপার্টি থাকবে। যখন এই ক্লাস থেকে অবজেক্ট বানাবি, তখন products হবে একটা খালি অ্যারে, আর totalPrice হবে 0। এরপর addToCart একটা মেথড হবে। এইটাকে কল করতে গেলে দুইটা প্যারামিটার লাগবে। একটা প্যারামিটারে থাকবে প্রোডাক্টের নাম, আরেকটা প্যারামিটার হবে প্রোডাক্টের দাম। আর এই addToCart-কে কল করলে সে প্রোডাক্টের নামকে products নামক প্রোপার্টিতে যোগ করে দিবে। আর প্রোডাক্টের দাম totalPrice নামক প্রোপার্টির আগের ভ্যালুর সাথে যোগ করে দিবে। সবার শেষে getTotalPrice নামে আরেকটা মেথড লিখে ফেল, যে টোটাল প্রাইস রিটার্ন করবে।

class ShoppingCart {
    constructor(){
        this.products = [];
        this.totalPrice = 0
    }

    addToCart (productsName, price){
        this.products.push(productsName)
        this.totalPrice += price
    }

    getTotalPrice (){
        return this.totalPrice;
    }

}

const myCart = new ShoppingCart();

myCart.addToCart('ear buds', 100);
myCart.addToCart('iphone', 1200);
myCart.getTotalPrice();
console.log(myCart)

