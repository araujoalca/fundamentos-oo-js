class Veiculo {
    #nome;
    #quantidadeRodas;
    #tipoMotor;

    constructor(nome, quantidadeRodas, tipoMotor) {
        this.#nome = nome;
        this.#quantidadeRodas = quantidadeRodas;
        this.#tipoMotor = tipoMotor;
    }

    getNome() {
        return this.#nome;
    }

    setNome(novoNome) {
        this.#nome = novoNome;
    }

    getQuantidadeRodas() {
        return this.#quantidadeRodas;
    }

    setQuantidadeRodas(novaquantidadeRodas) {
        this.#quantidadeRodas = novaquantidadeRodas;
    }

    getTipoMotor() {
        return this.#tipoMotor;
    }

    setTipoMotor(novoTipoMotor) {
        this.#tipoMotor = novoTipoMotor;
    }

    acelerar() {
        const tipoMotorExtenso = getNomeTipoMotor(this.#tipoMotor);
        console.log(`Acelerando com motor ${tipoMotorExtenso}!`);
        console.log(`Acelerando ${this.#nome} com ${this.#quantidadeRodas} rodas!`)
    }

}

class Carro extends Veiculo {
    constructor(nome, quantidadeRodas, tipoMotor) {
        super(nome, quantidadeRodas, tipoMotor);
    }
}

class Moto extends Veiculo {
    constructor(nome, quantidadeRodas, tipoMotor) {
        super(nome, quantidadeRodas, tipoMotor);
    }
}

function obterTipoMotor() {
    while (true) { // Loop infinito até que o usuário insira um valor válido
        try {
            let entrada = prompt("Qual o tipo de motor? Digite 0 para combustão ou 1 para elétrico:");
            let tipoMotor = parseInt(entrada); // Tenta converter a entrada para um número inteiro

            if (isNaN(tipoMotor)) { // Verifica se não é um número
                throw new Error("Entrada inválida. Por favor, digite um número 0 ou 1.");
            }

            if (tipoMotor !== 0 && tipoMotor !== 1) { // Verifica se não é 0 nem 1
                throw new Error("Opção inválida. Por favor, digite apenas 0 (para combustão) ou 1 (para elétrico).");
            }

            return tipoMotor; // Retorna o valor válido (0 ou 1)
        } catch (error) {
            alert(error.message); // Exibe a mensagem de erro sem quebrar o programa
        }
    }
}

function getNomeTipoMotor(tipoMotor) {
    if (tipoMotor === 0) {
        return "à combustão";
    } else if (tipoMotor === 1) {
        return "elétrico"; 0
    } else {
        // Isso deve ser uma situação rara se 'obterTipoMotor' for usada antes,
        // mas é uma boa prática para robustez.
        console.warn("Tipo de motor inválido. Esperado 0 ou 1.");
        return "desconhecido";
    }
}

const carro1 = new Carro("Chevrolet Onix", 4, 0);
const moto1 = new Moto("Honda CG 160", 2, 0);
const carro2 = new Carro("Volvo FH 540", 18, 1);
const moto2 = new Moto("Yamaha Fazer 250", 2, 1);
carro1.acelerar();
moto1.acelerar();
carro2.acelerar();
moto2.acelerar();