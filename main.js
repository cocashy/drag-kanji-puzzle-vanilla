let gameBoard;

let charList = [
  ["阿", "井", "鵜"],
  ["絵", "緒", "化"],
  ["樹", "紅", "毛"]
];

const width = 3;
const height = 3;
gameBoard = document.getElementById("game-board");
for (let i = 0; i < height; i++) {
  const row = document.createElement("div");
  row.className = "row";
  for (let j = 0; j < width; j++) {
    const box = document.createElement("div");
    box.className = "box";
    const char = document.createElement("div");
    char.innerText = charList[i][j];
    char.className = "char";
    char.draggable = "true";
    box.appendChild(char);
    row.appendChild(box);
  }
  gameBoard.appendChild(row);
}


let dragged;

document.addEventListener("dragstart", (e) => {
  dragged = e.target;
  dragged.style.opacity = 0.5;
});

document.addEventListener("dragend", (e) => {
  dragged.style.opacity = 1.0;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("dragenter", (e) => {
  let box;
  if (e.target.className == "box") {
    box = e.target;
  } else if (e.target.className == "char") {
    box = e.target.parentNode;
  } else {
    return;
  }
  box.style.background = "yellow";
});

document.addEventListener("dragleave", (e) => {
  let box;
  if (e.target.className == "box") {
    box = e.target;
  } else if (e.target.className == "char") {
    box = e.target.parentNode;
  } else {
    return;
  }
  box.style.background = "red";
});
