/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/
 function getCount(str) {
    let count = 0;
    let word = str.toLowerCase().split("");
    let vowels = "aeiou"
    for(i of word)
        {
          count += vowels.includes(i) ? 1 : 0
  
        }
    
    return count;
 }
  
  console.log(getCount("abracadabra"))


      