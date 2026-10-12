var reverse = function (x) {
  // x = BigInt(x)
  let result;
  if (x >= 0) {
    result = parseInt(x.toString().split("").reverse().join(""));
  } else {
    result = parseInt(x.toString().split("").reverse().join("")) * -1;
  }
  if (result < Math.pow(2, 31) * -1 || result > Math.pow(2, 31) - 1) {
    return 0;
  }
  return result;
};
