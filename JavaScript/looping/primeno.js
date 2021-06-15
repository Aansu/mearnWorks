// chck prime

//15 not prime
 var num=8; //factor 1 ,17 only ..so primee
 var flag=0;
 for(let i=2;i<num;i++)
 {
     if(num%i==0){
         flag+=1;
         
     }
 }

 if(flag==0)
 {
     console.log("prime");
 }
 else{
     console.log("not prime");
 }