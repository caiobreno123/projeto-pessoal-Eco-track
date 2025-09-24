const Dispositivo = require("./Dispositivo")

class Eletrodomestico extends Dispositivo {
    constructor(nome, potencia, horasUso, ambiente) {
        super(nome, potencia, horasUso)
        this.ambiente = ambiente
    }

    descricao() {
        return `O eletrodoméstico ${this.nome} no ambiente ${this.ambiente} consome ${this.calcularConsumoDiario().toFixed(2)} kWh por dia`
    }
}

module.exports = Eletrodomestico
