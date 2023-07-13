function fibonacci(num) {
// your code here
	let prev = 0;
	let curr = 1; 
	// if (num === 1) {
	// 	console.log(prev);
	// } else if (num === 2) {
	// 	console.log(prev);
	// 	console.log(curr);
	// }
	console.log(prev);
	console.log(curr);

	for (let index = 2; index < num; index++) {
		let sum = 0 
		sum = curr + prev;
		console.log(sum);
		prev = curr;
		curr = sum;
	}
	
}

module.exports = fibonacci;
