function fibonacci(num) {
// your code here

	if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
	for (let index = 1; index <= n-2; index++) {
		let temp = b;
		b = a + b; 
		a = temp;
	}
	return b;
	// if (num === 0) {
 //    return 0;
 //  } else if (num === 1 || num === 2) {
 //    return 1;
 //  } else {
 //    let a = 0;
 //    let b = 1;
 //    let c;

 //    for (let i = 2; i <= num; i++) {
 //      c = a + b;
 //      a = b;
 //      b = c;
 //    }

    return b;
	// let prev = 0;
	// let curr = 1; 
	// // if (num === 1) {
	// // 	console.log(prev);
	// // } else if (num === 2) {
	// // 	console.log(prev);
	// // 	console.log(curr);
	// // }
	// console.log(prev);
	// console.log(curr);

	// for (let index = 2; index < num; index++) {
	// 	let sum = 0 
	// 	sum = curr + prev;
	// 	console.log(sum);
	// 	prev = curr;
	// 	curr = sum;
	// }
	
}

module.exports = fibonacci;
