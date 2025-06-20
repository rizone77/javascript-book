// function add(num1,num2 = 0){
//     const result = num1 + num2;
//     // console.log(num1, num2, result);
//     return result
// }

// // console.log(add(15))

// function add2(num1 = 0, num2 = 0){
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result
// }

// console.log(add2(17,19))


// function createUser (name = '', education = {}, age =0, hobbies = []){

// }

// এমন একটি ফাংশন তৈরি কর যা তিনটি সংখ্যার যোগফল বের করবে। ডিফল্ট মান হিসেবে প্রতিটি প্যারামিটারের জন্য 0 সেট কর।

function add(num1= 0, num2=0, num3=0){
     const result = num2 + num2 + num3
     return result
}

// console.log(add(10,5,10))




// তুই এমন একটি ফাংশন লিখবি, যেখানে টাকা জমা দেওয়ার সুযোগ থাকবে। যদি কোনো টাকার পরিমাণ না দেওয়া হয়, তাহলে জমা হিসেবে ডিফল্ট 50 টাকা দেখাবে।

function depositMoney(num1 = 0, num2 = 50){
    const result = num1 + num2;
    return result
}

// console.log(depositMoney())

// এমন একটি ফাংশন তৈরি কর, যেখানে নাম আর তার মাসিক আয় নিবি। যদি নাম না দেওয়া হয়, তাহলে ডিফল্ট হিসেবে anonymous ইউজ করবি। আর মাসিক আয় দেয়া না থাকলে সেখানে ডিফল্ট হিসেবে 0 ইউজ করবি। 
 function monthlyincome(name = 'anonymous' , income = 0  ){

     const result = name + income;
     return result
    

 }



//  console.log(monthlyincome(' ', 12000))


// এমন একটি ফাংশন লিখ, যা একটি সংখ্যা নেবে এবং সেটার বর্গ বের করবে। যদি সংখ্যা না দেওয়া হয়, সেটার ডিফল্ট মান 1 রাখ।

 function getSquare(num = 1){
        const result = num * num;
        return result
 }

//  console.log(getSquare())


// এমন একটি ফাংশন বানা, যেটা কোনো পণ্যের নাম ও তার মূল্য নিবে। যদি নাম না দেওয়া হয়, তাহলে "Unknown product" এবং মূল্য না থাকলে 1 সেট কর।

function productDetails( name = "Unknown product ", price= 1 ){
       const result = name + price
       return result
}
// console.log(productDetails())

// একটা ফাংশন তৈরি কর, যা তোর সব প্রিয় বইয়ের নাম অ্যারে প্যারামিটার হিসেবে নিবে। যদি কোনো প্যারামিটার না পাঠানো হয়, তাহলে ডিফল্ট একটা অ্যারে রাখবি, সেটার মধ্যে একটা মান থাকবে JS book নামে।
 
function favBook(book = ['js book']){
    const books = book;
    return books
}


const books = ['progamming', 'javascript golpe ', 'habluder jnno programing']
// console.log(favBook())

// একটি ফাংশন তৈরি কর, যেখানে একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে price এবং quantity থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট মান হিসেবে price 10 এবং quantity 1 সেট কর। ফাংশন total price রিটার্ন করবে।
  function getPrice(mobiles= {price : 10, quantity:1}){
           const getprice = mobiles.price;
           const getQuanty = mobiles.quantity;
           
           return getprice + ' ' + getQuanty
  }

//   const object = {
//   price: 120,
//   quantity : 10
  

//   }
//   console.log(getPrice())



// এমন একটি ফাংশন বানা, যেখানে একটি অ্যারে প্যারামিটার নিবে। প্রতিটি উপাদানকে 2 দিয়ে গুণ করে নতুন অ্যারে রিটার্ন করবে। যদি অ্যারে না দেওয়া হয়, ডিফল্ট হিসেবে [5, 10, 15] সেট কর।

function getMultiply( numbers =[5,10,15]){

      let multi = [];
    for(const number of numbers){
            let result = number * 2;
            multi.push(result)
        }


        return multi

        
        
        
}

const allNumbers = [2,4,3,5,8];
// console.log(getMultiply())

// একটি ফাংশন তৈরি কর, যা একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে principal এবং rate থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট principal 1000 এবং rate 5 রাখ। ফাংশন simple interest হিসাব কর, এই ফর্মুলা দিয়ে (principal * rate / 100), তাহলে রেজাল্ট রিটার্ন করবে।

function simpleInterest(interst = {principal: 1000,rate: 5 }){
         let   result = interst.principal * interst.rate / 100
         return result
}

// const object = {
//   principal: 3000,
//   rate: 15
// }
// console.log(simpleInterest(object))

// একটি ফাংশন তৈরি কর, যা একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে salary এবং tax থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট salary 50000 এবং tax 10 সেট কর। ফাংশন এর ভিতরে ট্যাক্স এর পার্সেন্ট দিয়ে ট্যাক্স এর টাকার পরিমান বের করবি তারপর স্যালারি থেকে ট্যাক্স এর টাকার পি পরিমান বিয়োগ করে রেজাল্ট রিটার্ন করবি।
function getTax(ob = { salary: 5000,tax: 10 }){
       const getsalary = ob.salary;
       const taxPercen = ob.tax;
       const grossAmount = getsalary * taxPercen / 100
       const result = getsalary - grossAmount
       return result

  }

const object = {
  salary: 2000,
  tax: 20
}
// console.log(getTax(object))




