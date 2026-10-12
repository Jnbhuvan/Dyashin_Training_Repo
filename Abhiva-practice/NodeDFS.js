function nodeDFS(root, attributeName, attributeValue) {
  let result = [];
  function dfs(node) {
    if (node.attributes && node.attributes[attributeName] === attributeValue) {
      result.push(node);
    }
    for (let children of node.children) {
      dfs(children);
    }
  }
  dfs(root);
  return result;
}

console.log(
  nodeDFS(
    {
      tagName: "div",
      id: "1",
      attributes: {
        "data-test": "val1",
      },
      children: [
        {
          tagName: "span",
          id: "2",
          attributes: {
            "data-test": "val2",
          },
          children: [],
        },
      ],
    },
    "data-test",
    "val1",
  ),
);
