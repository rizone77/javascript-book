// // // // const user = {
// // // //     id:1,
// // // //     name:'Rakib Md',
// // // //     job: 'Developer'
// // // // };

// // // // const userJSON = JSON.stringify(user);
// // // // // console.log(userJSON)


// // // // const shop = {
// // // //      owner: 'Alia',
// // // // address: {
// // // //       street: 'kochukhet voot er goli',
// // // //       city: 'ranbir',
// // // //       country: 'BD'
// // // //      },
// // // //      products: ['laptop', 'mic', 'monitor', 'keyboard'],
// // // //      revenue: 45000,
// // // //      isOpen: true,
// // // //      isNew: false
// // // //     };

// // // //     const shopJSON = JSON.stringify(shop);
// // // // //     console.log(shopJSON);

// // // // const shopObj = JSON.parse(shopJSON);
// // // // console.log(shopObj)

// // // // জাভাস্ক্রিপ্ট, অবজেক্ট ও JSON স্ট্রিংয়ের মধ্যে কী কী পার্থক্য?

// // // //১) JSON স্ট্রিংয়ের প্রোপার্টি নামগুলো ডাবল কোটেশনে থাকে। জাভাস্ক্রিপ্টে থাকে না ।
// // // // ২) জাভাস্ক্রিপ্টের অবজেক্টের মধ্যে কোনো প্রোপার্টির মান হিসেবে ফাংশন থাকতে পারে। যেটাকে আমরা মেথড বলে থাকি। তবে জেশনের মধ্যে ভ্যালু হিসেবে স্ট্রিং, সংখ্যা, বুলিয়ান, array, অবজেক্ট থাকতে পারে। তবে ফাংশন থাকে না। 

// // // // ৩) জাভাস্ক্রিপ্ট অবজেক্ট লেখার সময় স্ট্রিং মানের জন্য সিঙ্গেল কোটেশন ইউজ করতে পারি। তবে JSON-এর স্ট্রিং মানের জন্য ডাবল কোটেশন ইউজ করতে হয়।

// // // // একটা অবজেক্ট বানা, যেখানে একটা user থাকবে। user-এর মধ্যে name, email, address, এবং একটা order history থাকবে। সেই order history-তে অন্তত তিনটা প্রোডাক্ট থাকবে। JSON.stringify দিয়ে পুরা অবজেক্টটাকে JSON স্ট্রিংয়ে কনভার্ট কর।

// // // const user = {
// // //   name: "Rizone Rakib",
// // //   email: "rakib@example.com",
// // //   address: {
// // //     street: "Lähderanta 11 A",
// // //     city: "Espoo",
// // //     postalCode: "02720",
// // //     country: "Finland"
// // //   },
// // //   orderHistory: [
// // //     {
// // //       productName: "Wireless Mouse",
// // //       price: 25,
// // //       quantity: 1,
// // //       orderDate: "2025-05-01"
// // //     },
// // //     {
// // //       productName: "Mechanical Keyboard",
// // //       price: 85,
// // //       quantity: 1,
// // //       orderDate: "2025-05-12"
// // //     },
// // //     {
// // //       productName: "Laptop Stand",
// // //       price: 40,
// // //       quantity: 2,
// // //       orderDate: "2025-06-01"
// // //     }
// // //   ]
// // // };


// // // const userJSON = JSON.stringify(user);
// // // console.log(userJSON)






// // // // shopping cart অবজেক্ট বানা, যার মধ্যে products (array of products), total price (সবগুলা প্রোডাক্টের টোটাল প্রাইস) এবং user details (name, id, contact) থাকবে। এরপর এটাকে JSON স্ট্রিংয়ে কনভার্ট কর।
// // // const shoppingCart = {
// // //   products: [
// // //     { name: "Phone", price: 500, quantity: 1 },
// // //     { name: "Charger", price: 50, quantity: 2 },
// // //     { name: "Headphones", price: 100, quantity: 1 }
// // //   ],
// // //   totalPrice: 0,
// // //   userDetails: {
// // //     name: "Rifat",
// // //     id: "U78901",
// // //     contact: "+358123456789"
// // //   }
// // // };
// // // const shoppingCartJSON = JSON.stringify(shoppingCart);
// // // console.log(shoppingCartJSON)

// // // // একটি weather অবজেক্ট বানা, যার মধ্যে city, temperature, humidity এবং forecast (array) থাকবে। forecast array-তে অন্তত 7 দিনের সম্ভাব্য টেম্পারেচার থাকবে। এটাকে জেশনে কনভার্ট কর।
// // const weather = {
// //   city: "Helsinki",
// //   temperature: 18, // বর্তমান তাপমাত্রা
// //   humidity: 65, // শতকরা হার
// //   forecast: [17, 18, 19, 21, 20, 22, 23] // আগামী ৭ দিনের সম্ভাব্য তাপমাত্রা (°C)
// // };

// // // const weatherJSON = JSON.stringify(weather);
// // // console.log(weatherJSON)




// // // // // সিনেমার জন্য movie-এর ডিটেইল থাকবে। যেমন title, release year, actors এবং ratings। actors একটি array হবে (যেখানে actor দের নাম থাকবে) এবং ratings একটি number। তারপর JSON.stringify দিয়ে কনভার্ট কর। কনভার্ট করার পর সেটাকে আবার জাভাস্ক্রিপ্ট অবজেক্টে কনভার্ট কর। 


