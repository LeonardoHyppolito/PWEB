document.addEventListener("DOMContentLoaded", function() {
    const janela = document.getElementById("janela");
    const status = document.getElementById("status");

    janela.addEventListener("mouseover", function() {
        janela.src = "janela-aberta.jpg";
        status.textContent = "Janela Aberta";
    });

    janela.addEventListener("mouseout", function() {
        janela.src = "janela-fechada.jpg";
        status.textContent = "Janela Fechada";
    });

    janela.addEventListener("click", function() {
        janela.src = "janela-quebrada.jpg";
        status.textContent = "Janela Quebrada";
    });
});
