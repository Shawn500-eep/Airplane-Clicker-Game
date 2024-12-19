// Game State Variables
let airplaneCount = 0;
let airplanesPerClick = 1;
let jetsOwned = 0;
let bombsOwned = 0;
let fleetOwned = 0;

// Elements
const airplaneCountElement = document.getElementById('airplaneCount');
const clickButton = document.getElementById('clickButton');
const buyJetButton = document.getElementById('buyJet');
const buyBombButton = document.getElementById('buyBomb');
const buyFleetButton = document.getElementById('buyFleet');
const messageElement = document.getElementById('message');
const effectsContainer = document.getElementById('effectsContainer');

// Event Listeners for Buttons
clickButton.addEventListener('click', () => {
    airplaneCount += airplanesPerClick;
    updateAirplaneCount();
    displayMessage('You earned an Airplane!');
    showEffect('plane'); // Show a plane animation when clicked
});

buyJetButton.addEventListener('click', () => {
    if (airplaneCount >= 10) {
        airplaneCount -= 10;
        jetsOwned++;
        airplanesPerClick += 2; // Jets increase planes per click
        updateAirplaneCount();
        displayMessage('You bought a Jet!');
        showEffect('jet'); // Show a jet animation
    } else {
        displayMessage('You need 10 Airplanes to buy a Jet.');
    }
});

buyBombButton.addEventListener('click', () => {
    if (airplaneCount >= 50) {
        airplaneCount -= 50;
        bombsOwned++;
        airplanesPerClick += 5; // Bombs increase planes per click
        updateAirplaneCount();
        displayMessage('You bought a Bomb!');
        showEffect('bomb'); // Show a bomb animation
    } else {
        displayMessage('You need 50 Airplanes to buy a Bomb.');
    }
});

buyFleetButton.addEventListener('click', () => {
    if (airplaneCount >= 100) {
        airplaneCount -= 100;
        fleetOwned++;
        airplanesPerClick += 10; // Fleet increases planes per click
        updateAirplaneCount();
        displayMessage('You bought a Fleet of Planes!');
        showEffect('fleet'); // Show a fleet animation
    } else {
        displayMessage('You need 100 Airplanes to buy a Fleet.');
    }
});

// Update the displayed airplane count
function updateAirplaneCount() {
    airplaneCountElement.textContent = airplaneCount;
    checkUpgradeButtons();
}

// Display messages for feedback
function displayMessage(message) {
    messageElement.textContent = message;
    setTimeout(() => {
        messageElement.textContent = '';
    }, 2000);
}

// Check which upgrade buttons are enabled/disabled
function checkUpgradeButtons() {
    buyJetButton.disabled = airplaneCount < 10;
    buyBombButton.disabled = airplaneCount < 50;
    buyFleetButton.disabled = airplaneCount < 100;
}

// Show the animation for the upgrades
function showEffect(type) {
    const effect = document.createElement('img');
    effect.classList.add('effect');
    effect.src = `${type}.png`;  // Assuming image names are 'jet.png', 'bomb.png', 'fleet.png'
    effectsContainer.appendChild(effect);

    // Remove the effect after animation completes
    setTimeout(() => {
        effectsContainer.removeChild(effect);
    }, 2000);
}

// Initialize
checkUpgradeButtons();
