document.addEventListener("DOMContentLoaded", function () {

    
    formulario.addEventListener("submit", function (event) {
    
    const cedula= document.getElementById("cedula").value.trim();
    const nombre= document.getElementById("nombre").value.trim();
    const apellido= document.getElementById("apellido").value.trim();
    const departamento= document.getElementById("departamento").value();
    const motivo= document.getElementById("motivo").value.trim();
    
  

    if (!cedula || !nombres || !apellidos || !departamento || !motivo) {
        alert("Por favor, complete todos los campos.");
        e.preventDefault();
        return;
      }
  
      // Validar formato de cédula: xxx-xxxxxx-xxxL
      const cedulaRegex = /^\d{3}-\d{6}-\d{3}[A-Z]$/;
      if (!cedulaRegex.test(cedula)) {
        alert("La cédula debe tener el formato: 123-456789-123A");
        e.preventDefault();
      }
    });
  });