const dsaData = {
  "Data Structures": {
    "Linear": ["Array", "Linked List", "Stack", "Queue"],
    "Non-Linear": ["Tree", "Graph"],
    "Hash-Based": ["Hash Table", "Set", "Dictionary"]
  },
  "Algorithms": {
    "Sorting": ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
    "Searching": ["Linear Search", "Binary Search", "Ternary Search"],
    "Recursion & Backtracking": ["Factorial", "Fibonacci", "N-Queens", "Sudoku Solver"],
    "Divide & Conquer": ["Merge Sort", "Quick Sort", "Binary Search", "Closest Pair of Points"],
    "Dynamic Programming": ["Knapsack", "LCS", "LIS", "Matrix Chain Multiplication"],
    "Greedy": ["Activity Selection", "MST (Prim/Kruskal)", "Huffman Coding"],
    "Graph Algorithms": ["BFS", "DFS", "Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Topological Sort"]
  }
};

// Function to build tree
function buildTree(data) {
  const ul = document.createElement('ul');
  for (let key in data) {
    const li = document.createElement('li');
    li.textContent = key;

    const value = data[key];
    if (Array.isArray(value)) {
      const innerUl = document.createElement('ul');
      value.forEach(item => {
        const innerLi = document.createElement('li');
        innerLi.textContent = item;
        innerUl.appendChild(innerLi);
      });
      li.appendChild(innerUl);
    } else if (typeof value === 'object') {
      li.appendChild(buildTree(value));
    }

    ul.appendChild(li);
  }
  return ul;
}

// Render tree
document.getElementById('dsaTree').appendChild(buildTree(dsaData));

// Add toggle functionality
document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', (e) => {
    e.stopPropagation();
    const childUl = li.querySelector('ul');
    if (childUl) {
      childUl.style.display = childUl.style.display === 'none' ? 'block' : 'none';
    }
  });
});
