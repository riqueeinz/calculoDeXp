let ranking = 6300;

// Estrutura switch para determinar o ranking
switch (true) {
    case (ranking <= 10):
        ranking = "Ferro";
        break;
    case (ranking >= 11 && ranking <= 20):
        ranking = "Bronze";
        break;
    case (ranking >= 21 && ranking <= 50):
        ranking = "Prata";
        break;
    case (ranking >= 51 && ranking <= 80):
        ranking = "Ouro";
        break;
    case (ranking >= 81 && ranking <= 90):
        ranking = "Diamante";
        break;
    case (ranking >= 91 && ranking <= 100):
        ranking = "Lendário";
        break;
    case (ranking > 101):
        ranking = "Imortál";
        break;
    default:
        console.log("Jogue algumas partidas para definir seu ranking");
}

// Função para calcular o saldo de vitórias
function calcularVitorias(vit, def) {
    return vit - def;
}

let vitorias = calcularVitorias(99, 20);
console.log("O Herói tem um saldo de " + vitorias + " vitórias e está no ranking " + ranking);