// const student = {
//     name: 'Learner',
//     getThis(){
//         console.log( this)
//     }
// }

// // student.getThis()


// const teacher = {
//     name: 'Rakib Md'
// }

// teacher.getThis = student.getThis;

// teacher.getThis();


// ল্যাপটপ নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। সেটার মধ্যে ব্র্যান্ড নামে একটা প্রোপার্টি থাকবে, যার মান হবে dell এবং getBrand নামে একটা মেথড থাকবে, যেটা ল্যাপটপের brand-কে কনসোল লগ করবে। এখন মোবাইল নামে একটা অবজেক্ট ডিক্লেয়ার কর। মোবাইলের মধ্যে ব্র্যান্ড থাকবে। তারপর ল্যাপটপ অবজেক্টের getBrand মেথডটি মোবাইলে এনে ইউজ কর। 

const laptop = {
    brand: ' dell',
    getBrand(){
        console.log( this)
    }

}
 const mobile = {
    brand : 'Apple'
 }
 mobile.getBrand = laptop.getBrand;
 mobile.getBrand()


// this কীভাবে নির্ধারিত হয়? কী কী context-এ এটা পরিবর্তন হয়?


// manager নামে একটি অবজেক্ট তৈরি কর যার মধ্যে assignWork নামে মেথড থাকবে। সেই assignWork মেথড এর ভিতরের manager এর tasks নামক প্রপার্টি (একটা অ্যারে) সেটাতে নতুন টাস্ক এর নাম যোগ করবে। এই কোড লিখে আউটপুট চেক কর। আর এই মেথড এর ভিতরে this বলতে কাকে বুঝায় সেটা মেথডের উপরে কমেন্ট করে লিখ। 

const manager = {
    name: 'Rakib MD',
    task : [],
    assignWork (){
      
      console.log(this)
    }
}
const asistantmanager = {
    name: 'rizone'
}

asistantmanager.assignWork = manager.assignWork;
asistantmanager.assignWork()
