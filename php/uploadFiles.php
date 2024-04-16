<?php
// PHP para manejar la carga de archivos
$base_dir = "../images/"; // Carpeta base donde se guardarán los archivos
$folder = isset($_POST['folder']) ? $_POST['folder'] : ''; // Carpeta seleccionada por el usuario

// Crear la ruta completa incluyendo la carpeta del usuario si existe
$target_dir = $base_dir . ($folder ? $folder . '/' : '');

// Crear la carpeta si no existe
if (!is_dir($target_dir) && !mkdir($target_dir, 0777, true)) {
    // Error al crear la carpeta, podría ser un problema de permisos
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'error' => 'No se pudo crear la carpeta de destino.']);
    exit; // Detiene la ejecución del script
}

// Continúa con la carga del archivo...
$target_file = $target_dir . basename($_FILES["file"]["name"]);

// Intenta mover el archivo subido al destino final
if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
    // Éxito
    $response = [
        'success' => true,
        'fileName' => basename($_FILES["file"]["name"]),
        'fileSize' => filesize($target_file) // Opcional: incluir tamaño del archivo
    ];
} else {
    // Error
    $response = [
        'success' => false,
        'error' => 'No se pudo subir el archivo.',
        'info' => isset($_FILES["file"]["error"]) ? $_FILES["file"]["error"] : 'Unknown error' // Incluir información de error de PHP
    ];
}

// Establecer el encabezado de respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
