var num=2,low=3,upp=30;
// 8, 27
//1**3 2**3 3**3 4**3
 for(i=1;i<=upp;i++)
 {
   let res=i**num;
   if(res>=low & res<=upp)
   {
       console.log(res);
   }
 }