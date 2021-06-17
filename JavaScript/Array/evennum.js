var arr=[10,11,12,13,14,15,16]; // print all even numbers from this array
// for(let val of arr){
//     if(val%2==0){
//         console.log(val);
//     }
// }


// var sum=0;                   //total sum of array
// for(let val of arr){
//     sum+=val;
// }
// console.log(sum);


//push(),pop()

// arr.push();
// arr.pop();


var odd=[],even=[];
for(let num of arr){
    if(num%2==0){
        even.push(num);
    }
    else{
        odd.push(num);
    }
}
console.log(odd);
console.log(even);

