// Character array with pairs
const characters = [
    ["Brittani 'Beat Box' Bowen", "Michelle Monroe"],
    ["Anita Hernandez", "Isa Valencia"],
    ["Josef 'Brosef' Hooper", "Oliver Swift"],
    ["Jaden Jones", "Sammy Angler"],
    ["Persephone Puleri", "Stephanie Richter"],
    ["Dan Nguyen, M.D.", "Father Warren Leung"]
];

// Initialize arrays for tracking used and remaining characters
let usedCharacters = [];
let remainingCharacters = [...characters];
let cycleCompleted = false;

// DOM elements
const characterDisplay = document.getElementById('characterDisplay');
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');

// Event listeners for buttons
generateBtn.addEventListener('click', generateCharacter);
resetBtn.addEventListener('click', reset);

// Function to generate a random character pair
function generateCharacter() {
    if (remainingCharacters.length === 0) {
        if (cycleCompleted) {
            message.textContent = "The cycle is complete. Click Restart.";
        } else {
            message.textContent = "The cycle is almost complete. Click Restart to start over.";
        }
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
    const [character1, character2] = remainingCharacters.splice(randomIndex, 1)[0];

    usedCharacters.push([character1, character2]);

    // Display the characters
    characterDisplay.innerHTML = `<p>Character Pair: <strong>${character1}</strong> & <strong>${character2}</strong></p>`;

    // Check if the cycle is complete
    if (remainingCharacters.length === 0) {
        cycleCompleted = true;
        message.textContent = "You have seen all characters. Click Restart to go again!";
    }
}

// Function to generate a random character
function generateCharacter() {
    if (remainingCharacters.length === 0) {
        if (cycleCompleted) {
            message.textContent = "The cycle is complete. Click Restart.";
        } else {
            message.textContent = "The cycle is almost complete. Click Restart to start over.";
        }
        return;
    }

    // Select a random pair of characters
    const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
    const characterPair = remainingCharacters.splice(randomIndex, 1)[0];

    usedCharacters.push(characterPair);

    // Randomly pick one name from the pair
    const randomName = characterPair[Math.floor(Math.random() * characterPair.length)];

    // Display the randomly selected name
    characterDisplay.innerHTML = `<p>Character: <strong>${randomName}</strong></p>`;

    // Check if the cycle is complete
    if (remainingCharacters.length === 0) {
        cycleCompleted = true;
        message.textContent = "You have seen all characters. Click Restart to go again!";
    }
}
// Function to reset the generator
function reset() {
    usedCharacters = [];
    remainingCharacters = [...characters];
    cycleCompleted = false;
    message.textContent = "";
    characterDisplay.innerHTML = "<p>Select 'Generate' to get a character pair.</p>";
}