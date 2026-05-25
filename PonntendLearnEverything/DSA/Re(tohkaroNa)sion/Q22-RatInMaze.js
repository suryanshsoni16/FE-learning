function ratInMaze(maze) {
  let n = maze.length;
  let result =[];

  function solve(col, row, path) {
    //base conditions
    if (row === n - 1 && col === n - 1) {
      result.push(path);
      return;
    }

    if (row < 0 || col < 0 || row >= n || col >= n || maze[row][col] === 0) {
      return;
    }
    maze[row][col] = 0;
    //down
    solve(col, row + 1, path + "D");
    //up
    solve(col, row - 1, path + "U");
    //right
    solve(col + 1, row, path + "R");
    //left
    solve(col - 1, row, path + "L");

    // backtrack
    maze[row][col] = 1;
  }
  solve (0,0,"")
  return result;
}

const maze =[[1,1],[1,1]]
console.log(ratInMaze(maze));
