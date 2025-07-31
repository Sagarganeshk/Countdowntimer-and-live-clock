# ⏳ Countdown Timer + Live Clock Web App

This is a sleek, customizable countdown timer and live digital clock built using **HTML**, **CSS**, and **JavaScript**. Designed with beginner developers in mind — yet packed with powerful features, responsive UI, and theme personalization!

---

## ✨ Features

🔵 **Live Clock** — Real-time updating every second  
🔵 **Countdown Timer** — Set your own event with date/time  
🔵 **Event Name** — Add custom titles like "New Year", "Exam", etc.  
🔵 **"Time’s Up" Notification** — With 🎉 animation and sound  
🔵 **Dark/Light Mode** — Toggle with smooth transition  
🔵 **Theme Styles** — Neon, Pastel, Retro (only active in Dark Mode)  
🔵 **Countdown History** — Stores up to 5 past countdowns  
🔵 **Share Button** — Copies countdown text to clipboard  
🔵 **Cancel Countdown** — Reset anytime before it ends  
🔵 **Mobile Responsive** — Works on all screen sizes  
🔵 **No Frameworks** — 100% Vanilla JavaScript, HTML, and CSS

---

🌈 Theme Customization
The app supports Neon, Pastel, and Retro color presets.

These presets only activate while in Dark Mode (light mode keeps a clean minimal look).

Change themes anytime with one click.

🧠 How It Works (Under the Hood)
🕒 Live clock uses setInterval() and Date.toLocaleTimeString()

⏳ Countdown calculates time difference using Date.now() and target time

🎉 When countdown ends, it triggers:

Sound (audio.play())

Alert message

"Time's up!" screen text

💾 localStorage is used for:

Saving the latest countdown event and time

Storing last 5 countdowns in history

📱 UI is built using CSS Flexbox and CSS Variables for theming

🧪 Edge Case Handling
✅ Alerts when date/time field is empty

✅ Input auto-fills with previously saved countdown if not expired

✅ History maxes at 5 entries

✅ Cancelling a countdown clears the timer and UI safely

🎯 Use Cases
🔔 Event Reminders

🧘 Meditation Timers

💻 Productivity Sprints

⏰ Personal Alarms

📆 Countdown for exams, interviews, product launches, etc.

🤝 Contributing
Want to improve this project? Feel free to:

Add more theme styles (like cyberpunk, rainbow, galaxy)

Add a circular/graphical countdown visual

Add ability to save events permanently

Add time zone selection support

📜 License
This project is licensed under the MIT License.

