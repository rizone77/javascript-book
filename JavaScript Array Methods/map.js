// // function doubleAll (numbers){
// //     const doubled = [ ];
// //     for(const num of numbers){
// //         const value = num * 2;
// //         doubled.push(value);
// //     }
// //     return doubled
// // }



// // // const numbers = [4,5,2,8,10];
// // // console.log(doubleAll(numbers))

// // const numbers = [4,5,2,8,10];
// // const result = numbers.map(num => num * 2)
// // console.log(result)


// // const numbers = [12,10,8,15,7];
// // const fiveBounus = numbers.map(num => num + 5);
// // const halves = numbers.map(num => num / 2);
// // console.log(fiveBounus);


// // const getGun = numbers.map(num => num * 2)
// // console.log(getGun)

// // const friends = ['tom', 'Jhon', 'Michel' , 'Oliver'];
// // const length = friends.map( frnd => frnd.length);
// // const firstLetters = friends.map(friend => friend[0]);
// // console.log(firstLetters)
// // console.log(length)

// // const numbers = [1,5,6,4,15];
// // const result = numbers.forEach( n => console.log(n))
// // console.log(result)

// // const players = [75, 65, 67, 71, 55, 59];
// // const selected = players.filter( p => p > 80);

// // console.log(selected)

// // const friends = ['tom','john', 'micheal ', 'oliver ', 'tim', 'josef'];
// // const oldFriends = friends.filter(friend => friend.length > 4);
// // console.log(oldFriends)

// // const players = [75, 65, 67, 60, 71, 55, 59];
// // const selected = players.find(player => player > 70);
// // console.log(selected);

// // const numbers = [10,25,30,50];
// // const index = numbers.findIndex(num => num > 27);
// // console.log(index)

// // const students = [
// // {name: 'John', age: 20},
// // {name: 'Adam', age: 22},
// // {name: 'Tom', age: 19},
// // {name: 'Lucy', age: 21},
// // {name: 'MD', age: 21}

// // ]

// // const studentInfo = students.map((student, index, array) => {
// //     return `${student.name}, ${index + 1} of ${array.length} students.`
// // });
// // console.log(studentInfo)


// একটা স্ন্যাক্সের দোকানে বিভিন্ন আইটেম আছে, যেগুলার দাম এভাবে আছে: [30, 45, 20, 60, 10]। তুই সবগুলা আইটেমের দাম 13 টাকা করে বাড়াইতে চাস। এই কাজটা map দিয়ে করে দেখ।
//  const snacks = [30, 45, 20, 60, 10];
//  const increasedPrice = snacks.map( num => num + 13);
//  console.log(increasedPrice)


// ধর, তোর একটা নামের লিস্ট আছে [ 'Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']। তুই চাস, লিস্ট থেকে 5 অক্ষরের বেশি যাদের নাম, শুধু তাদেরকে একটা আলাদা লিস্টে রাখবি। filter দিয়ে করে দেখ কীভাবে হবে।

// const players = [ 'Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']
// const fvtPlayers = players.filter( e => e.length > 5);
// console.log(fvtPlayers)



// তোর একটা number লিস্ট আছে [10, 15, 20, 25, 30, 35]। তুই এমন একটা প্রোগ্রাম লিখে দেখ, যা 20-এর ওপরে প্রথম যে সংখ্যাটা আছে, সেটা খুঁজে বের করে দিবে।

// const number = [10, 15, 20, 25, 30, 35];
// const getUpperNumber = number.find( e => e > 20);
// console.log(getUpperNumber)



// তোর কিছু হাইটের ডেটা আছে, যেমন: [65, 70, 68, 72, 68, 73]। 69 ইঞ্চির বেশি লম্বা যাদের হাইট আছে, তাদের শুধু খুঁজে বের কর filter দিয়ে।

// const data = [65, 70, 68, 72, 68, 73];
// const getHeightMorethan69 = data.filter(e => e > 69);
// console.log(getHeightMorethan69)


// তোর কাছে কিছু সংখ্যা আছে: [7, 10, 15, 20, 25, 30]। তুই চাস প্রত্যেক সংখ্যা 3 দিয়ে ভাগ করলে কত হয়, সেটা এক এক করে দেখতে। map ইউজ করে প্রোগ্রাম লিখ।

// const numbers = [7, 10, 15, 20, 25, 30];
// const getDivide = numbers.map(num => num / 3);
// console.log(getDivide)



// তোর বন্ধুদের নামের লিস্ট আবারও আছে ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp']। থার্ড অক্ষর বের করতে চাস প্রত্যেক বন্ধুর নামে। map দিয়ে কাজটা করে ফেল। 

// const friends = ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp'];
//  const oldFriends = friends.map(frnd => frnd[2])
//  console.log(oldFriends)




// ধর, তুই একটা নামের array নিয়া আছিস: ['Tom', 'Harry', 'Sam', 'Jack']। এখন এমন নাম খুঁজে বের কর, যা 'H' দিয়া শুরু হয়। find ইউজ কর।

// const names = ['Tom', 'Harry', 'Sam', 'Jack'];

// const getNameStartWithH = names.find(name => name.startsWith('J'))
// console.log(getNameStartWithH)




// তুই একটা array [1, 2, 3, 4, 5] নিয়া বসে আছিস। তুই একটা ফাংশন লিখ, যা forEach ইউজ করে প্রতিটা সংখ্যা console-এ প্রিন্ট করে।

//  const numbers = [1, 2, 3, 4, 5]
//  const result = numbers.forEach( n => console.log(n))
//  console.log(result)


// ['cow', 'goat', 'sheep', 'horse'] এই অ্যারে থেকে প্রতিটা নাম forEach দিয়ে console-এ প্রিন্ট কর।

// const animals = ['cow', 'goat', 'sheep', 'horse']
// const result = animals.forEach(e => console.log(e));
// console.log(result)



