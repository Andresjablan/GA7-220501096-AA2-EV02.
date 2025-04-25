<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Bienvenido</title>
  <link rel="stylesheet" href="css/bienvenido.css" />
</head>
<body>
  <div class="bienvenido-container">
    <h2>Bienvenido</h2>
    <p>Hola, <%= session.getAttribute("usuario") %>! Que tengas un buen día.</p>
    <button onclick="window.location.href='menu.html'">Ingresar</button>

    <div id="Logo_AI">
      <img src="imagenes/LogoAI.png" alt="Logo Empresa" width="150" height="150">
    </div>
    <div id="Logo_MF">
      <img src="imagenes/LogoMF.png" alt="Logo" width="150" height="150">
    </div>
  </div>

  <script src="js/scripts.js"></script>
</body>
</html>