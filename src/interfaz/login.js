import Swal from 'sweetalert2'
document.querySelector(".form__button").addEventListener("click", (event) => {
  event.preventDefault();
  const usuario = document.querySelector("#login-user").value;
  const clave = document.querySelector("#login-pass").value;
  if (usuario === "admin" && clave === "1234") {
    Swal.fire({
      title: 'Bienvenido',
      text: 'Has iniciado sesión correctamente',
      icon: 'success',
      confirmButtonText: 'Continuar'
    });
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Usuario o contraseña incorrectos',
      icon: 'error',
      confirmButtonText: 'Inténtalo de nuevo'
    });
  }
  document.querySelector("#login-user").value = ""; 
  document.querySelector("#login-pass").value = "";

});
