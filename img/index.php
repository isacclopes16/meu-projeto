<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];
    
    // Configurar o e-mail de destino
    $destinatario = "seu_email@example.com";
    $assunto = "Mensagem do formulário de contato";

    // Montar a mensagem de e-mail
    $mensagem_email = "E-mail: $email\n";
    $mensagem_email .= "Mensagem:\n\n$mensagem";

    // Enviar o e-mail
    mail($destinatario, $assunto, $mensagem_email);

    // Redirecionar de volta para a página de contato
    header("Location: index.html");
    exit();
}
?>
