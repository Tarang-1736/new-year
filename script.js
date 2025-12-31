const message = "Loading something special...";
let index = 0;

function typeWriter() {
    const loadingText = document.getElementById('loading-text');
    if (index < message.length) {
        loadingText.textContent += message.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
    }
}

function showScreen(num) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    const target = document.getElementById(`screen-${num}`);
    target.classList.remove('hidden');
    target.classList.add('active');
}

function openNote() {
    document.querySelector('.envelope-wrapper').classList.toggle('open');
}

window.onload = () => {
    typeWriter();
    // Timing matches the 5.5s flight animation
    setTimeout(() => {
        showScreen(1);
    }, 5600);
};