/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    //Empty return for non-positive number
    if (num <= 0)
        return "";

    //Initilising an empty string and concatenating the argument str 'num' times
    let result = "";
    while (num--)
        result += str;
    return result;
}
  
console.log(repeatStringNumTimes("abc", 3));