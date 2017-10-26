/**
 * Arquivo: carro.ts
 * Author: Glaucia Lemos
 * Data: 06/10/2017
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */
var Veiculo = (function () {
    function Veiculo() {
        console.log('Por dentro da Corrida');
    }
    Veiculo.prototype.motorista = function (velocidade) {
        console.log('Estou dirigindo à..: ' + velocidade + ' km/h!');
    };
    return Veiculo;
}());
function dirigirRapido(carro) {
    carro.motorista(100);
}
var corridaCarro = new Veiculo();
dirigirRapido(corridaCarro);
//# sourceMappingURL=carro.js.map