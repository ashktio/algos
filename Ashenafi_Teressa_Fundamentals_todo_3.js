const biggieSize = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            arr[i] = "big"
        }
    }
    return arr
}

console.log(biggieSize([-1,3,5,-5]))

function printLowReturnHigh(arr) {
    for (var i = 0; i < arr.length; i ++){
        if(arr[i] < arr[i+1]){
            console.log(arr[i])
        }else{
            
        }
    }
}