const Cadastro = require("../class/Cadastro")
const DispositivoFactory = require("../class/DispositivoFactory")

function runTests() {
    const cadastro = new Cadastro()

    const tv = DispositivoFactory.criarEletrodomestico("TV", 200, 5, "Sala")
    cadastro.adicionarDispositivo(tv)

    const fazenda = DispositivoFactory.criarFazendaBitcoin("MinerFarm", 1500, 24, 10)
    cadastro.adicionarDispositivo(fazenda)

    console.log("\n[TESTE] Listando dispositivos cadastrados:")
    console.log(cadastro.listarDispositivos())
}

runTests()
