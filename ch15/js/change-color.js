
let heading = document.querySelector("#heading");
let confirm = true;
console.log(heading);
heading.onclick = function () {
    if (confirm) {
        heading.style.color = "blue";
        confirm = false;
    } else {
        heading.style.color = "black";
        confirm = true;
    }
}
