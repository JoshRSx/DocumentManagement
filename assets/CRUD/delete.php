<?php
$documentoId = $_POST['documentoId'];

$sql = "DELETE FROM documento WHERE idDocumento = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$documentoId]);
?>
