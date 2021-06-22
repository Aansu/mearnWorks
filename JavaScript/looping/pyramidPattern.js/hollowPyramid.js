//row==5,row+col==6,col-row==4
let str="";
for(let row=1;row<=5;row++)
{
    if((row==5)||(row+col==6)||(col-row==4))
    {
        str+="*";
    }
    else{
        str+=" ";
    }
}

  
    // for(let space=5-row;space<=1;space--)
    // {
    // str="";
    // }
    // for(let star=1;star<=row;star++)
    // {
    // str+="* ";
    // }
  console.log(str);  
}
