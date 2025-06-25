// const tina = {
//     name: 'Tina',
//     salary: 20000,
//     getInfo(){
//         console.log(`${this.name} salary: ${this.salary}`)
//     }
// }
// tina.getInfo()

// const soma = {
//     name: 'soma',
//     salary: 15000
// }

// const somaInfo = tina.getInfo.bind(soma);
// somaInfo()

// const mona = {
//     name: 'Mona',
//     salary : 25000
// }

// tina.getInfo.call(mona)

// টিম নামে একটা অবজেক্ট বানা, যার মধ্যে name এবং players থাকবে। players-এর মধ্যে খেলোয়াড়ের সংখ্যা থাকবে। এ ছাড়া টিমের মধ্যে একটা মেথড থাকবে play নামে, যেখানে this.name এবং this.players দিয়ে একটা স্ট্রিং বানিয়ে কনসোল লগ করবি। প্রথমে team থেকে play মেথডকে কল করে আউটপুট দেখ। তারপর আরেকটা অবজেক্ট বানা tournament নামে। সেটার মধ্যেও name এবং players থাকবে। টুর্নামেন্টে কতজন খেলোয়াড় খেলতেছে, সেই সংখ্যা থাকবে। এখন .bind() ইউজ করে team অবজেক্টের play মেথড ইউজ করবি, তবে সেটার this হিসেবে টুর্নামেন্টকে ইউজ করবি। 


const team = {
    name:'Rakib',
    players: 12,
    getInfo(){
        console.log(`${this.name} players:${this.players}`)
    }
}

// team.getInfo()

const tournament = {
    name: 'Rakib',
    players: 19
}

const info = team.getInfo.bind(tournament)
// info()

// একটা car অবজেক্ট বানা, যার মধ্যে speed এবং price থাকবে। এরপর একটি মেথড drive বানা, যেখানে this.speed এবং this.price দিয়ে গাড়ির তথ্য কনসোল লগ করবে। এখন car অবজেক্টের drive ইউজ করবি .call() ব্যবহার করে। তবে this-এর মান হিসেবে একবার bike নামের একটা অবজেক্ট দিয়ে দিবি। আবার truck নামের আরেকটা অবজেক্ট দিয়ে দিবি। আর bike এবং truck এই দুই অবজেক্টই speed আর price প্রোপার্টি থাকবে। 

const car = {
    speed: 220,
    price: 12000,
    drive(){
        console.log(`${this.speed} price:${this.price}`)
    }
}

const bike = {
    speed: 100,
    price:2000,
}

const truck = {
    speed:300,
    price: 20000
}

// car.drive.call(bike);
// car.drive.call(truck);


// একটা অবজেক্ট বানা "employee" নামে, যার মধ্যে name এবং role থাকবে। employee-এর মধ্যে একটা মেথড থাকবে "details" নামে, যেখানে this.name এবং this.role দিয়ে কনসোল লগ করবে। প্রথমে employee থেকে details মেথড কল করে আউটপুট দেখ। এরপর আরেকটা অবজেক্ট বানা "manager" নামে, যার মধ্যে name এবং role থাকবে। এখন .apply() ব্যবহার করে employee-এর details মেথড manager ইউজ কর।


 const employee = {
    name: 'Rakib',
    role: 'AvP',
    details(){
        console.log(`${this.name} Role:${this.role}`)
    }
 }

 const manager = {
    name: 'Ahmed',
    role: 'VP'
 }

 employee.details.apply(manager)
// employee.details()

// একটা অবজেক্ট বানা "classroom" নামে, যার মধ্যে name এবং students থাকবে। students-এর মধ্যে অনেকগুলা student-এর নাম থাকবে। classroom-এর মধ্যে একটা মেথড থাকবে "attendance" নামে, যেখানে this.name এবং this.students-এর নামগুলো কমা দিয়ে join করে স্ট্রিং বানিয়ে কনসোল লগ করবে। প্রথমে classroom থেকে attendance মেথড কল করে আউটপুট দেখ। এরপর অন্য একটা অবজেক্ট বানা "lab" নামে, যার মধ্যে name এবং students থাকবে। এবার .bind() ব্যবহার করে classroom-এর attendance মেথড lab-এর সাথে বেঁধে দে।

// Create the classroom object
const classroom = {
  name: "Room A",
  students: ["Alice", "Bob", "Charlie"],
  attendance: function () {
    const studentList = this.students.join(", ");
    console.log(`${this.name} - Present students: ${studentList}`);
  }
};

// Call the attendance method from classroom
classroom.attendance();  
// Output: Room A - Present students: Alice, Bob, Charlie

// Create another object lab
const lab = {
  name: "Lab 101",
  students: ["David", "Eve", "Frank"]
};

// Bind classroom's attendance method to lab
const labAttendance = classroom.attendance.bind(lab);

// Call the bound method
labAttendance();  
// Output: Lab 101 - Present students: David, Eve, Frank
