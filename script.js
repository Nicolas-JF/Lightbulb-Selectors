// Log a message to verify the script works
console.log("Script loaded!");

// Select each lightbulb and store in variables
const lightbulb1 = document.querySelector('#lightbulb1');
const lightbulb2 = document.querySelector('#lightbulb2');
const lightbulb3 = document.querySelector('#lightbulb3');

// Select the h3 element with class="subtitle"
const subtitle = document.querySelector('.subtitle');

// Create a variable called count and set the initial value to 0
let count = 0;

// Function to handle lightbulb clicks
function handleLightbulbClick(lightbulb) {
    // Increase count by 1
    count += 1;

    // Update the subtitle with the new count
    subtitle.textContent = `You've clicked the lights ${count} times`;

    // Toggle the "active" class
    lightbulb.classList.toggle("active");
}

// Add event listeners to each lightbulb
lightbulb1.addEventListener('click', function() {
    handleLightbulbClick(lightbulb1);
});
lightbulb2.addEventListener('click', function() {
    handleLightbulbClick(lightbulb2);
});
lightbulb3.addEventListener('click', function() {
    handleLightbulbClick(lightbulb3);
});
