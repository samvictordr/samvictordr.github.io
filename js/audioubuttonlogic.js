const audio = document.getElementById('audioPlayer');
        const playPauseButton = document.getElementById('playPauseButton');

        playPauseButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseButton.textContent = 'Pause';
            } else {
                audio.pause();
                playPauseButton.textContent = 'Play';
            }
        });