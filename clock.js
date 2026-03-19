// clock.js - simplified version
function updateAnalogClock() {
    const now = new Date();
    
    // Get current time
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate degrees
    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minuteDeg = (minutes * 6) + (seconds * 0.1);
    const secondDeg = seconds * 6;
    
    // Get the hand elements
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
    
    // Apply rotations if elements exist
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    if (secondHand) secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Make sure the DOM is fully loaded before trying to update the clock
document.addEventListener('DOMContentLoaded', function() {
    // Update clock immediately
    updateAnalogClock();
    
    // Update clock every second
    setInterval(updateAnalogClock, 1000);
});