// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// Solution 1. Turn the string into an array, then reverse it and join to a string again.

function reverse(str) {
    return str.split('').reverse().join('');
}




// Solution 2. Without the reverse helper. Create an empty string, concat each letter with the temp string
// Ex: apple
// a
// pa
// ppa
// lppa
// elppa

// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }

module.exports = reverse;
