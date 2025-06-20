// // // // function mutiply(num1, num2){
// // // //     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
// // // //         return 'Please Provide a number';

// // // //     }
// // // //     const mult = num1 * num2;
// // // //     return mult;

// // // // };

// // // // const result = mutiply(5,7);
// // // // console.log(result)


// // // function fullName(first, seceond){
// // //     if(typeof first !== 'string'){
// // //         return ' first name should be string';
// // //     }
// // //     else if(typeof seceond !== 'string'){
// // //         return ' seceond name should be string';
// // //     }
// // //     const full = first + ' ' + seceond;
// // //     return full
// // // }

// // // // console.log(fullName('rahman', 5))


// // function getPrice(product){

// //     if(typeof product !== 'object'){
// //         return ' please provide an object'
// //     }
// //     const price = product.price;
// //     return price
// // }

// // const price = getPrice(35);
// // // console.log(price)


// function getSeceond(numbers){
//     if(Array.isArray(numbers) == false){
//         return ' please provide an array';

//     }
//     const seceond = numbers[1];
//     return seceond
// }

// console.log(getSeceond(45))

// একটা ফাংশন বানা, যা নামের প্রথম অক্ষর রিটার্ন করবে। ইনপুট যদি string না হয়, তখন validation ম্যাসেজ দিবে।

function getFirst(name){

    if(typeof name !== 'string'){
        return 'please provide string'
    }
    const get1stword = name[0];
    return get1stword
}

console.log(getFirst(2))


// একটা ফাংশন লিখ array-এর শেষ উপাদান দিবে। ইনপুট array না হলে ওয়ার্নিং ম্যাসেজ দিবে।

function getArry(number){

    if(Array.isArray(number) == false ){
        return ' please provide a arry'
    }
     const res = number[number.length - 1];
     return res
}


console.log(getArry(20))


// rectangle-এর area বের করার getArea ফাংশন বানা, যেখানে length আর width নাম্বার না হলে validation ম্যাসেজ দিবে। এরিয়া বের করার জন্য length আর width গুণ করে দিলেই হবে। 

function getArea(a, b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        return ' plase provide a nukmber'
    }
    const res = a * b;
    return res
}

console.log(getArea('ww', 100))