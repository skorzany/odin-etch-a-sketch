function drawSquares(howMany, where) {
    const squareSize = where.offsetWidth/howMany;
    for (let i = 0; i < howMany**2; i++) {
        const square = document.createElement("div");
        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px; background-color: red;`);
        where.appendChild(square);
    }
}

function getUserInput() {
    let input = prompt("Enter a number between 1 and 100 (inclusive)", "16")
    while (isNaN(input) || !(Number.isInteger(+input)) || +input < 1 || 100 < +input) {
        alert("Please enter an integer in range 1-100 inclusive.");
        input = prompt("Enter a number between 1 and 100 (inclusive)", "16");
    }
    return input;
}

function test() {alert("O TY CHUJU BOBRZE");}

function main() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", test);
    const grid = document.querySelector(".grid");
    drawSquares(16, grid);
    // let input = getUserInput();
    // console.log(input);
}

main();