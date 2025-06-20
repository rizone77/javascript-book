// // const numbers = [4,5,7,1,2,66];
// // let sum  = 0;
// // for(const num of numbers){
// //     sum = sum + num
// // }
// // console.log(sum)

// // const numbers = [4,5,7,1,2,66];

// // const total = numbers.reduce((sum, num) => sum + num, 0);
// // // console.log(total);

// // const numbers = [32, 34, 73, 13, 22, 5];
// // const total = numbers.reduce((p,c) => p + c, 0);
// // console.log(total)

// const products = [
//     {id: 3, name: 'hp', price: 40000},
//     {id: 4, name: 'mac', price: 165000},
//     {id: 2, name: 'dell', price: 45000},
//     {id: 1, name: 'lenovo', price: 65000},
// ];

// // const getName = products.map( n => n.price);
// // console.log(getName)

// // const expensive = products.find(p => p.price < 50000);
// // console.log(expensive)

// const total = products.reduce((accumolator, current ) => accumolator + current.price, 0);
// console.log(total)




// তোর কাছে একটা array আছে: [5, 10, 15, 20, 25]। তুই একটা প্রোগ্রাম লিখে দেখ, সব সংখ্যার যোগফল কত হয় reduce দিয়ে। 

// const numbers = [5, 10, 15, 20, 25];
// const jogfol = numbers.reduce((a,b)=> a + b, 0);
// console.log(jogfol)



// তুই একটা দোকানের মালিক। তোর পণ্যগুলা: [{name: 'shampoo', price: 100}, {name: 'soap', price: 50}, {name: 'toothpaste', price: 75}]। সব পণ্যের মোট দাম বের কর reduce ব্যবহার করে।

// const products = [{name: 'shampoo', price: 100}, {name: 'soap', price: 50}, {name: 'toothpaste', price: 75}]
// const result = products.reduce((a , b) => a + b.price, 0);
// console.log(result)



// ধর, তুই একটা product-এর list বানাইছিস: [{name: 'Pen', price: 5}, {name: 'Book', price: 50}, {name: 'Bag', price: 100}]। এবার সব পণ্যের দাম যোগ কর reduce দিয়ে। 

// const products =  [{name: 'Pen', price: 5}, {name: 'Book', price: 50}, {name: 'Bag', price: 100}]
// const result = products.reduce((a,b )=> a + b.price, 0);
// console.log(result)


// reduce দিয়ে [1, 2, 3, 4, 5] সব সংখ্যার গুণফল বের কর।

// const numbers = [1, 2, 3, 4, 5]
// const gunFol = numbers.reduce((acc , curr)=> acc * curr, 1);
// console.log(gunFol)


// [10, 20, 30, 40, 50] এই অ্যারে reduce ব্যবহার করে সর্বোচ্চ মান বের কর।

// const numbers = [10, 20, 30, 40, 50]
// const man = numbers.reduce((acc, curr) => { return acc > curr ? acc : curr});
// console.log(man)


// একটা অ্যারে বানা [100, 200, 300, 400]। reduce দিয়ে সব সংখ্যার যোগফল বের কর এবং ইনিশিয়াল ভ্যালু হিসেবে 50 ব্যবহার কর।

// const numbers = [100, 200, 300, 400]
// const jogfol = numbers.reduce((acc , curr)=> acc + curr, 50);
// console.log(jogfol)





