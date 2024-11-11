const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function to perform DFS
  const dfs = (r, c) => {
      // Boundary and water check
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "W") return;

      // Mark this cell as visited
      grid[r][c] = "W";

      // Explore neighbors (up, down, left, right)
      dfs(r - 1, c); 
      dfs(r + 1, c); 
      dfs(r, c - 1); 
      dfs(r, c + 1); 
  };

  // Traverse the grid
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === "L") {
              // Found an unvisited landmass, start DFS
              islandCount++;
              dfs(r, c);
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
