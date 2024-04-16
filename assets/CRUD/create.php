<?php
// Recoger datos del formulario
$usuarioId = $_POST['usuarioId'];
$categoriaId = $_POST['categoriaId'];
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$rutaArchivo = $_POST['rutaArchivo']; // Esta debería ser la ruta después de subir el archivo al servidor
$versionDocumento = $_POST['versionDocumento'];

// Preparar la consulta SQL
$sql = "INSERT INTO documento (UsuarioId, CategoriaId, Nombre, Descripcion, RutaArchivo, VersionDocumento) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

// Ejecutar la consulta
$stmt->execute([$usuarioId, $categoriaId, $nombre, $descripcion, $rutaArchivo, $versionDocumento]);

// Redirigir o mostrar un mensaje
?>
