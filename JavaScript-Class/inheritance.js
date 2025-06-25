// ইনহেরিটেন্স কী জিনিস? এইটা কেন দরকার?

// প্যারেন্ট আর চাইল্ড ক্লাসের মধ্যে সম্পর্ক কীভাবে তৈরি হয়। 

// বেশ কয়েক রকমের যানবাহনের কথা চিন্তা কর। Bus, Truck আর bike। প্রথমে এদের জন্য তোর ইচ্ছামতো (চিন্তা করে করে ) মিনিমাম 5টা করে প্রোপার্টি যোগ কর। তারপর দেখ, কোন কোন প্রোপার্টি কমন, আর কোন কোন প্রোপার্টি আনকমন। তারপর কমন প্রোপার্টিগুলা নিয়ে একটা প্যারেন্ট ক্লাস বানিয়ে ফেল। এরপর প্যারেন্ট ক্লাসকে extends করে চাইল্ড ক্লাসের সাথে রিলেশন বিল্ড কর। তারপর সবগুলা চাইল্ড ক্লাস থেকে অবজেক্ট বানিয়ে চেক করে দেখ, কমন এবং আনকমন সব ধরনের প্রোপার্টি পাচ্ছস কি না। 
class Vehicles {
    constructor(brand, currentSpeed) {
       this.brand = brand;
       this.currentSpeed = currentSpeed;
    }
}

class Bus extends Vehicles {
    constructor(brand, currentSpeed, keyboardlight){
        super(brand, currentSpeed);
        this.keyboardlight = keyboardlight;
    }
}

const myBus = new Bus ('Volvo', 400, true);
// console.log(myBus.brand);
// console.log(myBus.currentSpeed);
// console.log(myBus.keyboardlight)



// Animal, Bird আর Fish নিয়ে চিন্তা কর। প্রত্যেকের জন্য মিনিমাম 5টা করে প্রোপার্টি বানিয়ে দেখ, কোনগুলো কমন। কমন প্রোপার্টিগুলো Parent Class-এ রাখ, আর আনকমনগুলো Child Class-এ। সবগুলো ক্লাস থেকে অবজেক্ট তৈরি করে প্রোপার্টিগুলো ঠিকঠাক কাজ করছে কি না, চেক কর।
class Creature {
    constructor(name, age){
        this.bird = name;
        this.fish = age;
    }
}

class Animal extends Creature{
    constructor( name, age, keyboardlight) {
        super(name, age);
        this.keyboardlight = keyboardlight;
    }
}

const myAnimal = new Animal ('doyel', 4 , true);
console.log(myAnimal.name);
console.log(myAnimal.age);
console.log(myAnimal.keyboardlight)



// Furniture ক্লাস বানিয়ে তার চাইল্ড হিসেবে Chair আর Table তৈরি কর। কমন প্রোপার্টিগুলো Parent-এ রাখ। তারপর Chair আর Table-এর আলাদা আলাদা প্রোপার্টি আর মেথড যোগ কর।

// পোষা প্রাণীদের নিয়ে কাজ কর। Dog, Cat আর Parrot-এর আলাদা ক্লাস বানা। আগে Parent ক্লাস বানিয়ে কমন ফিচারগুলো সেখান থেকে ইনহেরিট কর।

// DRY প্রিন্সিপাল উদাহরণসহ ব্যাখ্যা কর। 