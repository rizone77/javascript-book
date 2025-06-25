// const role = 'moderator';

// switch (role){
//     case 'admin':
//     console.log('full control');
//     break;
//     case 'moderator':
//         console.log('manage post');
//         break;
//     case ' member':
//         console.log('post and comment');
//         break;
//         case ' guest':
//             console.log('view only');
//             break;
//         default :
//         console.log('invalid role')    
// }


// একটা mobile নামে ভেরিয়েবল থাকবে। সেখানে brand-এর নাম থাকবে। ব্র্যান্ডের ওপর নির্ভর করে switch দিয়ে ডিফারেন্ট case-এ কনসোল লগ করবি কোন দেশ থেকে সেই ব্র্যান্ড এসেছে। ব্র্যান্ড Apple হলে USA, Samsung হলে Korea, Xiaomi হলে China, আর অন্য কিছু হলে Unknown Source লিখবি।

const mobile = 'apple';

switch (mobile) {
    case 'apple':
        console.log('usa');
        break;

    case 'samsung':
        console.log('korea') ;
        break;
    case 'xaomi':
        console.log('china');
        break;
        default:
            console.log('unknown sourse')       
}


// browser নামে একটা ভেরিয়েবল থাকবে। সেটার মান Chrome, Brave, Safari বা অন্য কিছু হতে পারে। কনসোল লগ করবে "Best for developers", যদি Chrome হয়, "Privacy focused", যদি Brave হয়, "Apple users' choice", যদি Safari হয়। অন্য কিছু হলে দেখাবে "Unsupported browser"। এইটা কিন্তু প্রথমে if-else দিয়ে করবি। তারপর switch দিয়ে করবি।

const browser = 'chrome';

switch (browser){
    case 'chrome':
        console.log('Best for developers');
        break;
     case 'brave':
        console.log('Privacy focused')  ;
        break;
     case 'safari':
        console.log(' Apple users choice') ;
        default:
            console.log('Unsupported browser')   
}


// এইবার paymentMethod নামে ভেরিয়েবল থাকবে। সেটার মান cash, credit, debit বা অন্য কিছু হতে পারে। paymentMethod অনুযায়ী কনসোল লগ করবি। cash হলে দেখাবি "Pay with cash", credit হলে দেখাবি "Pay with credit card", debit হলে দেখাবি "Pay with debit card", অন্য কিছু হলে দেখাবি "Invalid payment method"। এইটা switch দিয়ে করবি। 

const paymentMethod = 'cash';
switch (paymentMethod){
    case 'cash':
        console.log('pay with cash');
        break;
    case 'credit':
        console.log('pay with credit card')  ;
        break
     case 'debit':
        console.log('pay with debit card')     
        break;
        default:
            console.log('Invalid payment method')
}

// একটা membership নামে ভেরিয়েবল থাকবে। সেখানে free, silver, gold বা platinum-এর মান থাকবে। membership অনুযায়ী দেখাবি ইউজারের পারমিশন। যেমন, free হলে "Access limited content", silver হলে "Access most content", gold হলে "Access premium content", platinum হলে "Full access"। এইটা শুধু if-else দিয়ে করবি। 

const membership = 'silver';

switch (membership){
    case 'free':
        console.log('access limited content');
        break;
        case 'silver':
            console.log('access premium contetnt')
    case 'gold':
        console.log('access most content')    ;
        break;
    case 'platinam':
        console.log('full access')    ;
        break
}


// অনলাইনে কোন কিছু অর্ডার দিলে orderStatus থাকে। তাই এই orderStatus নামে ভেরিয়েবল থাকবে। সেটা pending, shipped, delivered বা cancelled হতে পারে। status অনুযায়ী কনসোল লগ করবি। যেমন, pending হলে "Your order is being processed", shipped হলে "Your order is on the way", delivered হলে "Your order has been delivered", cancelled হলে "Your order was cancelled".

const orderStatus = 'shipped';
switch (orderStatus){
    case 'pending':
        console.log('your order is being processed');
        break;
     case 'shipped':
        console.log('your order is on the way');
        break;
     case 'delivered':
        console.log('Your order has been delivered') ;
        break;
        
     case 'canceled':
        console.log('Your order was cancelled')   ;
        break
}


// একটা grade নামে ভেরিয়েবল থাকবে। সেটার মান A, B, C, D বা F হতে পারে। গ্রেড অনুযায়ী দেখাবি ইউজারের ফলাফল। A হলে "Excellent", B হলে "Good", C হলে "Average", D হলে "Poor", F হলে "Fail"।

const grade = 'B';
switch (grade){
    case 'A':
        console.log('excellent');
        break;
    case 'B':
        console.log('good');
        break;
    case 'C':
        console.log('Average');
        break;
    case 'D':
        console.log('poor');
        break;
    case 'F' :
        console.log('fail')           
}