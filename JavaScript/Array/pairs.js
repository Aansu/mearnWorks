// 6
//var arr=[1,2,3,4]; //no duplicates
var arr=[5,2,3,4];  //if dupes,avoid dupes nd sort
console.log(arr.sort());
var element=6;
// for(let num1 of arr)
// {
//     for (let num2 of arr)
//     {
//         let total=num1+num2;
//         if(element==total) //or num1!=num2
//         {
//             console.log(`pairs are ${num1} ${num2}`);
//         }
//     }
// }


//using for loop
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        let tot=arr[i] +arr[j];
        if(element==tot){
            console.log(arr[i],arr[j]);
        }
    }
    
}