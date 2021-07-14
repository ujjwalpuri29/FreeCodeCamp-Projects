/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    //Converting sentence to lowercase and splitting it into array of words
    const words = str.toLowerCase().split(' ');
    
    //Traversing through each word
    for (let i = 0; i < words.length; i++)
    {
        //Converting word into an array of letters
        const letters = words[i].split('');

        //Replacing the first letter with its uppercase letter
        letters[0] = letters[0].toUpperCase();

        //Reforming the word
        words[i] = letters.join('');
    }

    //Reforming the sentence by joining the words array
    str = words.join(' ');
    return str;
}

console.log(titleCase("I'm a little tea pot"));