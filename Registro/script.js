document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cedula").addEventListener("input", function(event) {
        // Permitir solo números
        event.target.value = event.target.value.replace(/\D/g, "");
    });

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        validarRegistro();
    });
});

function validarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var cedula = document.getElementById("cedula").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    var confirmarContraseña = document.getElementById("confirmar-contraseña").value;
    var facultad = document.getElementById("unidades-academicas").value;
    var errorMessage = document.getElementById("error-message");

    // Limpiar mensaje de error
    errorMessage.textContent = '';

    // Validación de campos
    if (nombre.trim() === "" || cedula.trim() === "" || email.trim() === "" || contraseña.trim() === "" || confirmarContraseña.trim() === "" || facultad === "") {
        errorMessage.textContent = "Por favor, complete todos los campos.";
        return;
    }

    if (contraseña !== confirmarContraseña) {
        errorMessage.textContent = "Las contraseñas no coinciden.";
        return;
    }

    if (!/^\d{10}$/.test(cedula)) {
        errorMessage.textContent = "La cédula debe contener 10 dígitos numéricos.";
        return;
    }

    if (!email.includes('@')) {
        errorMessage.textContent = "El correo electrónico debe contener un '@'.";
        return;
    }

    // Si llegamos aquí, todos los campos están completados correctamente
    alert("Registro exitoso. Redirigiendo al inicio de sesión.");
    window.location.href = "../Login/Inicio.html";
}