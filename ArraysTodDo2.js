function reverseArr(arr) {
  let counter = 0;
  for (var i = arr.length - 1; i >= arr.length / 2; i--) {
    let temp = arr[counter];
    arr[counter] = arr[i];
    arr[i] = temp;
    counter++;
  }
  return arr;
}

console.log(reverseArr([1, 3, 5, 7, 9]));

function filterRange(arr, minVal, maxVal) {
  let counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > minVal && arr[i] < maxVal) {
      arr[counter] = arr[i];
      counter++;
    }
  }
  arr.length = counter;
  return arr;
}

console.log(filterRange([1, 3, 5, 7, 9], 3, 10));

function arrConcat(arr1, arr2) {
  let counter = arr1.length;
  for (var i = 0; i < arr2.length; i++) {
    arr1[counter] = arr2[i];
    counter++;
  }
  return arr1;
}

console.log(arrConcat(["a", "b"], [1, 2]));
