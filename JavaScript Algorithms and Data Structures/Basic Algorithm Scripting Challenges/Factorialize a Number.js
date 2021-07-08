/*
Return the factorial of the provided integer (n!).
Factorial is the product of all positive integers less than or equal to n.
*/

//Solving using recursion
function factorialize(num) {
    if (num == 1 || num == 0)
        return 1;
    return num * factorialize(num - 1);
}
  
console.log(factorialize(5));