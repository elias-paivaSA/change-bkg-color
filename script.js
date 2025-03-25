const body = document.getElementById("body");
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");

btn.addEventListener("click", () => {
    body.style.backgroundColor = 'rgb(' + [red.value,blue.value,green.value].join(',') + ')'
});

reset.addEventListener("click", () => {
    body.style.backgroundColor = 'rgb(' + [255,255,255].join(',') + ')';
});