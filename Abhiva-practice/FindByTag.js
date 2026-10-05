function findByTag(root, tag) {
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode.tagName === tag) {
      //   return currentNode;
      result.push(currentNode);
    }
    for (let children of currentNode.children) {
      queue.push(children);
    }
  }
  return result;
}

const root = {
  tagName: "div",
  id: "1",
  children: [
    {
      tagName: "span",
      id: "2",
      children: [],
    },
    {
      tagName: "p",
      id: "3",
      children: [
        {
          tagName: "span",
          id: "4",
          children: [],
        },
      ],
    },
  ],
};

// console.log(findByTag(root, "span"));

function findByDFS(root, tag) {
  let result = [];
  function dfs(node) {
    if (node.tagName === tag) {
      result.push(node);
    }
    for (let children of node.children) {
      dfs(children);
    }
  }
  dfs(root);
  return result;
}
console.log(findByDFS(root, "span"));
