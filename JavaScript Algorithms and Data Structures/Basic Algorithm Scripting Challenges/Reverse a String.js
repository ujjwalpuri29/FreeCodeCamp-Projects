/*
Reverse the provided string.
*/

function reverseString(str) {
    //Convert string to array of letters, reverse the array and convert it back
    str = str.split('').reverse().join('');
    return str;
}

console.log(reverseString("Greetings from Earth"));