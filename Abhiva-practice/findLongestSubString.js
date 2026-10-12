function findLongestSubString(str) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxlength = 0;
  for (right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[right]);
      left++;
    }
    set.add(str[right]);
    maxlength = Math.max(maxlength, right - left + 1);
  }
  return maxlength;
}

console.log(findLongestSubString("aabbccabc"));
