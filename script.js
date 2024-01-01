var carousel = document.getElementById("multiItemCarousel");
var carouselInstance = new bootstrap.Carousel(carousel, {
  interval: 1500, // Atur interval transisi (dalam milidetik), contoh: 2000ms (2 detik)
  pause: false, // Nonaktifkan penundaan saat dihover
});

document.getElementById("tombol1").addEventListener("click", function () {
  // Logika atau aksi untuk tombol 1
});

document.getElementById("tombol2").addEventListener("click", function () {
  // Logika atau aksi untuk tombol 2
});

document.getElementById("tombol3").addEventListener("click", function () {
  // Logika atau aksi untuk tombol 3
});
