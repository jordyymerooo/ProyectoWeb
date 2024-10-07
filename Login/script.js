document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Aquí puedes agregar la lógica de validación del formulario

        // Redirigir a la página principal
        window.location.href = "../Pag_principal/pag_1.html";
    });
});
