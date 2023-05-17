function isCyclic(graph) {
    const visited = new Set();
    const recStack = new Set();
  
    function dfs(node) {
      visited.add(node);
      recStack.add(node);
  
      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor) && dfs(neighbor)) {
          return true;
        } else if (recStack.has(neighbor)) {
          return true;
        }
      }
  
      recStack.delete(node);
      return false;
    }
  
    for (let node in graph) {
      if (!visited.has(node) && dfs(node)) {
        return true;
      }
    }
  
    return false;
  }
  