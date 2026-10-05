function productExceptSelf(arr) {
  let n = arr.length;
  let answer = new Array(n).fill(1);

  let left = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = left;
    left *= arr[i];
  }
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= arr[i];
  }
  return answer;
}

console.log(productExceptSelf([1, 0, 2]));
