//5 times outer row

for(let row=1;row<=7;row++)
{
    let str="";
    for(let space=5-row;space<=1;space--)
    {
    str="";
    }
    for(let star=1;star<=row;star++)
    {
    str+="* ";
    }
    console.log(str);
}