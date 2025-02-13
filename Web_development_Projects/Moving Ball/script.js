const btn = document.querySelector(".btn");
btn_flag = true;
const ball = document.querySelector(".ball");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let x = 70;
let dx = 2;
let y = 70;
let dy = 2;
const ballRadius = 52;
let timeinterval;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = "hsl(54, 91%, 71%)";
    ctx.fill();
    ctx.strokeStyle = "hsl(109, 79%, 81%)";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
}


btn.addEventListener("click", function () {
    if (btn_flag) {
        btn.style.backgroundColor = "red";
        btn.innerHTML = "STOP";
        // ball.style.animation = "move linear 3s infinite";
        btn_flag = false;
        timeinterval = setInterval(draw, 6);

    }
    else {
        btn.style.backgroundColor = "hsl(113, 75%, 50%)";
        btn.innerHTML = "GO";
        // ball.style.animation = "none";
        btn_flag = true;
        clearInterval(timeinterval);

    }
})

drawBall();

