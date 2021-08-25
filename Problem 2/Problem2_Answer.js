/*
Title: Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated
by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence
whose values do not exceed four million, find the
sum of the even-valued terms.
*/

/*    NOTES
fib sequence is next number(N) is the sum of the two previous numbers (a + b).
N = a + b shown as 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5,  etc.

a + b = N ..
first number(a) = Fibonacci sequence number minus 1... 
second number(b) = Fibonacci sequence number minus 2..
sum(N) = sum of the first and second number.

If you initialize an array..


 */

let fibSeq = [];
let evenFibSeq = [];
let addedSeq = [];

// this function creates 35 places of the Fibonacci sequence and returns them to the fibSeq array
function createFib() {
	fibSeq = [1,2]
	for (var i = 2; i < 33; i++) {
		fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2]
	}
	return fibSeq;
}

// this function accepts the argument fibSeq and removes everything that isn't an even number
// in the Fibonacci sequence and returns it to the evenFibSeq array
function onlyEvens(arg) {
	evenFibSeq = []
	for (var i = 0; i < fibSeq.length; i++) {
		if (fibSeq[i] % 2 === 0) {
			evenFibSeq.push(fibSeq[i]);
		}	
	}
	return evenFibSeq;
}

// this function accepts the argument evenFibSeq and then adds all remaining numbers in the array together
function addTheEvens(arg) {
	addedSeq = 0
	for (var i in arg) {
		addedSeq += arg[i];
	}
	//console.log(evenFibSeq, "here");
	return addedSeq;
}

createFib()
onlyEvens(fibSeq)
addTheEvens(evenFibSeq)

console.log(addedSeq);
