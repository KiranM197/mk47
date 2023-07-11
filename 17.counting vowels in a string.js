function vowelscnt(a)
{
    var vowels = ['a','e','i','o','u','A','E','I','O','u'];
    var count = 0;
    
    for(char of a)
    {
        if(  vowels.includes(char))
        {
            count++;
        }
    }
    return count;
}
var K = "Celebration" ;
let vowelcount = vowelscnt(K);
console.log(vowelcount);