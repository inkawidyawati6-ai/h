// Fungsi saat kursor mendekati tombol "Enggak", tombolnya akan lari ke posisi acak
function pindahTombol() {
    const btnEnggak = document.getElementById('btnEnggak');
    
    // Menghasilkan posisi acak di dalam layar
    const maxX = window.innerWidth - btnEnggak.offsetWidth - 50;
    const maxY = window.innerHeight - btnEnggak.offsetHeight - 50;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    btnEnggak.style.position = 'fixed';
    btnEnggak.style.left = randomX + 'px';
    btnEnggak.style.top = randomY + 'px';
}

// Fungsi saat dia berhasil mengklik tombol "Mau Banget!"
function terimaCinta() {
    const card = document.getElementById('cardUtama');
    
    // Mengubah isi card menjadi pesan romantis kemenangan
    card.innerHTML = `
        <h1>YEEAY! 🎉🥰</h1>
        <p>Makasih ya udah jujur. Mulai sekarang, siap-siap nerima banyak hal seru dan perhatian dari aku! ❤️</p>
        <p style="font-size: 12px; color: #888; margin-top: 20px;">(Sekarang <i>screenshot</i> layar ini terus kirim ke WhatsApp aku ya! 📸)</p>
    `;
    
    // Memunculkan efek konfeti/kembang api digital yang meriah
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });
}
