<?php
$target_dir = "../images/";
$folder = isset($_GET['folder']) ? $_GET['folder'] : '';

if ($folder) {
    // Si se proporcionó un nombre de carpeta, listamos los archivos de esa carpeta
    $target_dir .= $folder . '/';
}

$dirContents = array_diff(scandir($target_dir), array('..', '.'));

$response = array();

foreach ($dirContents as $entry) {
    $filePath = $target_dir . $entry;
    if (is_file($filePath)) {
        $response[] = array(
            "fileName" => $entry,
            "fileSize" => filesize($filePath),
            "isFolder" => false
        );
    } else if (is_dir($filePath)) {
        $response[] = array(
            "fileName" => $entry,
            "isFolder" => true
        );
    }
}

header('Content-Type: application/json');
echo json_encode($response);
?>