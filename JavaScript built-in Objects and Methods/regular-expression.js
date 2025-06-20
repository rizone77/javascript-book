// // const pattern = /apple/;
// // const pattern = new RegExp('apple')

// // const sentence = ' i have an apple';
// // const pattern = /apple/;
// // console.log(pattern.test(sentence))

// // const sentence = 'i have an apple and another apple';
// // const newSentence = sentence.replace(/apple/g, 'banana');
// // console.log(newSentence)

// // const email = 'example@mail.com';
// // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// // console.log(emailPattern.test(email));

// const phone = '01712345678';
// const phonePattern = /^01[3-9]\d{8}$/;
// console.log(phonePattern.test(phone))


// একটা বাক্যে "I bought an orange" লেখা আছে, এখন "orange"-কে "grape" দিয়ে পরিবর্তন কর।

// const sentence = 'I bought an orange';
// const newSentence = sentence.replace(/orange/g, 'grape');
// console.log(newSentence)


// "ana" শব্দটি "I like to have apple and banana" বাক্যে আছে কি না, চেক কর।

// const sentence = 'I like to have apple and banana';
// const pattern = /ana/;
// console.log(pattern.test(sentence))

// "I am eating apple. apple is good. apple helps me a lot." এখানে "apple" শব্দটি পুরো টেক্সটের মধ্যে সব জায়গায় "JavaScript" দিয়ে পরিবর্তন কর। g ফ্ল্যাগের মাধ্যমে পুরো টেক্সটের সব চেইঞ্জ কর।

const sentence ='I am eating apple. apple is good. apple helps me a lot.';
const newSentence = sentence.replace(/apple/g, 'JavaScript');
console.log(newSentence)

