// === KONFIGURASI DIGIFLAZZ ===
const API_URL = "https://api.digiflazz.com/v1";
const USERNAME = "isi_username_kamu";
const API_KEY = "isi_api_key_kamu";

function pilihLayanan(jenis) {
  document.getElementById("jenisLayanan").value = jenis;
  document.getElementById("nominal").innerHTML = `<option value="">Memuat...</option>`;
}

function kirimPesanan() {
  const idTujuan = document.getElementById("idTujuan").value.trim();
  const layanan = document.getElementById("jenisLayanan").value;
  const nominal = document.getElementById("nominal").value;
  const status = document.getElementById("infoStatus");

  if (!idTujuan || !layanan || !nominal) {
    status.textContent = "⚠️ Lengkapi semua data!";
    status.style.background = "#ffe6e6";
    status.style.color = "#b30000";
    return;
  }

  status.textContent = "⏳ Sedang memproses...";
  status.style.background = "#e6f2ff";
  status.style.color = "#004c99";

  setTimeout(() => {
    status.textContent = "✅ Pesanan berhasil diproses!";
    status.style.background = "#e6ffe6";
    status.style.color = "#006600";
  }, 1500);
}
