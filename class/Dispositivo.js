class Dispositivo {
    constructor(nome, potencia, horasUso) {
        this.nome = nome
        this.potencia = potencia
        this.horasUso = horasUso
    }

    calcularConsumoDiario() {
        return (this.potencia * this.horasUso) / 1000
    }

    descricao() {
        return `${this.nome} consome ${this.calcularConsumoDiario().toFixed(2)} kWh por dia`
    }
}

module.exports = Dispositivo
