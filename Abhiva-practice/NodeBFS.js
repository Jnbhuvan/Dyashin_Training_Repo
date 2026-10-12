function findNodeBFS(node, target) {
  const result = [];
  const queue = [node];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode.tagName === target) {
      result.push(currentNode);
    }
    for (const nodes of currentNode.children) {
      queue.push(nodes);
    }
  }
  return result;
}

console.log(
  findNodeBFS(
    {
      tagName: "div",
      id: "1",
      children: [
        { tagName: "span", id: "2", children: [] },
        { tagName: "p", id: "3", children: [] },
      ],
    },
    "span",
  ),
);
