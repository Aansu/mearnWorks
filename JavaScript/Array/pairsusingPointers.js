var arr=[5,2,3,4]; //using pointer concept
arr.sort();   //if not sorted,then sort
console.log(arr);
var cnt=0;
var elem=6;
var low=0;upp=arr.length-1;
while(low<upp)
{ 
    cnt++;
    let total=arr[low] +arr[upp];
    if(elem==total)
    {
        console.log(`Pairs are ${arr[low]},${arr[upp]}`);
        low++;
    }
    else if( elem>total)
    {
        low++;
    }
    else if(elem<total){
        upp--;
    }
}
console.log(cnt);