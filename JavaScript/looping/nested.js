// for(i=1;i<=3;i++)
// {
    
//     for(j=1;j<=3;j++)
//     {
//         console.log(i);
//     }
// }


// for(i=1;i<=3;i++)
// {
//     let str="";
//     for(j=1;j<=3;j++)        //j<=i makes triangle
//     {
//         str+=i;
//     }
//     console.log(str);
// }



for(i=1;i<=3;i++)
{
    let str="";
    for(j=1;j<=i;j++)       
    {
        str+="*";
    }
    console.log(str);
}