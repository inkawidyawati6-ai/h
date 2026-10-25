// Daftar kata-kata gombalan/pujukan saat tombol "Enggak" diklik
const pesanPenolakan = [
    "Enggak 😝",
    "Yakin nih? 🧐",
    "Beneran gak mau? 😭",
    "Coba dipikirin lagi...",
    "Jahat banget ditolak 💔",
    "Pencet tombol merah aja pliss 🙏",
    "Tombol 'Mau' udah siap lho! ✨"
];

let indexPesan = 0;
let ukuranTombolMau = 1; // Ukuran awal tombol "Mau"

function tolakCinta() {
    const btnEnggak = document.getElementById('btnEnggak');
    const btnMau = document.getElementById('btnMau');
    
    // Ganti teks tombol "Enggak" secara berurutan
    indexPesan = (indexPesan + 1) % pesanPenolakan.length;
    btnEnggak.innerText = pesanPenolakan[indexPesan];
    
    // Setiap kali dia nolak, tombol "Mau" ukurannya makin membesar supaya mendominasi layar!
    ukuranTombolMau += 0.2;
    btnMau.style.transform = `scale(${ukuranTombolMau})`;
    
    // Kalau sudah klik berkali-kali, sembunyikan tombol "Enggak" supaya dia terpaksa milih "Mau"
    if (indexPesan === pesanPenolakan.length - 1) {
        btnEnggak.style.display = 'none';
    }
}

// Fungsi saat dia mengklik tombol "Mau Banget!"
function terimaCinta() {
    const card = document.getElementById('cardUtama');
    
    card.innerHTML = `
        <h1>YEEAY! 🎉🥰</h1>
        <p>Makasih ya udah jujur. Mulai sekarang, siap-siap nerima banyak hal seru dan perhatian dari aku! ❤️</p>
        <p style="font-size: 12px; color: #888; margin-top: 20px;">(Sekarang <i>screenshot</i> layar ini terus kirim ke WhatsApp aku ya! 📸)</p>
    `;
    
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });
}
