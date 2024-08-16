class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "Mago":
                ataque = "usou Magia";
                break;
            case "Assassino":
                ataque = "usou Adaga";
                break;
            case "Bruxo":
                ataque = "usou artes Bola de fogo";
                break;
            case "Druida":
                ataque = "usou Stangle";
                break;
            default:
                ataque = "usou um ataque genérico";
        }

        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Heroi Escolhido
const heroi = new Heroi("Astarion", 200, "Assassino");
heroi.atacar();