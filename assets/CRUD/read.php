<?php
$sql = "SELECT * FROM documento";
$result = $conn->query($sql);

while ($row = $result->fetch()) {
    // Mostrar datos de $row
}
?>
