// SELECTORS

// User input
const userInput = document.querySelector("#user-input");
// Side bar
const sideBar = document.querySelector(".side-bar");
// Side bar toggle | Open
// const btn_openSideBar = document.querySelector(".");
// Side bar toggle | Close
const btn_closeSideBar = document.querySelector(".close-btn-wrapper");
// Side bar header
const sideBarHeader = document.querySelector(".side-bar-header");
// Side bar content
const sideBarContent = document.querySelector(".side-bar-content");
// Profile info
const profileInfo = document.querySelector(".profile-info");





// ADJUST INPUT BOX HEIGHT WHEN INPUT IS > 200
function fn_ADJUST_INPUT_BOX_HEIGHT() {
    console.log(userInput.value.length);

    userInput.style.height = "200px";

}

// OPEN SIDE BAR
function fn_OPEN_SIDE_BAR() {
    sideBar.classList.toggle("collapsed");
    sideBar.classList.toggle("hidden");
    sideBarHeader.classList.toggle("hidden");
    sideBarContent.classList.toggle("hidden");

    setTimeout(() => {
        profileInfo.classList.toggle("hidden");
    }, 150);
}

// CLOSE SIDE BAR
function fn_CLOSE_SIDE_BAR() {
    sideBar.classList.toggle("collapsed");
    sideBar.classList.toggle("hidden");
    sideBarHeader.classList.toggle("hidden");
    sideBarContent.classList.toggle("hidden");
    profileInfo.classList.toggle("hidden");
}

// REVEAL CONTENT ON SCROLL
function fn_REVEAL() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", fn_REVEAL);