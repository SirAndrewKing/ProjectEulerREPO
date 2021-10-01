/*
Title: Names Scores

Using names.txt, text file containing over five-thousand first names,
begin by sorting it into alphabetical order.
Then working out the alphabetical value for each name,
multiply this value by its alphabetical position in the list
to obtain a name score.

For example, when the list is sorted into alphabetical order,
COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53,is the 938th name in the list.
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/


let nameList = require('./ex_names').sort() //1st: sort list

// A-Z = 1-26...ASCII A=65 - Z=90
function alphaNum(arg) {

	let character = arg;
	num = character.charCodeAt(0) - 64;
	return num;
};



function shiftedArr(arg) {
	let name = '';
	let letterVal = 0;
	//console.log('this was removed:', shifted)
	for (let i = 0; i < nameList.length; i++) {
		let name = nameList[i]
		nameList[i]
		for (let j = 0; j < name.length; j++) {
			console.log(name[j])
			letterVal += alphaNum(name[j])
			
		};	
		console.log(letterVal, "here")
	};
};




//console.log(character)
//shiftedArr(alphaNum)
//console.log(nameList)

shiftedArr(nameList)
//console.log(nameList)
//console.log('Length of list:', nameList.length)