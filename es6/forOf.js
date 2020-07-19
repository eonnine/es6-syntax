/**
 * for ... of
 */

 Array.prototype.chainFunction = function() {
     return 'find by prototype chaining';
 }

 const arr = [1, 2, 3];

 for (let i in arr) {
    console.log(i, arr[i]);
    /**
     * 0 1
     * 1 2
     * 2 3
     * chainFunction ƒ () {
     *   return 'find by prototype chaining';
     * }
     */
 }

 for (let value of arr) {
    console.log(value);
    /**
     * 1
     * 2
     * 3
     */
 }