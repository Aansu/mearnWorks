var expenses=[200,3000,10000,40000];
// expenses[1]=10;
// console.log(expenses);
// for(let i=0;i<expenses.length;i++)
// {
//     console.log(expenses[i]);
// }

// for(let amount of expenses)
// {
//     console.log(amount);           // another way of printing the array loop using let
// }

//print all expenses >25000
for(let exp of expenses)
{
    if(exp>25000)
    {
        console.log(exp);
    }
}