console.log("Hello world!")
const menuOpenButton = document.querySelector("#menu-open-button");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Toggle moblie menu visibility
    document.body.classList.toggle("show-moblie-menu");
})
