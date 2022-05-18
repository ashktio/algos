function removeBlanks(str){

    // create a function that, given a string returns all of that strings content but without blanks
    let a = str.split(' ')

    return a.join('')
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c"))

function getDigits(str){

    // extract the numbers from strings 

    let a = str.split('')
    let digits = ''
    for(let i of a){
        if(i % 1 == 0){
            digits+=i
        }
    }
    return digits
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

function acronym(str){
    // write a function that retruns acronym of strings passed into it
    let a = str.split(' ')
    let temp = ''
    for(var i of a){
        // you can also do if i == false
        if(i == ''){
            continue
        }else {
            temp += i[0]
        }

    }

    return temp.toUpperCase()
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "))
console.log(acronym("Live from New York, it's Saturday Night!"))

function countNonSpaces(str){
    // count and return the length of strings without the blank spaces
    let a = str.split(' ').join('')
    return a.length
}

console.log(countNonSpaces("Honey pie, you are driving me crazy!"))

function removeShorterStrings(str, k){
    let counter = []
    // given a string array and value(length), remove any strings shorter than the length from the array

    for(let i =0; i < str.length; i++){
        if(str[i].length >= k){
            counter.push(str[i])
        }
    }

    return counter
}

console.log((removeShorterStrings(["hello", "my", "name", "is", "Ashenafi", "Kitessa", "Teressa", "of", "the", "Harar!"], 3)))