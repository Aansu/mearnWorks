//local storage--browser--chrome--Applications--local storage--load page link--key n value
//local storage--browser--firefox--Storage--local storage--load page link--key n value
//localStorage.setItem(key,value)

// localStorage.setItem("account_num",1000)
// localStorage.setItem("password","abc123")

// //fetching account number
// var acc_no=localStorage.getItem("account_num")
// console.log(acc_no);

// var pwd=localStorage.getItem("password");
// console.log(pwd);

// console.log(localStorage.key(0));//0-->index number

// for(let i=0;i<localStorage.length;i++){ //for printing key only
//     console.log(localStorage.key(i));
// }

// for(let i=0;i<localStorage.length;i++){ //for printing key and value
//     console.log(localStorage.getItem(localStorage.key(i)));
// }
// //or
// for(let i=0;i<localStorage.length;i++){ //for printing key and value
//    let ke=localStorage.key(i);
//    let val=localStorage.getItem(ke);
//    console.log(ke,val);

// }

// //removing key value
// localStorage.removeItem("account_num");
// localStorage.removeItem("password");
// localStorage.clear();// all key and value cleared



//Storing key and values in json format i..e.; entire object stored equals user
var user={uname:"user1",password:"abc123",name:"Niru",balance:2000}
localStorage.setItem(user.uname,JSON.stringify(user));
//localStorage.clear();

//var book={book_name:"The rain",author:"Nirupama",price:123,no_copies:50}