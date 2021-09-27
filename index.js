



  // Your code here
// Declaration and color of Dodger
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

// Move-left function
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
//   if statement prevents dodger from moving off the gameboard
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

// Adding the event-listener
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


// move-right function
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
//      if statement to prevent dodger from moving off the gameboard
    if (right < 360) {
    dodger.style.left = `${right + 5}px`;
  }
}


// move-right event listener
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });