// Binary Search only in sorted order
//prc BS(arr,low,upp,element,mid)
//arr.sort() used

var arr=[8,5,7,10,12,17,90];
arr.sort((num1,num2)=>num1 - num2); //or  =>num1<num2?-1:1, num1 first then num2
console.log(arr);