
// ==================== LOGIN ====================


  // Evento para redirigir a la página de registro
  const registerBtn = document.getElementById("register-button");
  if (registerBtn) {
    registerBtn.addEventListener("click", function () {
      window.location.href = "registro.html";
    });
  }

// ==================== REGISTRO ====================
const registerForm = document.getElementById("register-form");
if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const cedula = document.getElementById("cedula").value;
    const fechaNacimiento = document.getElementById("fecha-nacimiento").value;

    if (nombres === "" || apellidos === "" || cedula === "" || fechaNacimiento === "") {
      document.getElementById("register-error-message").innerText = "Por favor, rellena todos los campos";
      document.getElementById("register-error-message").style.display = "block";
    } else {
      document.getElementById("register-error-message").style.display = "none";
      alert("Registro completado");
      // Aquí podrías guardar los datos si lo necesitas
    }
  });
}

// ==================== MENÚ PRINCIPAL ====================
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    const visible = window.getComputedStyle(sidebar).display !== "none";
    sidebar.style.display = visible ? "none" : "block";
  }
}
// Redirigir a la página correspondiente
function loadView(view) {
  switch (view) {
    case 'facturacion':
      window.location.href = "facturacion.html";
      break;
      case 'compras':
        window.location.href = "compras.html";
        break;

    case 'inventario':
      window.location.href = "inventario.html";
      break;

    case 'configuracion':
      window.location.href = "configuracion.html";
      break;

    default:
      window.location.href = "index.html"; 
  }

  // Ocultar menú en móviles (opcional si se usa en cada página)
  if (window.innerWidth <= 768) {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.style.display = "none";
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const salirBtn = document.getElementById("salir_Index");

  // Verifica si el botón existe antes de añadirle el evento
  if (salirBtn) {
    salirBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const confirmar = confirm("¿Estás seguro que deseas salir del menú?");
      if (confirmar) {
        window.location.href = "index.html";
      }
    });
  }
});
               // Script Modulos //
document.addEventListener("DOMContentLoaded", () => {
  const submenuOptions = document.querySelectorAll(".submenu-option");
  const mainContent = document.getElementById("main-content");

  submenuOptions.forEach(option => {
    option.addEventListener("click", (e) => {
      e.preventDefault();
      const section = option.getAttribute("data-section");

      let html = `<h2>${section.replace("-", " ").toUpperCase()}</h2><p>Contenido para ${section.replace("-", " ")}</p>`;
      switch (section) {
        case "nueva-factura":
        case "consultar-factura":
        case "nueva-devolucion":
        case "consultar-devolucion":
        case "nuevo-cliente":
        case "consultar-cliente":
        case "nuevo-vendedor":
        case "consultar-vendedor":
        case "nuevo-proveedor":
        case "consultar-proveedor":
        case "reportes":
        case "nueva-entrada":
        case "consultar-entrada":
        case "nueva-salida":
        case "consultar-salida":
        case "nuevo-articulo":
        case "consultar-articulo":
        case "opciones-usuario":
        case "opciones-sistema":
          mainContent.innerHTML = html;
          break;
        case "salir":
          mainContent.innerHTML = `<h2>Hasta pronto</h2><p>Has cerrado sesión correctamente.</p>`;
          break;
        default:
          mainContent.innerHTML = `<h2>Módulo de Facturación</h2><p>Selecciona una opción del menú para continuar.</p>`;
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const salirBtn = document.getElementById("salir");

  if (salirBtn) { // Solo si existe el botón
    salirBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const confirmar = confirm("¿Estás seguro que deseas salir del módulo?");
      if (confirmar) {
        window.location.href = "menu.html";
      }
    });
  }
});


