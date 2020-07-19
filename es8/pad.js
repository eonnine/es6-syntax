/**
 * String Pad
 */

const str = 'str';
const padStart1 = str.padStart(10);
const padStart2 = str.padStart(10, 'pad');
console.log(padStart1); // '       str'
console.log(padStart2); // 'padpadpstr'
 
const padEnd1 = str.padEnd(10);
const padEnd2 = str.padEnd(10, 'pad');
console.log(padEnd1); // 'str       '
console.log(padEnd2); // 'strpadpadp'