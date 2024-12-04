// Array of random 5-minute tasks
const tasks = [
    "Organize your phone apps for 5 minutes.",
    "Meditate for 5 minutes.",
    "Send a quick thank-you message to someone.",
    "Take a 5-minute walk outside.",
    "Declutter your desk for 5 minutes.",
    "Write a positive affirmation on a sticky note.",
    "Unsubscribe from 3 email lists.",
    "Set a 5-minute timer and clean one small area of your home.",
    "Do 5 minutes of stretching or yoga.",
    "Create a to-do list for the next day."
];

// Function to generate a random task
function generateTask() {
    const taskElement = document.getElementById("task");
    taskElement.innerText = tasks[Math.floor(Math.random() * tasks.length)];
}
