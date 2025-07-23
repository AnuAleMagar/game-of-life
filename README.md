# Game of Life in JS
Conway's Game of Life is a cellular automaton devised by mathematician John Conway. It's a zero-player game that evolves based on its initial state, following a set of simple rules.

This project is a simple implementation of the Game of Life using **HTML**, **CSS**, and **JavaScript**.

---

## How It Works

The game consists of a grid of cells that follow these rules:

1. **Underpopulation**: A live cell with fewer than 2 live neighbors dies.
2. **Survival**: A live cell with 2 or 3 live neighbors lives on to the next generation.
3. **Overpopulation**: A live cell with more than 3 live neighbors dies.
4. **Reproduction**: A dead cell with exactly 3 live neighbors becomes alive.

Each generation is calculated based on the previous one, and the game runs indefinitely or until paused.

---
