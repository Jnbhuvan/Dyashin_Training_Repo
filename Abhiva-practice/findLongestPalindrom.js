function findLongestPalindrome(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let left = i;
    let right = i;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > result.length) {
        result = str.slice(left, right + 1);
      }
      left--;
      right++;
    }
    left = i;
    right = i + 1;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right + left - 1 > result.length) {
        result = str.slice(left, right);
      }
      left--;
      right++;
    }
  }
  return result;
}
console.log(findLongestPalindrome("babad"));
