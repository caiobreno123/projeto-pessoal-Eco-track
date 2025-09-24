class Cadastro {
    #dispositivos = []

    adicionarDispositivo(dispositivo) {
        this.#dispositivos.push(dispositivo)
    }

    get dispositivos() {
        return this.#dispositivos
    }

    listarDispositivos() {
        return this.#dispositivos.map(d => d.descricao()).join("\n")
    }
}

module.exports = Cadastro
