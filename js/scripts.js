function handleSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    // Tampilkan hasil ke elemen hasil
    document.getElementById("resultName").textContent = name;
    document.getElementById("resultBirthdate").textContent = birthdate;
    document.getElementById("resultGender").textContent = gender;
    document.getElementById("resultMessage").textContent = message;

    // Munculkan hasil input
    document.getElementById("formResult").classList.add("active");

    // Scroll ke bawah (opsional)
    document.getElementById("formResult").scrollIntoView({ behavior: "smooth" });
}



// BANNER PADA INDEKS 
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector('.banner-img');

    const images = [
        '../assets/gambar10.jpg',
        '../assets/lab13.jpg',
        '../assets/gambar9.jpg',
        '../assets/lab12.jpg',
        '../assets/gambar8.jpg'
    ];

    let index = 0;

    function changeBackground() {
        banner.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    changeBackground(); // set gambar awal
    setInterval(changeBackground, 3000); // ganti gambar tiap 3 detik
});


// masukkan nama user 

// Tunggu halaman dimuat
window.onload = function() {
    // Minta input nama pengguna
    var userName = prompt("Masukkan nama Anda:");

    // Pastikan input nama tidak kosong
    if (userName) {
        // Ambil elemen yang ingin diubah, dalam hal ini elemen dengan id 'home-section'
        var greetingElement = document.querySelector('#home-section h2');

        // Ubah teks menjadi sapaan dengan nama pengguna yang diinputkan
        greetingElement.textContent = "Hi " + userName + ", Welcome in Sidopraktis";
    }
};
