// Pull in Canvas Element and Set Size
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Abstract Away Arc Parameters
var radius = 4;
var tau = Math.PI*2;

// Draw Path Functions
var mouseIsDown = false;
function startPath() {
    mouseIsDown = true;
}
function endPath() {
    mouseIsDown = false;
    ctx.closePath();
    ctx.beginPath();
}

// Draw a Path
function drawPath(e) {
    ctx.lineWidth = radius * 2;
    if (mouseIsDown) {
        // End Line Between Dots
        ctx.lineTo(e.offsetX, e.offsetY);
        // Render 
        ctx.stroke();
        ctx.strokeStyle = randomColor();
        // Draw a Dot
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, radius, 0, tau);
        ctx.fill();
        ctx.fillStyle = randomColor();
        // Start Line Between Dots
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }
}

// Event listeners
canvas.addEventListener('mousedown', startPath);
canvas.addEventListener('mouseup', endPath);
canvas.addEventListener('mousemove', drawPath);
