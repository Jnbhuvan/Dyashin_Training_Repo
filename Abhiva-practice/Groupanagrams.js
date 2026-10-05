function groupAnagrams(strs) {
  let anagramsMap = new Map();
  for (let str of strs) {
    const word = str.split("").sort().join("");
    if (anagramsMap.has(word)) {
      anagramsMap.get(word).push(str);
    } else {
      anagramsMap.set(word, [str]);
    }
  }
  return Array.from(anagramsMap.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "nat"]));
