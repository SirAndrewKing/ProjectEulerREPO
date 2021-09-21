/*
Largest prime factor
Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// global vars. could change n to an ARGV to solve any number
let n = 13195;
let factorsArr = findFactors(n);
let primeArr = findPrimes(factorsArr);


// starts the chain off. finds factors of a number up to the sqrt.
// outputs an array
function findFactors(n) {
	let factorsArr = [];
	let nSqrt = Math.sqrt(n);

	for (let i = 2; i <= nSqrt; i++) {
		if (n % i === 0) {
			factorsArr.push(i);	
		};
	};
	return factorsArr; // [5, 7, 13, 29, 35, 65, 91]
};

// finds the prime numbers of the factors in the previous function/array
// outputs an array
function findPrimes(factorsArr) {
	let primeArr = factorsArr.filter((number) => {
		for (let i = 2; i <= Math.sqrt(number); i++) {
		    if (number % i === 0) return false;
		  };
		  return true;
		});
	return primeArr; // [ 5, 7, 13, 29 ]
};

// finds the largest number in an array
// outputs a single number
function largestNumber(primeArr) {
	let largestPrime = primeArr[0];
	let n = null;

	for (let i = 0; i < primeArr.length; i++){
		n = primeArr[i];
		largestPrime = Math.max(largestPrime, n);
	};
	return largestPrime; // 29
};




console.log(largestNumber(primeArr));






