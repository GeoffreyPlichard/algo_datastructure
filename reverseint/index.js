// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');
        
    // if (n < 0) {
    //     // For negative numbers, we lose the negative sign, so we multiply by -1 to get it back
    //     return parseInt(reversed) * -1;
    // }
    // return parseInt(reversed);

    // A cleaner solution with Math.sign
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
