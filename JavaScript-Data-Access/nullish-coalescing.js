// let x = null;-এর ক্ষেত্রে x ??= 75 ব্যবহার করলে আউটপুট কী হবে?
  let x = null;
  let r = x ?? 75
//   console.log(r)

// একটা product অবজেক্টে stock নামের প্রোপার্টি নাই; Nullish Coalescing দিয়ে stock-এর ডিফল্ট মান 0 সেট কর।

const product = {
    name: 'Apple',
    
}
// console.log(product?.stock?? 0);


// productDetails অবজেক্টে discount ভেরিয়েবলের মান falsy কোনো কিছু হলে সেটার মান 10 সেট করার কোড লেখ।

const  productDetails = {
     name:'Apple',
     price: 10000,
     discount: false
}

// console.log(productDetails)


// Optional Chaining দিয়ে vehicle অবজেক্টে engine নামের প্রোপার্টি চেক কর এবং ডিফল্ট মান 'Engine info missing' যোগ কর।
const  vehicle = {
    name: 'Tesla',
    model: 'Y',
    engine: 'electric'
}
const getEngine = vehicle?.engine?? 'Engine info missing';
// console.log(getEngine)



// Optional Chaining দিয়ে restaurant অবজেক্টে menu নামে প্রোপার্টি রিড কর এবং সেটা না থাকলে 'Menu not available' রিটার্ন কর।
const restaurant = {
   vagan: 'vage burger',
   burger: 'beef burger',
   

}

const getMenu = restaurant?.menu ?? 'Menu is not available';
// console.log(getMenu)


// profile অবজেক্টে social অবজেক্টে twitter নামের প্রোপার্টি চেক কর Optional Chaining দিয়ে। twitter না থাকলে 'Twitter handle not available' প্রিন্ট কর।

const profile = {
    social :'facebook',

}

const getTwitter = profile?.twitter?? 'Twitter handle not available';
console.log(getTwitter)