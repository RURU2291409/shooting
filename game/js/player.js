const playerImage = new Image();
playerImage.src = "komachi.png";

export const player = {
    x: 0,
    y: 0,
    width: 70,
    height: 70,
    color: "cyan",
    life: 3,
    score: 0,
};

export function initPlayer(canvas) {
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 60;
    console.log("Player:", player);
}

export function drawPlayer(ctx) {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}