// // const movie = {
// //   title: "Inception",
// //   releaseYear: 2010,
// //   actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
// //   ratings: 8.8
// // };

// // const moviejson = JSON.stringify(movie);
// // console.log(moviejson);
// // const movieObj = JSON.parse(moviejson);
// // console.log(movieObj)




// // // // // এইবার project management system বানা। যেখানে অনেকগুলা প্রজেক্ট থাকবে একটা অ্যারের মধ্যে। প্রত্যেকটা প্রজেক্টের মধ্যে প্রজেক্টে নাম, project description, team members (array), deadlines এবং tasks। প্রতিটি task-এ title, assignee এবং status থাকবে। JSON.stringify দিয়ে কনভার্ট কর।


// const projectManagementSystem = {
//   projects: [
//     {
//       name: "Website Redesign",
//       description: "Redesign the company website for better UX/UI.",
//       teamMembers: ["Alice", "Bob", "Charlie"],
//       deadline: "2025-08-15",
//       tasks: [
//         { title: "Create wireframes", assignee: "Alice", status: "completed" },
//         { title: "Develop frontend", assignee: "Bob", status: "in progress" },
//         { title: "Testing", assignee: "Charlie", status: "pending" }
//       ]
//     },
//     {
//       name: "Mobile App Launch",
//       description: "Launch new mobile app for online orders.",
//       teamMembers: ["David", "Eva", "Frank"],
//       deadline: "2025-09-01",
//       tasks: [
//         { title: "Design UI", assignee: "Eva", status: "completed" },
//         { title: "Build API", assignee: "David", status: "in progress" },
//         { title: "App Store Deployment", assignee: "Frank", status: "pending" }
//       ]
//     }
//   ]
// };

// const projectManagementSystemJSON = JSON.stringify(projectManagementSystem);
// console.log(projectManagementSystemJSON);
// const projectManagementSystemOBJ = JSON.parse(projectManagementSystemJSON);
// console.log(projectManagementSystemOBJ)



// // // // লার্নিং প্লাটফর্মের জন্য courses-এর কিছু ডাটা বানা। সেখানে মিনিমাম 3টা কোর্স থাকবে। প্রত্যেকটা কোর্সে course title, instructor name, duration এবং lessons (array)। lessons array-তে lesson name, duration এবং difficulty level থাকবে। ডিফিকাল্টি লেভেল বলতে beginner, intermediate, advanced যেকোনো একটা মান হবে। JSON.stringify দিয়ে কনভার্ট কর।

const learningPlatform = {
  courses: [
    {
      courseTitle: "JavaScript for Beginners",
      instructor: "Rifat Hossain",
      duration: "6 weeks",
      lessons: [
        { lessonName: "Introduction to JavaScript", duration: "30 min", difficultyLevel: "beginner" },
        { lessonName: "Variables and Data Types", duration: "45 min", difficultyLevel: "beginner" },
        { lessonName: "Functions and Scope", duration: "1 hr", difficultyLevel: "beginner" }
      ]
    },
    {
      courseTitle: "React Development",
      instructor: "Sara Ahmed",
      duration: "8 weeks",
      lessons: [
        { lessonName: "JSX and Components", duration: "50 min", difficultyLevel: "intermediate" },
        { lessonName: "State and Props", duration: "1 hr", difficultyLevel: "intermediate" },
        { lessonName: "Hooks and Context API", duration: "1.5 hr", difficultyLevel: "advanced" }
      ]
    },
    {
      courseTitle: "Python for Data Science",
      instructor: "Dr. Mehedi Hasan",
      duration: "10 weeks",
      lessons: [
        { lessonName: "Python Basics", duration: "1 hr", difficultyLevel: "beginner" },
        { lessonName: "Data Analysis with Pandas", duration: "1.5 hr", difficultyLevel: "intermediate" },
        { lessonName: "Machine Learning Intro", duration: "2 hr", difficultyLevel: "advanced" }
      ]
    }
  ]
};

const learningPlatformJSON = JSON.stringify(learningPlatform);
console.log(learningPlatformJSON)


// // // // ইকমার্স ওয়েবসাইটে product review-এর ডাটা বানিয়ে ফেল। যেখানে প্রত্যেকটা রিভিউ অবজেক্টে product name, reviewer details (name, email), rating, and review text থাকবে। এরপর সেই অবজেক্টটিকে JSON.stringify দিয়ে কনভার্ট কর। সেই json-কে আবার জাভাস্ক্রিপ্ট অ্যারেতে কনভার্ট কর। 



const productReviews = [
  {
    productName: "Wireless Earbuds",
    reviewer: {
      name: "Tanjim Rahman",
      email: "tanjim@example.com"
    },
    rating: 4,
    reviewText: "Great sound quality and comfortable to wear. Battery life is decent too."
  },
  {
    productName: "Smart Watch Pro",
    reviewer: {
      name: "Sadia Karim",
      email: "sadia.k@example.com"
    },
    rating: 5,
    reviewText: "Excellent features! Tracks my workouts and sleep very accurately."
  },
  {
    productName: "Gaming Laptop GX15",
    reviewer: {
      name: "Fahim Hasan",
      email: "fahim.hasan@example.com"
    },
    rating: 3,
    reviewText: "Performance is good, but the fan gets very loud while gaming."
  }
];

const productReviewsJSON = JSON.stringify(productReviews);
console.log(productReviewsJSON);
const productReviewsObj = JSON.parse(productReviewsJSON);
console.log(productReviewsObj)