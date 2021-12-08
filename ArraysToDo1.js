function pushFront(arr, val) {
  for (var i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr;
}

console.log(pushFront([1, 2, 3], 4));

function popFront(arr) {
  let pop = arr[0];
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop(arr.length - 1);
  console.log(arr);
  return pop;
}
console.log(popFront([4, 1, 2, 3]));

function insertAt(arr, idx, val) {
  for (var i = arr.length; i >= idx; i--) {
    arr[i] = arr[i - 1];
  }
  arr[idx] = val;
  return arr;
}

console.log(insertAt([4, 1, 2, 3], 2, 35));

function removeAt(arr, idx) {
  for (var i = idx; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop(arr.length - 1);
  return arr;
}

console.log(removeAt([4, 1, 35, 2, 3], 2));

function swapPairs(arr) {
  for (var i = 0; i < arr.length - 1; i += 2) {
    var first = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = first;
  }
  return arr;
}
console.log(swapPairs(["Brendan", true, 42]));

function removeDup(arr) {
  let firstUniqueVal = arr[0];
  let firstUniqueIndex = 1;

  for (var i = 1; i < arr.length; i++) {
    if (firstUniqueVal !== arr[i]) {
      firstUniqueVal = arr[i];
      arr[firstUniqueIndex] = arr[i];
      firstUniqueIndex++;
    }
  }
  arr.length = firstUniqueIndex;
  return arr;
}

console.log(removeDup([1, 1, 5, 6, 7, 7, 8, 9, 9, 10]));
