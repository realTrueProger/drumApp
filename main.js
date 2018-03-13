function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function play(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function playClick(e) {
    const audio = document.querySelector(`audio[data-key="${this.dataset.key}"`);
    const key = document.querySelector(`.key[data-key="${this.dataset.key}"`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//keys.forEach(key => key.addEventListener('click', playClick));
keys.forEach(key => key.addEventListener('touchend', playClick));
window.addEventListener('keydown', play);