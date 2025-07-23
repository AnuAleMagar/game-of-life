const width = 25;
const height = 20; 
let gameInterval = null;
let isPlaying = false;

const gol = new GameOfLife(width, height);

const tds = [];
const table = document.createElement("tbody");
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    td.dataset.row = h;
    td.dataset.col = w;
    tds.push(td);
    tr.append(td);
  }
  table.append(tr);
}
document.getElementById("board").append(table);
const paint = () => {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let index = i * width + j;
      if (gol.board[i][j]) {
        tds[index].classList.add("alive");
      } else {
        tds[index].classList.remove("alive");
      }
    }
  }
};
document.getElementById("board").addEventListener("click", (event) => {
  if (event.target.tagName === "TD") {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    gol.board[row][col] = gol.board[row][col] === 1 ? 0 : 1;
    paint();
  }
});

document.getElementById("step_btn").addEventListener("click", (event) => {
  gol.tick();
  paint();
});

document.getElementById("play_btn").addEventListener("click", (event) => {
  if (!isPlaying) {
    gameInterval = setInterval(() => {
      gol.tick();
      paint();
    }, 500);
    isPlaying = true;
  } else {
    clearInterval(gameInterval);
    isPlaying = false;
  }
});

document.getElementById("random_btn").addEventListener("click", (event) => {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      gol.board[i][j] = Math.random() < 0.3 ? 1 : 0; 
    }
  }
  paint();
});

document.getElementById("clear_btn").addEventListener("click", (event) => {
  if (isPlaying) {
    clearInterval(gameInterval);
    isPlaying = false;
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      gol.board[i][j] = 0;
    }
  }
  paint();
});
