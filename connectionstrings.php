<?php

$localhost = "127.0.0.1";
$user = "root";
$password = "root";
$banco = "projeto";

$conn = mysqli_connect($localhost, $user, $password, $banco);

if (!$conn){
    echo  "<script>alert('Não foi possível conectar ao Banco de Dados. Usuário ou Senha inválidos!');</script>";
}

?>