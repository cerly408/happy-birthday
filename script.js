document.addEventListener('DOMContentLoaded', function() {
    const screenContent = document.getElementById('screen-content');
    const messageBtn = document.getElementById('message-btn');
    const galleryBtn = document.getElementById('gallery-btn'); // Dapatkan referensi tombol Gallery
    const musicBtn = document.getElementById('music-btn');
    const tetrisBtn = document.getElementById('tetris-btn');
    const startBtn = document.getElementById('start-btn');

    let isStarted = false;

    screenContent.textContent = "Happy Birthday!\n\nPress Start Button";

    function simulateLoading() {
        let progress = 0;
        screenContent.textContent = "READY!...\n\n[        ]";
        const loadingInterval = setInterval(() => {
            progress += 10;
            if (progress <= 100) {
                const filled = Math.floor(progress / 10);
                const bar = "[" + "#".repeat(filled) + " ".repeat(10 - filled) + "]";
                screenContent.textContent = `READY!...\n\n${bar} ${progress}%`;
            } else {
                clearInterval(loadingInterval);
                screenContent.textContent = "Welcome!\n\nSelect an option:";
                isStarted = true;
            }
        }, 200);
    }

    startBtn.addEventListener('click', function() {
        if (!isStarted) {
            simulateLoading();
        } else {
            screenContent.textContent = "Game already started!\n\nSelect an option:";
        }
    });

    // Event Listener untuk tombol MESSAGE (sudah ada)
    messageBtn.addEventListener('click', function() {
        if (isStarted) {
            window.location.href = 'message.html';
        } else {
            screenContent.textContent = "Press START first!";
        }
    });

    // --- PERUBAHAN BARU DI SINI UNTUK TOMBOL GALLERY ---
    galleryBtn.addEventListener('click', function() {
        if (isStarted) {
            window.location.href = 'gallery.html'; // Mengarahkan ke halaman galeri baru
        } else {
            screenContent.textContent = "Press START first!";
        }
    });
    // --- AKHIR PERUBAHAN ---

    musicBtn.addEventListener('click', function() {
        if (isStarted) {
            screenContent.textContent = "Playing 'Birthday Song'...\n\n♪ Happy B-day to you ♪";
        } else {
            screenContent.textContent = "Press START first!";
        }
    });

    tetrisBtn.addEventListener('click', function() {
        if (isStarted) {
            screenContent.textContent = "Loading Tetris...\n\n(Game not implemented)";
        } else {
            screenContent.textContent = "Press START first!";
        }
    });

    const dPadButtons = document.querySelectorAll('.d-pad-btn');
    dPadButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (isStarted) {
                const direction = btn.classList[1];
                screenContent.textContent = `D-Pad: You pressed ${direction.toUpperCase()}`;
            } else {
                screenContent.textContent = "Press START first!";
            }
        });
    });

    const selectBtn = document.getElementById('select-btn');
    selectBtn.addEventListener('click', function() {
        if (isStarted) {
            screenContent.textContent = "SELECT button pressed.\n\n(No function)";
        } else {
            screenContent.textContent = "Press START first!";
        }
    });
});