const Dispositivo = require("./Dispositivo")

class FazendaBitcoin extends Dispositivo {
    constructor(nome, potencia, horasUso, qtdMaquinas) {
        super(nome, potencia, horasUso)
        this.qtdMaquinas = qtdMaquinas
    }

    calcularConsumoDiario() {
        return super.calcularConsumoDiario() * this.qtdMaquinas
    }

    descricao() {
        return `A fazenda de mineração ${this.nome} com ${this.qtdMaquinas} máquinas consome ${this.calcularConsumoDiario().toFixed(2)} kWh por dia`
    }
}

module.exports = FazendaBitcoin
