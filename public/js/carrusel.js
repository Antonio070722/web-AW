// Carrusel automático mejorado (preserva funcionalidad original)
        (function () {
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
            let autoTimer;
            const scrollStep = (dir = 1) => {
                const step = getCardWidth() * dir;
                const maxScroll = track.scrollWidth - track.clientWidth;
                let nextPos = track.scrollLeft + step;
                if (dir > 0 && nextPos >= maxScroll - 5) nextPos = 0;
                if (dir < 0 && nextPos <= 0) nextPos = maxScroll;
                track.scrollTo({ left: nextPos, behavior: 'smooth' });
            };
            const stopAuto = () => {
                clearInterval(autoTimer);
                setTimeout(() => { autoTimer = setInterval(() => scrollStep(1), 4000); }, 6000);
            };
            prev.addEventListener('click', () => { scrollStep(-1); stopAuto(); });
            next.addEventListener('click', () => { scrollStep(1); stopAuto(); });
            autoTimer = setInterval(() => scrollStep(1), 4000);
        })();