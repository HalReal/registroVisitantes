document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");
    
    formulario.addEventListener("submit", function (event) {
    
    const cedula= document.getElementById("cedula").value.trim();
    const nombre= document.getElementById("nombre").value.trim();
    const apellido= document.getElementById("apellido").value.trim();
    const departamento= document.getElementById("departamento").value();
    const motivo= document.getElementById("motivo").value.trim();
    
    let mensajeError
    
    if (!cedula.match(/^\d{3}-\d{6}-\d{4}[A-Za-z]$/)) {
        mensajeError += "La cédula debe tener el formato 999-999999-9999X.\n";
      }
    
      if (nombre === "") {
        mensajeError += "El campo de nombres no puede estar vacío.\n";
      }
    
      if (apellido === "") {
        mensajeError += "El campo de apellidos no puede estar vacío.\n";
      }
    
      if (departamento === "") {
        mensajeError += "Debe seleccionar un departamento.\n";
      }
    
      if (motivo.length < 10) {
        mensajeError += "El motivo debe tener al menos 10 caracteres.\n";
      }
    
    
      if (mensajeError) {
        alert(mensajeError);
        event.preventDefault(); // Evita el envío si hay errores
        } 
    });
    });