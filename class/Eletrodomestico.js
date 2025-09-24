class Eletrodomestico {
    constructor(nome, potencia, horasUso, ambiente) {
        this.nome = nome
        this.potencia = potencia
        this.horasUso = horasUso
        this.ambiente = ambiente
    }

    consumoDiario() {
        return this.potencia * this.horasUso
    }

    descricao() {
        return `${this.nome} - Ambiente: ${this.ambiente}, Consumo diário: ${this.consumoDiario()} Wh`
    }
}

module.exports = Eletrodomestico
