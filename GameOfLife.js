class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }
  makeBoard() {
    let array = [];
    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j < this.width; j++) {
        row[j] = 0;
      }
      array.push(row);
    }
    return array;
  }

  livingNeighbors(row, col) {

    let i = row;
    let j = col;
    let count = 0;
    if (i>0 && j>0 && this.board[i - 1][j - 1]) {
      count++;
    }
    if (i>0 && this.board[i - 1][j]) {
      count++;
    }
    if (i>0 && j<this.width-1 && this.board[i - 1][j + 1]) {
      count++;
    }
    if (j>0 && this.board[i][j - 1]) {
      count++;
    }
    if (j<this.width-1 && this.board[i][j + 1]) {
      count++;
    }
    if (i<this.height-1 && this.board[i + 1][j - 1]) {
      count++;
    }
    if ( i<this.height-1 && this.board[i + 1][j]) {
      count++;
    }
    if (i<this.height-1 && j<this.width-1 && this.board[i + 1][j + 1]) {
      count++;
    }
    return count;
  }

  tick() {
    const newBoard = this.makeBoard();
    for(let i = 0; i < this.height; i++){
      for(let j = 0; j < this.width; j++){
        let count = this.livingNeighbors(i, j);
        if(this.board[i][j]){ 
          if(count >= 2 && count < 4){
            newBoard[i][j] = 1;
          } else {
            newBoard[i][j] = 0; 
          }
        } else { 
          if(count === 3){
            newBoard[i][j] = 1;
          } else {
            newBoard[i][j] = 0; 
          }
        }
      }
    }
    this.board = newBoard;
  }
}
