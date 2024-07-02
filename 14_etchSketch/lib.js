let container = document.getElementById("container");

const createSquares = function(count) {
  for (let i = 0; i < count; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
};

let time = 256;
createSquares(time);

const updateSquares = function() {
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("mouseover", (e) => {
      square.style.backgroundColor = "blue";
    });
  });
};

updateSquares();

let btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", (e) => {
  time = 256;
  container.innerHTML = '';
  createSquares(time);
  document.documentElement.style.setProperty('--box-value', Math.sqrt(time));
  updateSquares();
});

let btnSize = document.getElementById("change-grid");
btnSize.addEventListener("click", (e) => {
  let input = prompt("What size of grid do you want?");
  time = parseInt(input);
  container.innerHTML = '';
  createSquares(time);
  document.documentElement.style.setProperty('--box-value', Math.sqrt(time));
  updateSquares();
});
