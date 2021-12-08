
function pushFront(arr, val) {

    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val;
    return arr
}
console.log(pushFront([5,4,2],5))

function popFront(arr) {
    var returnVal = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop(); 
    console.log(arr)
    return returnVal;
}
console.log(popFront([8,10,2,9,5]))


function insertAt(arr, val, ind) {

    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val; 
    return arr
}
console.log(insertAt([5,4,2,8,1],1,3))


function removeAt(arr, ind) {
    ind = Math.floor(ind); 
    if (ind >= arr.length || ind < 0) {
        return null; 
    }
    var returnVal = arr[ind]; 
    for (var i = ind + 1; i < arr.length; i++) {
        console.log(i, arr[i-1], arr[i])
        arr[i-1] = arr[i];
        console.log(arr[i-1], arr[i])
    }
    arr.pop(); 
    return returnVal;
}
console.log(removeAt([8,10,2,9,5],0))






function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        // Swap pairs:
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}

// First version with nested loops
function removeDupesV1(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] == arr[i]) { 
            while (arr[i+1] == arr[i]) {
                removeAt(arr,i+1);
            }
        }
    }
}





// More efficient version with only one for loop
function removeDupesV2(arr) {
    if (arr.length <= 1) { // If array is empty or has only one value, no duplicates possible
        return;
    }
    var lastUniqueVal = arr[0];
    var nextUniqueInd = 1; // The index for where the next unique value will be put in the array
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != lastUniqueVal) {
            lastUniqueVal = arr[i];
            arr[nextUniqueInd] = arr[i];
            nextUniqueInd++;
        }
    }
    arr.length = nextUniqueInd; // Remove the duplicates
}