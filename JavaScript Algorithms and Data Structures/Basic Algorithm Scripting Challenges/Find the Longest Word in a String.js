/*
Return the length of the longest word in the provided sentence
*/

function findLongestWordLength(str) {
    //Splitting sentence into an array of words
    const words = str.split(" ");

    //Initializing the max value
    let max = 0;

    //Going through each word and if the number of letters is more than max, substituting max
    for (let i = 0; i < words.length; i++)
        if (words[i].length > max)
            max = words[i].length; 
    return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));