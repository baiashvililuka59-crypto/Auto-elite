const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

canvas.width = 400;
canvas.height = 600;

let player = { x: 180, y: 530, w: 40, h: 40, color: '#d4af37' };
let obstacles = [];
let score = 0;
let gameActive = true;

// მართვა თითით ან მაუსით
canvas.addEventListener('mousemove', (e) => {
    let rect = canvas.getBoundingClientRect();
    player.x = e.clientX - rect.left - player.w / 2;
});

function createObstacle() {
    let size = Math.random() * 40 + 20;
    obstacles.push({
        x: Math.random() * (canvas.width - size),
        y: -size,
        w: size,
        h: size,
        speed: Math.random() * 3 + 2
    });
}

function update() {
    if (!gameActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // მოთამაშის ხატვა
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.w, player.h);

    // დაბრკოლებების მართვა
    for (let i = 0; i < obstacles.length; i++) {
        let o = obstacles[i];
        o.y += o.speed;
        ctx.fillStyle = 'red';
        ctx.fillRect(o.x, o.y, o.w, o.h);

        // შეჯახების შემოწმება
        if (player.x < o.x + o.w && player.x + player.w > o.x &&
            player.y < o.y + o.h && player.y + player.h > o.y) {
            gameActive = false;
            alert("თამაში დასრულდა! შენი ქულაა: " + score);
            location.reload();
        }

        // ქულის მომატება
        if (o.y > canvas.height) {
            obstacles.splice(i, 1);
            score++;
            scoreElement.innerText = "ქულა: " + score;
        }
    }

    if (Math.random() < 0.02) createObstacle();
    requestAnimationFrame(update);
}

update();
