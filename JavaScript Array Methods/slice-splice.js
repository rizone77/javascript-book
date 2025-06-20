// //   const pizzaSlices = ['Bread', 'Cheese', 'Veggie', 'BBQ', 'Meet'];
// // //   const selectedSlices = pizzaSlices.slice(1, 4);
// // //   const selectedSlices = pizzaSlices.slice(2)
// // //   console.log(selectedSlices)

// // const fullPizza = pizzaSlices.slice()
// // console.log(fullPizza)

// //   const movies = ['Jaws', 'Rocky', 'Alien', 'Avatar', 'Coco', 'Up', 'It'];
// //   const removed = movies.splice(2,3);
// //   console.log(removed);
// //   console.log(movies);


// //   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //   const deleted = numbers.splice(3, 3, 99, 100);
// //   console.log(deleted)
// //   console.log(numbers)

// একটা অ্যারে বানা fruits নামে, যেখানে উপাদানগুলো Apple, Banana, Cherry, Date। এবার slice ব্যবহার করে Banana থেকে Cherry পর্যন্ত বের করে আলাদা অ্যারেতে রাখ।

// const fruits = ['Apple', 'Banana', 'Cherry', 'Date']
// const selectedFruits = fruits.slice(1, 3)
// console.log(selectedFruits)


// cars নামে একটা অ্যারে আছে, যার মধ্যে Tesla, BMW, Toyota, Ford আছে। slice দিয়ে শুধু Tesla আর BMW রাখ।

const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];
const selectedCars = cars.slice(0,2)
// console.log(selectedCars)



// movieList নামে একটা অ্যারে, যেখানে Inception, Titanic, Joker, Avatar, Interstellar আছে। splice দিয়ে Joker আর Avatar বাদ দিয়ে তার জায়গায় Batman আর Superman যোগ কর।

// const movieList = [  'Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar '];
// const added = movieList.splice(2,2, 'Batman','Superman')
// console.log(added)
// console.log(movieList)

// players নামে একটা অ্যারে, যার উপাদান Messi, Ronaldo, Neymar, Mbappe। splice ব্যবহার করে Neymar বাদ দিয়ে Halland যোগ কর।

const players = [' Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
const remove = players.splice(2,1, 'Halland' );

console.log(remove)
console.log(players)






