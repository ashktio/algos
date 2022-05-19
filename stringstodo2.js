function reverseString(str){

    //implement reverseString(str) that, given string, returns that string with characters reversed
    let revStr = ''

    for( let i = str.length-1; i >=0; i--){
        revStr +=str[i]
    }

    return revStr
}

console.log(reverseString("creature"))


function removeEvenLengthStrings(str){
    let counter = 0

    for(let i = 0; i <str.length; i++){
        if(str[i].length % 2 != 0){
            let temp = str[i]

            str[i] = str[counter]

            str[counter] = temp

            counter ++
        }
    }
    str.length = counter
    console.log(str)
}
removeEvenLengthStrings(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."])

function integerToRomanNumerals(num){
    // given a positive integer less than 4000, return a string value in roman numeral 

    var roman = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000}

    var str = ''

    for (var i of Object.keys(roman)) {
        // var q = Math.floor(num / roman[i]);
        // num -= q * roman[i];
        // str += i.repeat(q);

        if(Math.floor(num / roman[i])){
            let count = Math.floor(num / roman[i])

            str += i.repeat(count)

            num = num % roman[i]
        }
    }
    
    console.log(str)


}

integerToRomanNumerals(5)


function romanNumeralsToInteger(int){

    var roman = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000}

    let result = 0
    
    for( let i =0; i < int.length; i++){

        let cur = roman[int[i]]
        
        let next = roman[int[i+1]]

        if(cur < next){
            result += next - cur
            i++
        }else{
            result += cur
        }
    }
    return result
}
console.log(romanNumeralsToInteger("MCMXCIV"))