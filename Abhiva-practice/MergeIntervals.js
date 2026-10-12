function mergeIntervals(intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }
  let merged = [intervals[0]];

  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let lastMerged = merged[merged.length - 1];

    if (lastMerged[1] >= current[0]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  return merged;
}

console.log(
  mergeIntervals([
    [1, 3],
    [2, 4],
    [5, 6],
  ]),
);
