// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false




// Solution 1. Test if the reversed string is equal to the original one

// function palindrome(str) {
//     return str === str.split('').reverse('').join('');
// }



// Solution 2. With the "every" helper we compare letters for each iteration
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}


module.exports = palindrome;
