document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "genesis" && password === "Nunes123") {
        // Login correto, redirecionar para a página desejada
        window.location.href = "genesis_index.html";
    } else {
        // Login incorreto, exibir mensagem de erro
        document.getElementById("error-message").textContent = "Usuário ou senha inválidos.";
    }
});
