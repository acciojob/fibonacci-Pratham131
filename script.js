function fibonacci(num) {
// your code here
	if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
	for (let index = 1; index <= num; index++) {
		let temp = b;
		b = a + b; 
		a = temp;
	}
	return b;
	
}

module.exports = fibonacci;
