/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

//An array holding arrays having numerals as their first element and the roman equivalent as the second element
const roman = [[1000,'M'], [900,'CM'], [500,'D'], [400,'CD'], [100,'C'], [90,'XC'], [50,'L'], [40,'XL'], [10,'X'], [9,'IX'], [5,'V'], [4,'IV'], [1,'I']];

function convertToRoman(num) {
    //Initialising the roman numeral
    let result = '';

    //Traversing the array...
    //If the number is greater than the array element, add the roman equivalent to the result and subtracting element from the number recursively 
    for (let i = 0; i < roman.length; i++)
    {
        while (num >= roman[i][0]) //Comapring with array num (first element)
        {
            result += roman[i][1]; //Adding roman equivalent to result (second element)
            num -= roman[i][0]; //Subtracting array num
        }
    }
    return result;
}

//This method works upto 3999
console.log(convertToRoman(36));