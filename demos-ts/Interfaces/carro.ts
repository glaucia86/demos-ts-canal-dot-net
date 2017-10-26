/**
 * Arquivo: carro.ts
 * Author: Glaucia Lemos
 * Data: 06/10/2017
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */

interface ICarro {  
    potencia: number;
    motorista(velocidade: number): void;
}

class Veiculo implements ICarro {  
    potencia: number;

    constructor() {
        console.log('Por dentro da Corrida');
    }

    motorista(velocidade: number): void {
        console.log('Estou dirigindo à..: ' + velocidade + ' km/h!');
    }
}

function dirigirRapido(carro: ICarro): void {  
    carro.motorista(100);
}

let corridaCarro = new Veiculo();  
dirigirRapido(corridaCarro);