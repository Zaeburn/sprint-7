// Minimum

const min = function (a, b) {
	if (a <= b) {
      return a;
    } else if (b < a) {
      return b; 
    } 
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10