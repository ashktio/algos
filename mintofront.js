function minToFront(arr) {
  let minval = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < minval) {
      minval = arr[i];
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == minval) {
      arr[i] = arr[0];
      arr[0] = minval;
    }
  }
  return arr;
}

console.log(minToFront([4, 2, 1, 3, 5]));

function minFront(arr) {
  var min = arr[0];
  var idx = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      idx = i;
    }
  }
  for (var x = idx; x > 0; x--) {
    var temp = arr[x];
    arr[x] = arr[x - 1];
    arr[x - 1] = temp;
  }
  return arr;
}
console.log(minFront([4, 2, 1, 3, 5]));
