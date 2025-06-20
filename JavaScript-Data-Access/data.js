// তোর কাছে একটা array আছে [{id: 1, name: 'mukta', address: 'mirpur'}]। তুই address প্রিন্ট করতে চাস, তাহলে প্রোগ্রাম লিখে দেখ, কীভাবে address প্রিন্ট করতে হয়।

const data =  [{id: 1, name: 'mukta', address: 'mirpur'}];
// console.log(data[0].address)

// একটা প্রোগ্রাম লিখ, যেখানে const library = { name: 'city library', books: [{ id: 1, title: 'JavaScript Basics', price: 300}, { id: 2, title: 'Python Essentials', price: 500}] } আছে। এবার books array থেকে দ্বিতীয় বইয়ের price বের কর।

const library = { name: 'city library', books: [{ id: 1, title: 'JavaScript Basics', price: 300}, { id: 2, title: 'Python Essentials', price: 500}] }

// console.log(library.books[1].price)

// তোর কাছে const school = { name: 'Green High', students: [{ id: 1, name: 'Samiha'}, { id: 2, name: 'Kamal'}] } নামক একটি অবজেক্ট আছে। এবার students array থেকে প্রথম শিক্ষার্থীর name প্রিন্ট করতে তুই একটা প্রোগ্রাম লিখ।

const school = { name: 'Green High', students: [{ id: 1, name: 'Samiha'}, { id: 2, name: 'Kamal'}] }

// console.log(school.students[0].name)


// ধর, একটা অবজেক্ট আছে, const shop = { items: [{ name: 'pen', stock: 100}, { name: 'notebook', stock: 50 }] }। items array থেকে notebook-এর stock বের করতে চাস, তাহলে একটা প্রোগ্রাম লিখে বের কর।

 const shop = { items: [{ name: 'pen', stock: 100}, { name: 'notebook', stock: 50 }] }


//  console.log(shop.items[1].stock)


// const movie = { title: 'Inception', director: { name: 'Nolan', age: 50 }, rating: 8.8 } নামক অবজেক্টে তুই director-এর name প্রিন্ট করতে চাস। কীভাবে 

const movie = { title: 'Inception', director: { name: 'Nolan', age: 50 }, rating: 8.8 }

// console.log(movie.director.name)


// একটা প্রোগ্রাম লিখ, যেখানে const game = { name: 'football', players: [{ id: 1, name: 'Lionel Messi'}, { id: 2, name: 'Cristiano Ronaldo'}] } অবজেক্টে প্রথম player-এর name প্রিন্ট করবে।করবি?
 const game = { name: 'football', players: [{ id: 1, name: 'Lionel Messi'}, { id: 2, name: 'Cristiano Ronaldo'}] } 

//  console.log(game.players[0].name)



//   ধর, const vehicle = { type: 'car', features: { color: 'red', brand: { name: 'Toyota', model: 'Corolla' } } }। brand-এর name প্রিন্ট করতে তুই একটা প্রোগ্রাম লিখ।

const vehicle = { type: 'car', features: { color: 'red', brand: { name: 'Toyota', model: 'Corolla' } } };

// console.log(vehicle.features.brand.name)