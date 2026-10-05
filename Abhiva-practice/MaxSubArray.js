function maxSubArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let currentSum = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function MaxSubArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
console.log(MaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
