<?php
// Incluir tu script de conexión a la base de datos aquí
include '../conexion/conexion.php';

// Recoger datos del formulario
$usuarioId = $_POST['usuarioId'];
$categoriaId = $_POST['categoriaId'];
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];

// Manejo del archivo subido
if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] == 0) {
    $rutaTempArchivo = $_FILES['archivo']['tmp_name'];
    $nombreArchivo = $_FILES['archivo']['name'];
    $rutaDestino = "ruta/a/tu/directorio/" . $nombreArchivo; // Asegúrate de que este directorio tiene los permisos adecuados

    // Mover el archivo del directorio temporal al directorio final
    if (move_uploaded_file($rutaTempArchivo, $rutaDestino)) {
        // Preparar la consulta SQL para insertar el documento
        $sql = "INSERT INTO documento (UsuarioId, CategoriaId, Nombre, Descripcion, RutaArchivo) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        
        // Ejecutar la consulta
        $stmt->execute([$usuarioId, $categoriaId, $nombre, $descripcion, $rutaDestino]);
        
        echo "Documento subido con éxito.";
    } else {
        echo "Error al subir el archivo.";
    }
} else {
    echo "Error en la subida del archivo.";
}
?>
