<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Menú Horizontal</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  #menu {
    background-color: #333;
    overflow: hidden;
  }

  #menu a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  #menu a:hover {
    background-color: #ddd;
    color: black;
  }

  #search {
    float: right;
    margin: 15px;
  }
</style>
</head>
<body>

<div id="menu">
  <a href="#">Médicos</a>
  <a href="#">Reportes</a>
  <a href="#">Egresos</a>
  <a href="#">Pacientes</a>
  <input type="text" id="search" placeholder="Buscar">
</div>

</body>
</html>
