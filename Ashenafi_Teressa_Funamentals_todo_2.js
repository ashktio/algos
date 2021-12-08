function countDown (num) {
	var newArr = []


}

function printandReturn (arr) {
	console.log(arr[0]);
	return arr[1]
}

console.log(printandReturn([2,4]))

function firstPlusLength (arr) {
	total = arr[0] + arr.length
	return total
}

console.log(firstPlusLength(['lol',8,9,12,10]))

const valuesGreaterthanSecond = (arr) => {
	var numberOfValues = 0 
	for (var i = 0; i <= arr.length; i++){
		if(arr[i] > arr[i+1]){
			numberOfValues +=1
			console.log(arr[i])
		}
	}
	return numberOfValues
}

console.log(valuesGreaterthanSecond([1,3,5,7,9,13]))

const valuesGreaterthanSecondGeneralized = (arr) => {
	var newArr= [] 
	for (var i = 0; i <= arr.length; i++){
		if(arr[i] > arr[i+1]){
			newArr.push(arr[i])
		}
	}
	return newArr
}
console.log(valuesGreaterthanSecondGeneralized([1]))

function thisLengththatValue (num1, num2) {
	var newArr = []
	if (num1 == num2){
		console.log('Jinx!')
	}else {
		for (var i=1; i <= num1; i++){
			newArr.push(num2)
		}
		return newArr
	}
}

console.log(thisLengththatValue(3,5))


const fahrenheitToCelicius = (fDegrees) => {
	cDegree = (fDegrees - 32) * 5/9
	return `${cDegree} celsius`;
}
console.log(fahrenheitToCelicius(50))

function celsiusToFAhrenheit (cDegrees) {
	fDegrees = (cDegrees * 9/5) + 32
	return `${fDegrees} fahrenehit`
}

console.log(celsiusToFAhrenheit(30))