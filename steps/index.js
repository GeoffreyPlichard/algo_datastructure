// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// Solution 1 - Handle it like a 2 dimension array and itérate on row and cols
// if the current col is <= to the current row, add a #, else add a space

function steps(n) {
    for (let row = 0; row < n; row++) {
        let str = "";
        for (let column = 0; column < n; column++) {
            column <= row ? str += "#" : str += " ";
        }
        console.log(str);
    }
}


module.exports = steps;
