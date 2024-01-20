// Arrow left/right to move ball left and right
const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);

let position = 0;
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 100;
  }
  if (e.code === "ArrowRight") {
    position = position + 100;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
}

// // Arrow up/down to move ball up and down
// const ball = document.getElementById("ball");
// document.addEventListener("keydown", handleKeyPress);

// let position = 0;
// function handleKeyPress(e) {
//   if (e.code === "ArrowUp") {
//     position = position - 100;
//   }
//   if (e.code === "ArrowDown") {
//     position = position + 100;
//   }
//   if (position < 0) {
//     position = 0;
//   }
//   refresh(); //update the ball's position
// }
// function refresh() {
//   ball.style.top = position + "px";
// }
