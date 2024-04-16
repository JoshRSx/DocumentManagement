<?php
$host = 'localhost:3306'; 
$dbname = 'bd_biblioteca_solicitudes';
$usuario = 'root';
$contrasena = '';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $usuario, $contrasena);
    // Establecer el modo de error PDO a excepción
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conectado exitosamente"; 
} catch(PDOException $e) {
    echo "La conexión ha fallado: " . $e->getMessage();
}
?>
