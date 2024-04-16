<?php
$documentoId = $_POST['documentoId'];
// Resto de datos...

$sql = "UPDATE documento SET Nombre = ?, Descripcion = ?, CategoriaId = ?, RutaArchivo = ?, VersionDocumento = ? WHERE idDocumento = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$nombre, $descripcion, $categoriaId, $rutaArchivo, $versionDocumento, $documentoId]);
?>
