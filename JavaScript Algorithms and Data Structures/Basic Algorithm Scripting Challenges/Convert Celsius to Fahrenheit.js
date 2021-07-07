/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Use the algorithm above to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) {
    let fahrenheit = ((9 * celsius) / 5) + 32;
    return fahrenheit;
}
  
console.log(convertToF(30));