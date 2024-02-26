const Calculate = {
	sum(inputArray) {
		let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
      sum += inputArray[i];
    }
    return sum;
	}
}

console.log(Calculate.sum([1,2,3]));