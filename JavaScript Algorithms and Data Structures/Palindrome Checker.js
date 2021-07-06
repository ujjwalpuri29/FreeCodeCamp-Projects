/*
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

Return true if the given string is a palindrome. Otherwise, return false.
*/

const palindrome = str => {
    //Converts the string to lowercase and removes all spaces and punctuation and symbols using regex
    str = str.toLowerCase().replace(/[\W_]/g, '');

    //Reversing the string 
    let reverse_str = str.split('').reverse().join('');

    //If the reversed string is same as original, it is palindrome
    if (str === reverse_str)
        return true;
    return false
}

console.log(palindrome("race CAR"));

//---------------------------------------------------------------------------------------------------//

//Method 2
const palindrome2 = str => {
    //Converts the string to lowercase and removes all spaces and punctuation and symbols using regex
    str = str.toLowerCase().replace(/[\W_]/g, '');

    //Midpoint of the string
    let n = Math.ceil(str.length / 2);

    //Comparing letter with the letter on the other side of the word 
    for (let i = 0; i <= n; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}

console.log(palindrome2("A man, a plan, a canal. Panama"));