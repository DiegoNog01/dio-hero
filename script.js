const heroName = 'Kleber'
const heroExp = 100001
let heroLevel

if (heroExp < 1000) {
    heroLevel = "Ferro";
} else if (heroExp >= 1001 && heroExp <= 2000) {
    heroLevel = "Bronze";
} else if (heroExp >= 2001 && heroExp <= 6000) {
    heroLevel = "Prata";
} else if (heroExp >= 6001 && heroExp <= 7000) {
    heroLevel = "Ouro";
} else if (heroExp >= 7001 && heroExp <= 8000) {
    heroLevel = "Platina";
} else if (heroExp >= 8001 && heroExp <= 9000) {
    heroLevel = "Ascendente";
} else if (heroExp >= 9001 && heroExp <= 10000) {
    heroLevel = "Imortal";
} else if(heroExp >= 10001){
    heroLevel = "Radiante";
}


console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`)