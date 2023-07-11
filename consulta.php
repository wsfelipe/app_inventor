<?php

include_once 'connectionstrings.php';

$sql = "SELECT * FROM respostas";

$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$conn->close();

// Retorna os dados como JSON
echo json_encode($data);

?>