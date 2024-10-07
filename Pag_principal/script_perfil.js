function validarcambios() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cd = document.getElementById("cd").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmar-contrasena").value;

    /* Validaciones del perfil */

    if (nombre.trim() === "" || apellido.trim() === "" || cd.trim() === "" || correo.trim() === "" || contrasena.trim() === "" || confirmarContrasena.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    if (!/^\d{10}$/.test(cd)) {
        alert("La cédula debe contener exactamente 10 dígitos numéricos.");
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(correo)) {
        alert("El correo electrónico no es válido.");
        return false;
    }

    alert("Registro exitoso. Redirigiendo a la página principal.");
    window.location.href = "../pag_1.html";
    return true;
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-options");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

function soloNumeros(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
    }
    return true;
}
