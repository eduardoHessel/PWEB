
var isOk = false;
var opcaoUsuario;
var opcaoComputador;
var escolhaUsuario;
var escolhaComputador;

while (true) {

    //valida escolha do usuário
    while (isOk == false) {
        escolhaUsuario = prompt("Pedra, Papel, Tesoura!\n\n Para jogar, basta inserir 'Pedra', 'Papel' ou 'Tesoura'.");

        isOk = true;

        switch (escolhaUsuario.toLowerCase()) {
            case "pedra":
                opcaoUsuario = "r";
                break;

            case "papel":
                opcaoUsuario = "p";
                break;

            case "tesoura":
                opcaoUsuario = "s";
                break;

            default:
                alert("A opção inserida é inválida. Por favor insira apenas 'Pedra', 'Papel' ou 'Tesoura'.");
                isOk = false;
                break;

        }
    }

    //escolha do computador
    escolhaComputador = Math.random();

    if (escolhaComputador <= 0.33)
        opcaoComputador = "r";
    else if (escolhaComputador <= 0.66)
        opcaoComputador = "p";
    else
        opcaoComputador = "s";

    //valida resultado
    switch (opcaoUsuario + opcaoComputador) {
        case "rs":
        case "pr":
        case "sp":
            alert("Você venceu! :)\n" + retornaNomeOpcao(opcaoUsuario) + " ganha de " + retornaNomeOpcao(opcaoComputador));
            break;

        case "sr":
        case "rp":
        case "ps":
            alert("Você perdeu! :(\n" + retornaNomeOpcao(opcaoUsuario) + " perde para " + retornaNomeOpcao(opcaoComputador));
            break;

        case "rr":
        case "pp":
        case "ss":
            alert("Deu empate! :|\n" + retornaNomeOpcao(opcaoUsuario) + " empata com " + retornaNomeOpcao(opcaoComputador));
            break;
    }

    isOk              = false;
    opcaoUsuario      = false;
    opcaoComputador   = false;
    escolhaUsuario    = false;
    escolhaComputador = false;
}

function retornaNomeOpcao(opcao) {
    switch (opcao) {
        case "r":
            return "Pedra";

        case "p":
            return "Papel";

        case "s":
            return "Tesoura";
    }
}
