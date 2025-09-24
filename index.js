const Cadastro = require("./class/Cadastro")
const DispositivoFactory = require("./class/DispositivoFactory")

function main() {
    const cadastro = new Cadastro()

    console.log("=== ECOTRACK - Monitor de Consumo ===")

    const tv = DispositivoFactory.criarEletrodomestico("TV", 200, 5, "Sala")
    const geladeira = DispositivoFactory.criarEletrodomestico("Geladeira", 150, 24, "Cozinha")

    cadastro.adicionarDispositivo(tv)
    cadastro.adicionarDispositivo(geladeira)

    console.log("\n--- Cadastro de Eletrodomésticos ---")
    console.log(cadastro.listarDispositivos())

    let continuar = true

    if (continuar) {
        console.log("\n--- Cadastro de Fazenda de Mineração ---")
        const fazenda = DispositivoFactory.criarFazendaBitcoin("MinerFarm", 1500, 24, 100)
        cadastro.adicionarDispositivo(fazenda)

        console.log(cadastro.listarDispositivos())
    }

    console.log("\n=== Fim do Programa ===")
}

main()
