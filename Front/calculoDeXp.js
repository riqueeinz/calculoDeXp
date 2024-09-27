let nickName = "Riqueeinz";
let XP = 1500;

switch (true) {
    case (XP >= 1001 && XP <= 2000):
        XP = "Bronze";
        break;
    case (XP >= 2001 && XP <= 3000):
        XP = "Prata";
        break;
    case (XP >= 3001 && XP <= 4000):
        XP = "Ouro";
        break;
    case (XP >= 4001 && XP <= 5000):
        XP = "Platina";
        break;
    case (XP >= 5001 && XP <= 6000):
        XP = "Ascendente";
        break;
    case (XP >= 6001 && XP <= 7000):
        XP = "Imortal";
        break;
    case (XP >= 7001 && XP <= 8000):
        XP = "Radiante";
        break;
    default:
        XP = "Sem Ranking";
        console.log("Jogue algumas partidas para definir seu ranking");
}

console.log("O Herói " + nickName + " está no nível " + XP);