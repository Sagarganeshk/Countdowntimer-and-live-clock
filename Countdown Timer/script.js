// Live Clock
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById('live-clock').textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);

  const inputTime = document.getElementById('datetime-picker').value;
  const eventName = document.getElementById('event-name').value || "Countdown";

  const targetTime = new Date(inputTime);
  if (isNaN(targetTime)) {
    alert("Please select a valid date and time!");
    return;
  }

  // Save to localStorage
  localStorage.setItem("countdownTime", targetTime);
  localStorage.setItem("countdownEvent", eventName);

  addToHistory(eventName, targetTime);

  document.getElementById('countdown-display').classList.add('animate');

  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeLeft = targetTime - now;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown-display').classList.remove('animate');
      document.getElementById('countdown-display').textContent = "🎉 Time's up!";
      document.getElementById('alarm-sound').play();
      alert("🎉 Countdown complete!");
    } else {
      const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

      document.getElementById('countdown-display').textContent =
        `${eventName}: ${hours}:${minutes}:${seconds}`;
    }
  }, 1000);
}

// Load saved countdown and history
window.onload = () => {
  const savedTime = localStorage.getItem("countdownTime");
  const savedEvent = localStorage.getItem("countdownEvent");
  const savedHistory = JSON.parse(localStorage.getItem("countdownHistory") || "[]");

  savedHistory.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.event} - ${new Date(item.time).toLocaleString()}`;
    document.getElementById("history-list").appendChild(li);
  });

  if (savedTime && new Date(savedTime) > new Date()) {
    document.getElementById('datetime-picker').value = savedTime.slice(0, 16);
    document.getElementById('event-name').value = savedEvent;
    startCountdown();
  }
};

// Toggle Light/Dark theme
function toggleTheme() {
  document.body.classList.toggle('light');

  // Reset primary color when switching themes
  if (document.body.classList.contains('light')) {
    document.documentElement.style.setProperty('--primary-color', '#111');
  } else {
    document.documentElement.style.setProperty('--primary-color', '#00f2ff');
  }
}

// Only apply theme styles in dark mode
function setTheme(style) {
  if (document.body.classList.contains('light')) return;

  let color;
  switch (style) {
    case 'neon':
      color = '#00f2ff';
      break;
    case 'pastel':
      color = '#ffb6c1';
      break;
    case 'retro':
      color = '#ffcc00';
      break;
    default:
      color = '#00f2ff';
  }
  updateThemeColor(color);
}

// Apply color to the --primary-color variable
function updateThemeColor(color) {
  document.documentElement.style.setProperty('--primary-color', color);
}

// Preset event buttons
function setPreset(name, datetimeValue) {
  document.getElementById('event-name').value = name;
  document.getElementById('datetime-picker').value = datetimeValue;
}

// Share the countdown text
function shareCountdown() {
  const name = document.getElementById('event-name').value || "My Event";
  const time = document.getElementById('countdown-display').textContent;

  const text = `⏳ Countdown for "${name}": ${time}`;
  navigator.clipboard.writeText(text).then(() => {
    alert("Countdown copied to clipboard!");
  });
}

// Add countdown to local history (max 5)
function addToHistory(event, time) {
  const history = JSON.parse(localStorage.getItem("countdownHistory") || "[]");
  history.unshift({ event, time });
  localStorage.setItem("countdownHistory", JSON.stringify(history.slice(0, 5)));
}

function cancelCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;

  // Clear saved data
  localStorage.removeItem("countdownTime");
  localStorage.removeItem("countdownEvent");

  // Stop animation and reset display
  const display = document.getElementById('countdown-display');
  display.classList.remove('animate');
  display.textContent = "⏳ Countdown canceled.";

  // Optional: also reset input fields
  document.getElementById('event-name').value = '';
  document.getElementById('datetime-picker').value = '';
}
