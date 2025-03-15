document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirim langsung
    let isValid = true;

    // Validasi Nama
    let name = document.getElementById("name").value;
    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Nama harus minimal 3 karakter.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Validasi Email
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Email tidak valid.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Validasi Password
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Kata sandi minimal 6 karakter.";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    // Jika semua validasi berhasil
    if (isValid) {
        alert("Pendaftaran berhasil!");
    }
});