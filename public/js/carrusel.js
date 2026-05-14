document.addEventListener('DOMContentLoaded', () => {

    const track = document.getElementById('queTrack');
    const prev = document.querySelector('.que-prev');
    const next = document.querySelector('.que-next');
    if (!track || !prev || !next) return;

    const getCardWidth = () => {
        const card = track.querySelector('.que-card');
        if (!card) return 324;
        const style = getComputedStyle(track);
        const gap = parseInt(style.gap, 10) || 24;
        return card.offsetWidth + gap;
    };

    let autoTimer = null;

    const scrollStep = (dir = 1) => {
    const step = getCardWidth() * dir;
    const maxScroll = track.scrollWidth - track.clientWidth;
    let nextPos = track.scrollLeft + step;

    // Si vamos hacia la derecha y pasamos del final → volver al inicio
    if (dir > 0 && nextPos >= maxScroll - 10) {
    nextPos = maxScroll; // mostrar última tarjeta completa
    setTimeout(() => {
        track.scrollTo({ left: 0, behavior: 'smooth' });
    }, 400); // después de mostrarla, volver al inicio
}


    // Si vamos hacia la izquierda y pasamos del inicio → ir al final
    if (dir < 0 && nextPos < 0) {
        nextPos = maxScroll;
    }

    track.scrollTo({ left: nextPos, behavior: 'smooth' });
};


    const startAuto = () => {
        autoTimer = setInterval(() => scrollStep(1), 4000);
    };

    const stopAuto = () => {
        clearInterval(autoTimer);
        autoTimer = null;
        setTimeout(startAuto, 6000);
    };

    prev.addEventListener('click', () => { scrollStep(-1); stopAuto(); });
    next.addEventListener('click', () => { scrollStep(1); stopAuto(); });

    startAuto();
});
