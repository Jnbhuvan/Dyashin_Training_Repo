function spiralMatrixValues(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return matrix;
  }

  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;

  const result = [];
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}
// 1,5,1,2,3,4,5
console.log(spiralMatrixValues([[1, 2, 3, 4, 5]]));
