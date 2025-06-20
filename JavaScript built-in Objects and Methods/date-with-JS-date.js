// const now = new Date()
// // console.log(now)

// const specificDate = new Date('2032-05-21');
// // console.log(specificDate);


// const dateTime = new Date(2032, 10,12,10,30,0);
// // console.log(dateTime)

// const  res = getFullYear(2022) ;
// console.log(res)


// new Date ব্যবহার করে বর্তমানে যে মুহূর্তে কোড চলছে, সেই সময় কনসোলে দেখাও।

const now = new Date ();
// console.log(now)

// নতুন Date অবজেক্ট বানিয়ে তার মধ্যে 2035, 6, 15, 14, 45, 30 সেট কর।

const setNewDate = new Date (2035, 6, 15, 14, 45, 30);
console.log(setNewDate)

// getFullYear ব্যবহার করে বর্তমান বছরের মান কনসোলে দেখাও।

const year = new Date().getFullYear();
// console.log(year)

// setFullYear ব্যবহার করে একটি Date অবজেক্টের বছর 2040 সেট কর।

const setyear = new Date();
setyear.setFullYear(2040)
console.log(setyear)

// getDay ব্যবহার করে 2029-02-16 তারিখের সপ্তাহের দিন এবং সে দিনের নাম বের কর।
const date = new Date('2029-02-16');
const dayNumber = date.getDay();
const days = ['sunday', 'monday', 'tuesday', 'wednesday',"Thursday", "Friday", "Saturday"];
const dayName = days[dayNumber];
console.log(`Day number : ${dayNumber}, Day name: ${dayName}`)
