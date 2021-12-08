function removeNegatives(arr) {
  let counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      // if(i != counter){
      let temp = arr[i];
      arr[i] = arr[counter];
      arr[counter] = temp;
      // }
      counter++;
    }
  }
  arr.length = counter;
  return arr;
}

console.log(removeNegatives([-1, 5, 3, -7, -9, -10, 11, -20]));

function secondToLast(arr) {
  if (arr.length <= 2) {
    return null;
  }
  return arr[arr.length - 2];
}
console.log(secondToLast([42, true, 4, "Kate", 7]));

function secondLargest(arr) {
  let largestIndex = 0;
  let secLargIdx = 0;
  let counter = 0;
  let tempArr = [];
  if (arr.length <= 2) {
    return null;
  }
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[largestIndex]) {
      largestIndex = i;
    } else {
      tempArr[counter] = arr[i];
      counter++;
    }
  }
  for (var i = 1; i < arr.length; i++) {
    if (tempArr[i] > tempArr[secLargIdx]) {
      secLargIdx = i;
    }
  }
  return tempArr[secLargIdx];
}

console.log(secondLargest([42, 1, 4, Math.PI, 7]));
