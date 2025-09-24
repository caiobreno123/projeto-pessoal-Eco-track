class Cadastro {
    constructor() {
        this.dispositivos = []
    }

    adicionarDispositivo(dispositivo) {
        this.dispositivos.push(dispositivo)
    }

    listarDispositivos() {
        let total = 0
        const lista = this.dispositivos.map(d => {
            const consumo = d.consumoDiario()
            total += consumo
            return d.descricao()
        })
        lista.push(`\nConsumo total diário: ${total} Wh`)
        return lista.join("\n")
    }
}

module.exports = Cadastro
