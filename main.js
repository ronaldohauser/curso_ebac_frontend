// Função para atualizar os dados do GitHub
function atualizarDadosGitHub() {
    $.ajax({
        url: "https://api.github.com/users/ronaldohauser",
        dataType: "json",
        success: function (data) {
            $(".profile-avatar").attr("src", data.avatar_url);
            $(".profile-name").text(data.name);
            $(".profile-username").text("@" + data.login);

            var $profileNumbers = $(".numbers");
            $profileNumbers.find(".numbers-item:eq(0) span").text(data.public_repos);
            $profileNumbers.find(".numbers-item:eq(1) span").text(data.followers);
            $profileNumbers.find(".numbers-item:eq(2) span").text(data.following);

            $(".profile-link").attr("href", data.html_url);
        },
        error: function (error) {
            console.error("Erro na solicitação:", error);
        },
    });
}

$(document).ready(function () {
    atualizarDadosGitHub();
    setInterval(atualizarDadosGitHub, 60000);

    $("#btn-buscar").click(function () {
        setTimeout(function () {
            window.location.href = $(".profile-link").attr("href");
        }, 2000);
    });
});