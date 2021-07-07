/*
In Caesar cipher, also known as a shift cipher, the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

const rot13 = (str) => {
    var result = "";
    for (let i = 0; i < str.length; i++)
    {
        //UTF-16 code
        var code = str.charCodeAt(i);
  
        //for letters only
        if (str[i].match(/[A-Z]/i))
        {
            //Uppercase
            if (code >= 65 && code <= 90)
            {
                var newCode = ((code - 65 - 13) % 26) + 65;
                if (newCode < 65)
                    newCode += 26;
            }
  
            //Lowercase
            else if (code >= 97 && code <= 122)
            {
                var newCode = ((code - 97 - 13) % 26) + 97;
                if (newCode < 97)
                    newCode += 26
            }
        }
  
        //Not a letter
        else newCode = code;
  
        //Decoded letter
        var str2 = String.fromCharCode(newCode);
      
        //Add it to result
        result += str2;
    }
    return result;
}

rot13("SERR CVMMN!");