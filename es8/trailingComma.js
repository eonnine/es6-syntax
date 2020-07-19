/**
 * Trailing Comma
 */

function fun1(first, second) {
    console.log(first, second); // 1 2
}
fun1(1, 2);

function fun2(first, second,) {
    console.log(first, second,); // 1 2
}
fun2(1, 2,);