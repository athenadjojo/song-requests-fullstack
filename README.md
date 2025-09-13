# song-requests-fullstack

**Song Request WebApp**

A simple Next.js + Express webapp where users can submit their favorite songs to a queue and track how many songs have been added. Built as a practice project for learning React, Next.js, and Express.

Features:
- Add new songs with name, title, and artist
- Submissions are sent to a backend API at /requests
- Counter increments each time a song is successfully submitted
- Responsive form with validation (requires all fields)
- Styled with CSS modules

Tech Stack:
- Frontend: Next.js (React), CSS Modules
- Backend: Express.js (with Firebase)
- Language: JavaScript 

Project Structure:
- /app/components: React components (CounterCard, MyCard, NewSongForm, QueueTable)
- /app/components/*.module.css: Component-specific styles
- /app/page.js: Main entrypoint for the frontend
- /utils/FirebaseInit.js: Firebase config if used
- /index.js: Express backend (runs on localhost:8080)
