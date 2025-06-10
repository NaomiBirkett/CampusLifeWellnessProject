// Example JavaScript logic
document.getElementById('nextMeal').textContent = "Grilled Chicken Salad";

// AI Eating Coach: Suggest a random healthy eating tip
const tips = [
  "Remember to drink plenty of water throughout the day.",
  "Include a variety of colorful vegetables in your meals.",
  "Choose whole grains over refined grains for more fiber.",
  "Eat slowly and stop when you feel full.",
  "Plan your meals ahead to avoid unhealthy choices.",
  "Snack on fruits or nuts instead of processed foods.",
  "Balance your plate with protein, carbs, and healthy fats.",
  "Limit sugary drinks and opt for water or herbal tea."
];

function showRandomTip() {
  const suggestionDiv = document.querySelector('.suggestions');
  if (suggestionDiv) {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    suggestionDiv.textContent = tip;
  }
}

showRandomTip();

// Level system logic
let points = 0;
let level = 1;
const pointsPerLevel = 100;

function updateLevelDisplay() {
  document.getElementById('userLevel').textContent = level;
  document.getElementById('userPoints').textContent = points;
}

function completeChallenge() {
  points += 25; // Award 25 points per challenge
  if (points >= pointsPerLevel) {
    level += 1;
    points = points - pointsPerLevel;
  }
  updateLevelDisplay();
}

document.getElementById('completeChallengeBtn').addEventListener('click', completeChallenge);

// Initialize display on load
updateLevelDisplay();

// RTL language support
const rtlLangs = ['ar', 'he', 'fa', 'ur'];

function setDirectionByLang(lang) {
  if (rtlLangs.includes(lang)) {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
}

// Example: Listen for a custom language change event
window.addEventListener('languageChange', (e) => {
  setDirectionByLang(e.detail.lang);
});

// Optionally, set direction on initial load based on navigator.language
setDirectionByLang((navigator.language || 'en').split('-')[0]);

// User Preferences Form Logic
const preferencesForm = document.getElementById('preferencesForm');
if (preferencesForm) {
  preferencesForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mealTime = document.getElementById('mealTimePref').value;
    const diet = document.getElementById('dietPref').value;
    const allergies = document.getElementById('allergiesPref').value;

    // Save preferences to localStorage (optional)
    localStorage.setItem('mealTimePref', mealTime);
    localStorage.setItem('dietPref', diet);
    localStorage.setItem('allergiesPref', allergies);

    // Update meal time display if set
    if (mealTime) {
      document.getElementById('mealTime').textContent = mealTime;
    }
    // Optionally, show a confirmation or update recipes based on preferences
    alert('Preferences saved!');
  });

  // Load saved preferences on page load
  window.addEventListener('DOMContentLoaded', function () {
    const mealTime = localStorage.getItem('mealTimePref');
    const diet = localStorage.getItem('dietPref');
    const allergies = localStorage.getItem('allergiesPref');
    if (mealTime) {
      document.getElementById('mealTimePref').value = mealTime;
      document.getElementById('mealTime').textContent = mealTime;
    }
    if (diet) document.getElementById('dietPref').value = diet;
    if (allergies) document.getElementById('allergiesPref').value = allergies;
  });
}
