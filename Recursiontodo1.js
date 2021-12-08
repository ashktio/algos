// function fac(val) {
//   if (val <= 1) {
//     return 1;
//   } else {
//     return val * fac(val - 1);
//   }
// }

// console.log(fac(5));

// function rSigma(val) {
//   val = Math.floor(val);
//   if (val <= 0) {
//     return 0;
//   } else {
//     return val + rSigma(val - 1);
//   }
// }

// console.log(rSigma(3.2));

function recursiveFibonacci(val) {
  if (val <= 1) {
    return val;
  }

  return recursiveFibonacci(val - 1) + recursiveFibonacci(val - 2);
}
console.log(recursiveFibonacci(9));

function bina(arr, val) {
  let low = arr[0];
  let high = arr[arr.length - 1];
  let mid = (low + high) / 2;

  if (low > val || high < val) {
    return false;
  }

  if (val == mid) {
    return;
  }
}
