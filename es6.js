/**
 * Restructure
 */
const restructure1 = { name: 'eonnine', age: 20 };
const { name, age } = restructure;
console.log(name, age); // 'eonnine', 20

const restructure2 = [1, 2, 3];
const [first, second, third] = restructure2;
console.log(first, second, third); // 1, 2, 3

/**
 * Spread
 */
const newObjectBySpread = {...restructure1};
console.log(newObjectBySpread); // { name: 'eonnine', age: 20 }

const newArrayBySpread = [...restructure2]; 
console.log(newArrayBySpread); // [1, 2, 3]

