const follower = document.getElementById('cursorFish');
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
let currentEasing = 0.08; // Starting speed

// Track mouse position
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animation loop
function animate() {
    // Randomly change the following speed
    if (Math.random() < 0.01) { // 1% chance per frame to change speed
        currentEasing = 0.03 + Math.random() * 0.15; // Random between 0.03 and 0.18
    }
    
    // Smooth follow with current speed
    currentX += (mouseX - currentX) * currentEasing;
    currentY += (mouseY - currentY) * currentEasing;
    
    // Apply position
    follower.style.left = currentX + 'px';
    follower.style.top = currentY + 'px';
    
    requestAnimationFrame(animate);
}

// Start the animation
animate();