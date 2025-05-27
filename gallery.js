document.addEventListener('DOMContentLoaded', function() {
    const currentPhoto = document.getElementById('current-photo');
    const statusText = document.getElementById('status-text');
    const printBtn = document.getElementById('print-btn');
    const nextPhotoBtn = document.getElementById('next-photo-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    const progressBar = document.querySelector('.progress-bar');

    // Array berisi path ke gambar-gambar Anda
    const photos = [
        'gallery_foto1.jpg',
        'gallery_foto2.jpg',
        'gallery_foto3.jpg'
    ];

    let currentPhotoIndex = 0;
    let isPrinting = false;

    // Fungsi untuk menampilkan foto
    function displayPhoto(index) {
        if (photos.length === 0) {
            statusText.textContent = "Tidak ada foto di galeri.";
            currentPhoto.style.display = 'none';
            nextPhotoBtn.style.display = 'none';
            printBtn.style.display = 'none';
            return;
        }

        currentPhoto.src = photos[index];
        currentPhoto.alt = `Gallery Photo ${index + 1}`;
        currentPhoto.style.display = 'block'; // Tampilkan gambar
        statusText.style.display = 'none'; // Sembunyikan teks status

        // Atur status progress bar (misalnya 33%, 66%, 100%)
        progressBar.style.width = `${((index + 1) / photos.length) * 100}%`;

        // Atur tampilan tombol NEXT
        if (index === photos.length - 1) {
            nextPhotoBtn.textContent = "ULANG"; // Ubah teks tombol di foto terakhir
        } else {
            nextPhotoBtn.textContent = "SELANJUTNYA";
        }
    }

    // Event Listener untuk tombol MULAI CETAK
    printBtn.addEventListener('click', function() {
        if (!isPrinting) {
            isPrinting = true;
            printBtn.textContent = "MENCETAK...";
            printBtn.disabled = true; // Nonaktifkan tombol saat mencetak
            statusText.style.display = 'block';
            statusText.textContent = "Mencetak foto...";
            currentPhoto.style.display = 'none';

            // Simulasikan proses cetak
            setTimeout(() => {
                statusText.textContent = "Foto berhasil dicetak!";
                isPrinting = false;
                printBtn.textContent = "MULAI CETAK";
                printBtn.disabled = false;
                displayPhoto(currentPhotoIndex); // Kembali tampilkan foto
            }, 2000); // 2 detik simulasi cetak
        }
    });

    // Event Listener untuk tombol SELANJUTNYA
    nextPhotoBtn.addEventListener('click', function() {
        if (isPrinting) return; // Jangan lakukan apa-apa jika sedang mencetak

        currentPhotoIndex++;
        if (currentPhotoIndex >= photos.length) {
            currentPhotoIndex = 0; // Kembali ke foto pertama jika sudah habis
        }
        displayPhoto(currentPhotoIndex);
    });

    // Event Listener untuk tombol KEMBALI
    backToMenuBtn.addEventListener('click', function() {
        // Kembali ke halaman Game Boy utama
        window.location.href = 'index.html';
    });

    // Tampilkan foto pertama saat halaman galeri dimuat
    displayPhoto(currentPhotoIndex);
});