document.addEventListener('DOMContentLoaded', function() {
    const messageContent = document.getElementById('message-content');
    const skipBtn = document.getElementById('skip-btn');
    const nextBtn = document.getElementById('next-btn');
    const backBtn = document.getElementById('back-btn');

    const messages = [
        "Hi Novi,              Happy Birthday!       ini  hadiah ucapan yang aku bikin buat neng semoga suka💜 ",
        " Semoga panjang umur sehat selalu dan apa yang neng impikan tercapai, semoga bertambahnya usia kebahagian bertambah, jangan ngerasa ngga ada yang sayang sama neng banyak kok yang sayang sama neng terutama aku hahaha. Pokok kita tetep sahabatan sampe meninggoy maaf yahh kadang suka bikin emosi. udah neng da te bisa panjang2 ieu n -__-pokonya doa terbaik lovee youu  ",
    ];

    let currentMessageIndex = 0;
    // Fungsi untuk menampilkan pesan
    function displayMessage(index) {
        messageContent.textContent = messages[index];
        // Sembunyikan tombol NEXT jika ini pesan terakhir
        if (index === messages.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
    }

    // Tampilkan pesan pertama saat halaman dimuat
    displayMessage(currentMessageIndex);

    // Event Listener untuk tombol SKIP
    skipBtn.addEventListener('click', function() {
        // Langsung ke pesan terakhir
        currentMessageIndex = messages.length - 1;
        displayMessage(currentMessageIndex);
    });

    // Event Listener untuk tombol SELANJUTNYA
    nextBtn.addEventListener('click', function() {
        if (currentMessageIndex < messages.length - 1) {
            currentMessageIndex++;
            displayMessage(currentMessageIndex);
        }
    });

    // Event Listener untuk tombol KEMBALI
    backBtn.addEventListener('click', function() {
        // Kembali ke halaman Game Boy utama
        window.location.href = 'index.html';
    });
});