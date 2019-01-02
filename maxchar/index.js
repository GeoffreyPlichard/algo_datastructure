// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    for (char of str) {
        charMap[char] = charMap[char] + 1 || 1;

    }
    console.log(charMap);
}

module.exports = maxChar;
