let index = 0;

const show_slide = (i) => {
    let image = document.getElementsByClassName("image");
    let dot = document.getElementsByClassName("dot");

    index += i;

    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }

    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", " ");
    }

    if (index > image.length - 1)
        index = 0;

    if (index < 0)
        index = image.length - 1;

    image[index].style.display = "block";

    dot[index].className += " active";
}

window.addEventListener("load", show_slide(index));