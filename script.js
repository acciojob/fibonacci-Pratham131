function fibonacci(num) {
// your code here
	if (num === 1) {
    return 0;
  } else if (num === 2 || num === 3) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
	for (let index = 1; index <= num-2; index++) {
		let temp = b;
		b = a + b; 
		a = temp;
	}
	return b;
	
}

module.exports = fibonacci;
