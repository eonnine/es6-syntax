/**
 * Rest Parameter
 */

const params1 = [1,2,3];
function fun1([first, ...rest]) {
	console.log(first, rest); // 1, [2, 3]
}

fun1(params1);


const params2 = { name: 'eonnine', age: 20 };
function fun2({name, ...rest}) {
	console.log(name, rest); // 'eonnine', { age: 20 }
}

fun2(params2);


function fun3(first, ...rest) {
	console.log(first, rest); // 1, [2, 3]
}

fun3(1,2,3);
