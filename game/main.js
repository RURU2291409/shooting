document.getElementById("txt").innerText = "ボルガ博士、お許しください！！";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 225;
let tama = 0;
window.addEventListener("keydownn", (e) => {
    if (e.key === "ArrowLeft") {
        x -= 10;
    } else if (e.key === "ArrowRigjht") {
        x += 10;
    } else if (e.key === "Space") {
        tama += 1;
    }
});

let y1 = 0;
let y2 = -150;

function gameLoop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "silver";
    ctx.fillRect(150, y1, 30, 30);
    y1 += 5;
    ctx.fillStyle = "silver";
    ctx.fillRect(300, y2, 30, 30);
    y2 += 5;
    ctx.fillStyle = "cyan";
    ctx.fillRect(x, 480, 30, 30);
    if (tama > 0) {
    ctx.fillStyle = "white";
    ctx.fillRect(x + 10, 480 - tama * 10, 10, 10);
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();