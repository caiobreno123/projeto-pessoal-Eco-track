const Eletrodomestico = require("./Eletrodomestico")
const FazendaAvancada = require("./FazendaAvancada")

class DispositivoFactory {
    static criar(tipo, dados) {
        if (tipo === "eletrodomestico") {
            return new Eletrodomestico(dados.nome, dados.potencia, dados.horasUso, dados.ambiente)
        } else if (tipo === "fazendaAvancada") {
            return new FazendaAvancada(
                dados.nome,
                dados.qtdPCs,
                dados.potenciaPC,
                dados.qtdGPUs,
                dados.potenciaGPU,
                dados.qtdFontes,
                dados.potenciaFonte,
                dados.horasUso
            )
        }
    }
}

module.exports = DispositivoFactory
