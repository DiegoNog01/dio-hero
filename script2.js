class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type
    }

    attack() {
        const attackMap = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        }

        const attackType = attackMap[this.type] || "desconhecido";
        console.log(`O ${this.type} atacou usando ${attackType}`)

    }
}

const bruno = new Hero("Bruno", 35, "mago")
bruno.attack()
