var rec = document.querySelector("#rec")
var offsets = rec.getBoundingClientRect();

rec.addEventListener("mousemove", (details) => {
    let mousePos = details.clientX - offsets.left;
    if (mousePos < offsets.width / 2) {
        rec.style.backgroundColor = `rgb(255,${mousePos},${mousePos})`;
    }

    else {
        mousePos = offsets.width - mousePos;
        rec.style.backgroundColor = `rgb(${mousePos},${mousePos},255)`;
    }
})

rec.addEventListener("mouseleave", () => {
    rec.style.backgroundColor = "white";
})
