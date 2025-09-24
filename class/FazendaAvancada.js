class FazendaAvancada {
    constructor(nome, qtdPCs, potenciaPC, qtdGPUs, potenciaGPU, qtdFontes, potenciaFonte, horasUso) {
        this.nome = nome
        this.qtdPCs = qtdPCs
        this.potenciaPC = potenciaPC
        this.qtdGPUs = qtdGPUs
        this.potenciaGPU = potenciaGPU
        this.qtdFontes = qtdFontes
        this.potenciaFonte = potenciaFonte
        this.horasUso = horasUso
    }

    consumoDiario() {
        const consumoPorPC = this.potenciaPC + (this.qtdGPUs * this.potenciaGPU) + (this.qtdFontes * this.potenciaFonte)
        return consumoPorPC * this.qtdPCs * this.horasUso
    }

    descricao() {
        return `${this.nome} - PCs: ${this.qtdPCs}, GPUs/PC: ${this.qtdGPUs}, Fontes/PC: ${this.qtdFontes}, Consumo diário: ${this.consumoDiario()} Wh`
    }
}

module.exports = FazendaAvancada
