const Eletrodomestico = require("./Eletrodomestico")
const FazendaBitcoin = require("./FazendaBitcoin")

class DispositivoFactory {
    static criarEletrodomestico(nome, potencia, horasUso, ambiente) {
        return new Eletrodomestico(nome, potencia, horasUso, ambiente)
    }

    static criarFazendaBitcoin(nome, potencia, horasUso, qtdMaquinas) {
        return new FazendaBitcoin(nome, potencia, horasUso, qtdMaquinas)
    }
}

module.exports = DispositivoFactory
