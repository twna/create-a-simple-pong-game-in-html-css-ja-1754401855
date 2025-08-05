// Assuming we have an HTML canvas with id 'gameCanvas'
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ball object
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  dx: 2, // Change in x (speed on the x-axis)
  dy: -2, // Change in y (speed on the y-axis)
  color: 'blue'
};

// Function to draw the ball on the canvas
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

// Function to update the ball's position and handle collisions
function updateBallPosition() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball at its new position
  drawBall();

  // Update the ball's position
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Collision detection with the walls
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx; // Reverse the horizontal direction
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy = -ball.dy; // Reverse the vertical direction
  }
}

// Function to start the animation
function startAnimation() {
  setInterval(updateBallPosition, 10); // Update the ball's position every 10ms
}

// Start the ball movement
startAnimation();
{
  "checklist": [
    {"task": "Create canvas and context", "completed": true},
    {"task": "Define ball object with properties", "completed": true},
    {"task": "Implement drawBall function", "completed": true},
    {"task": "Implement updateBallPosition function", "completed": true},
    {"task": "Handle collision detection", "completed": true},
    {"task": "Start the animation", "completed": true}
  ]
}