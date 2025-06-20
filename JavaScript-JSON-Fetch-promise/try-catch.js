//         // // // // // const data = '{"name":"Rahim","age":25,"isStudent":true}'

//         // // // // //  const result = JSON.parse(data)
//         // // // // //  console.log(data);

//         // // // // //  const data = 'Data stolen by data baba';
//         // // // // //  const result = JSON.parse(data);
//         // // // // //  console.log(result)

//         // // // // try {
//         // // // //     const data = 'data stolen by data baba';
//         // // // //     const result = JSON.parse(data);
//         // // // //     console.log(result)
//         // // // // }catch (error) {
//         // // // //     console.log(`Error handled gracefully.`);
//         // // // // } finally {
//         // // // //    console.log('JSON parsing attempt completed')
//         // // // // }


//         // // // try {
//         // // //     console.log('Opening the file...');
//         // // //     // read from file . may work or fail
//         // // // } catch(error){
//         // // //     console.log('error:', error.message);
//         // // // } finally{
//         // // //     console.log('closing the file')
//         // // // }


//         // //  function  getProperty(str) {
//         // //      try {
//         // //         return str.toUpperCase();
//         // //      } catch(error) {
//         // //         console.error('error eaten by virus')
//         // //      }

//         // //  }

//         // //  console.log(getProperty('my name is corona'));
//         // //  console.log(getProperty())

//         // // function performanceCleanUp(){
//         // //     try {
//         // //         console.log('Starting a process...');
//         // //     } finally {
//         // //         console.log('cleaning up resources...');
//         // //     }
//         // // }

//         // // performanceCleanUp()


//         // একটা কোড লিখ, যেখানে JSON.parse ব্যবহার করে ডাটা পার্স করার চেষ্টা করবি। ধর, JSON ডাটা হলো {product: 'Date', price: 450}। তবে সার্ভার কোনো সময় ভুল ডাটা পাঠাতে পারে, যেমন “Data corrupted” লিখে স্ট্রিং ডাটা পাঠিয়ে দিল। যদি এরর হয়, সেটা catch ব্লকে হ্যান্ডেল করবি এবং কনসোলে ম্যাসেজ দিবি "Invalid JSON format"।

//     //         function parseServerData (data){
//     //             try {
//     //                 const result = JSON.parse(data);
//     //                 console.log(result)
//     //             } catch (error){
//     //                     console.error('Invalid JSON format')
//     //             }
//     //         }

//     //    const correctData = '{"product": "Date", "price": 450}';
//     //          parseServerData(correctData);



//         // function perseServerData(data){
//         //     try{
//         //         const parsedData = JSON.parse(data);
//         //         console.log('parsed data:', parsedData);
//         //     } catch (error){
//         //         console.error('invalid JSON format')
//         //     }
//         // }

//         // console.log(perseServerData('data corrapted'))



//         // validateInput নামে একটা ফাংশন বানা, যেটা ইউজারের ইনপুট চেক করবে। ইনপুট হতে হবে email address (যেমন test@example.com)। ইনপুট ই-মেইলে যদি @ চিহ্ন না থাকে, তাহলে custom error দেখাবে "Invalid email format"।

//         // function validateInput(email){
//         //     try{
//         //         if(!email.includes('@')){
//         //          return 'invalid email format'
//         //         }

//         //         console.log('valid email:', email)

//         //     } catch (error){
//         //           console.log(error.message)
//         //     }
//         // }

//         // console.log(validateInput('rakibgmail.com'))


//         // JSON.parse ব্যবহার করে এমন একটা কোড ব্লক লিখে ফেল, যেখানে try ব্লকে ধর {role: 'CEO', weeklyHours: 1000} ডাটা আসছে। যদি ডাটা পার্স করতে পারিস এবং এরর খায়। যেটাই হোক না কেন, কনসোলে দেখাবি "Week is over"।
//         //   const jsonData = `{"role": "CEO", "weeklyHours": 1000}`;
//         //   const jsonData = 'Data corrupted';
//         // try {
            
//         //     const parseData = JSON.parse(jsonData);
//         //     console.log('Parsed Data:', parseData)
//         // }catch(error){
//         //    console.log('error parsing data:', error.message)
//         // } finally{
//         //     console.log('week is over')
//         // }



//         // stringOnlyParser ফাংশনে চেক কর। ইনপুট null বা empty string বা undefined হলে বলবি "Input must be a String."।

//         // function stringOnlyParser (input){
//         //     try{
//         //           if(input === null || input === undefined || input === '' ){
//         //             throw new Error('Input must be a String.')
//         //           }

//         //        console.log('valid string:', input)  
//         //     } catch (error){
//         //         console.log(error.message)
//         //     }

//         // }

//         // console.log(stringOnlyParser(1))


//         // try-catch-finally ব্যবহার করে এমন একটা কোড বানা, যেখানে ইউজারের একাউন্ট ডিলিট করার সিমুলেশন হবে। try ব্লকে বলবি "Deleting account", catch ব্লকে বলবি "Failed to delete account", আর finally ব্লকে বলবি "Account deletion attempt finished"।
// const fetch = require('node-fetch');
//              try{
//                 console.log('deleting account')
//              }
//              catch(error){
//                 console.error('failed to delete account')
//              }
//              finally{
//                 console.log('Account deletion attempt finished')
//              }

const fetch = require('node-fetch');

const fetchUserData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('error:', error);
  }
};

fetchUserData();


