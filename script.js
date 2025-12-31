document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    generateStars();
    createSteam();
    updateClock();
});

function nextScene(num) {
    document.querySelectorAll('.scene').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    const next = document.getElementById(`scene-${num}`);
    next.classList.remove('hidden');
    setTimeout(() => next.classList.add('active'), 50);
}

function toggleSecret() {
    const note = document.getElementById('secret-note');
    note.classList.toggle('hidden');
}

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').innerText = `${h}:${m}:${s}`;
    
    // Auto-trigger at Midnight
    if (h === '00' && m === '00' && s === '00') { launchCelebration(); }
    setTimeout(updateClock, 1000);
}

function setMood(mood) {
    const resp = document.getElementById('mood-response');
    const app = document.getElementById('app-container');
    const reactions = {
        chaos: "Villain era activated. Let's cause problems. 😈",
        chill: "Lofi vibes only. Staying peaceful. ☕",
        happy: "Manifesting pure sunshine for you. ✨"
    };
    const colors = { chaos: '#2a0a15', chill: '#0a1a1a', happy: '#1a1a05' };
    resp.innerText = reactions[mood];
    app.style.backgroundColor = colors[mood];
}

function createSteam() {
    const container = document.getElementById('steam-container');
    setInterval(() => {
        const s = document.createElement('div');
        s.className = 'steam';
        s.style.width = Math.random() * 50 + 30 + 'px';
        s.style.height = s.style.width;
        s.style.left = Math.random() * 100 + '%';
        container.appendChild(s);
        setTimeout(() => s.remove(), 6000);
    }, 1000);
}

function meow() {
    const bubble = document.getElementById('meow-bubble');
    bubble.style.opacity = '1';
    setTimeout(() => bubble.style.opacity = '0', 2000);
}

function generateStars() {
    const container = document.getElementById('stars');
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('span');
        const size = Math.random() * 2 + 'px';
        star.style.width = size; star.style.height = size;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        container.appendChild(star);
    }
}

function launchCelebration() {
    document.body.classList.add('firework-flash');
    nextScene(4);
    startFireworks();
    document.getElementById('app-container').style.background = "radial-gradient(circle, #1a1a2e 0%, #000 100%)";
    setTimeout(() => document.body.classList.remove('firework-flash'), 600);
}

function startFireworks() {
    const container = document.getElementById('fireworks-container');
    const colors = ['#fcd34d', '#fb7185', '#60a5fa', '#34d399', '#a78bfa'];
    setInterval(() => {
        const f = document.createElement('div');
        f.className = 'firework';
        f.style.left = Math.random() * 100 + 'vw';
        f.style.top = Math.random() * 100 + 'vh';
        f.style.setProperty('--c', colors[Math.floor(Math.random() * colors.length)]);
        container.appendChild(f);
        setTimeout(() => f.remove(), 2500);
    }, 500);
}

const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let playing = false;

musicBtn.addEventListener('click', () => {
    playing ? audio.pause() : audio.play();
    document.getElementById('music-icon').setAttribute('data-lucide', playing ? 'music' : 'pause');
    playing = !playing;
    lucide.createIcons();
});