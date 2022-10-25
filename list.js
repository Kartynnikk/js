// document.querySelector("#eraser").addEventListener(“click” () => {} )

const input = document.getElementsByClassName("input");

const addPoint = () => {
    const point = document.createElement("h2");
    point.textContent = input.textContent;

    point.addEventListener("click", getLineThrough);

    const getLineThrough = () => (point.style.textDecoration != "line-trough") ? point.style.textDecoration = "line-trough" : point.style.textDecoration = "none";
}

const enter = (event) => event.key === "Enter" ? addPoint() : input;

input.addEventListener("keydown", enter());