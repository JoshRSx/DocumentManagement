<?php
include 'conexion.php';

$response = ['success' => false];

// Asumiendo que $usuarioId y $categoriaId vienen de alguna lógica de tu aplicación.
$usuarioId = $_POST['usuarioId'] ?? null;
$categoriaId = $_POST['categoriaId'] ?? null;
$descripcion = $_POST['descripcion'] ?? '';
$versionDocumento = $_POST['versionDocumento'] ?? 1;
$activo = 1;

$fechaSubida = date('Y-m-d H:i:s');

if (isset($_POST['nombre'], $_POST['rutaArchivo'], $usuarioId, $categoriaId)) {
    $nombre = $_POST['nombre'];
    $rutaArchivo = $_POST['rutaArchivo'];

    // Verificar si el UsuarioId existe
    $userQuery = "SELECT idUsuario FROM usuario WHERE idUsuario = ?";
    $userStmt = $conn->prepare($userQuery);
    $userStmt->execute([$usuarioId]);
    if ($userStmt->rowCount() == 0) {
        // UsuarioId no existe
        $response['error'] = 'El UsuarioId proporcionado no existe en la base de datos.';
        echo json_encode($response);
        exit;
    }

    $query = "INSERT INTO documento (UsuarioId, CategoriaId, Nombre, Descripcion, RutaArchivo, VersionDocumento, FechaSubida, Activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);

    try {
        $stmt->execute([$usuarioId, $categoriaId, $nombre, $descripcion, $rutaArchivo, $versionDocumento, $fechaSubida, $activo]);
        $response['success'] = true;
        $response['message'] = 'Documento guardado con éxito';
        $response['documentoId'] = $conn->lastInsertId();
    } catch (PDOException $e) {
        $response['error'] = 'Error al ejecutar la consulta: ' . $e->getMessage();
    }
} else {
    $response['error'] = 'Datos incompletos';
}

echo json_encode($response);
?>
