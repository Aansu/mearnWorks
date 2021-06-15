// 3 to 25

var low=21;upp=40;

for(i=low;i<=upp;i++)
{
    let num=i,flag=0;
  for(let j=2;j<num;j++)
  {
    if(num%j==0)
    {
        flag++;
        break;
    }
  }
  if(flag==0){
      console.log(i);
  }
  
}