function rankedCalculator(victorys, loses) {
    const result = victorys - loses
    const nvl = verificationVictorys(result)

    console.log(`O herói tem de saldo de ${result} está no nível de ${nvl}`)
}

function verificationVictorys(result){
    if (result <= 10) {
        return "Ferro";
    } else if (result >= 11 && result <= 20) {
        return "Bronze";
    } else if (result >= 21 && result <= 50) {
        return "Prata";
    } else if (result >= 51 && result <= 80) {
        return "Ouro";
    } else if (result >= 81 && result <= 90) {
        return "Diamante";
    } else if (result >= 91 && result <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

rankedCalculator(20, 10)