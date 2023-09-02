// SELECTORS
const userInput = document.querySelector("#user-input");


// ADJUST INPUT BOX HEIGHT WHEN INPUT IS > 200
function ADJUST_INPUT_BOX_HEIGHT() {
    console.log(userInput.value.length);

    userInput.style.height = "200px";

}