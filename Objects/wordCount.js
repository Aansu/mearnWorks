var text="hai hello hai hello";

var words=text.split(" "); //[hai,hello,hai,hello]
console.log(words);

var dict={}; //object 

for( let word of words)
{
    if( word in dict)
    {
        dict[word]+=1;
    }
    else
    {
        dict[word]=1;
    }
}
console.log(dict);