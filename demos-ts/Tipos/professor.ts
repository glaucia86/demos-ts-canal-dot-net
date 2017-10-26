/**
 * Arquivo: professor.ts
 * Author: Glaucia Lemos
 * Data: 06/10/2017
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */

function dadosProfessor(
    nome: string,
    sobrenome: string,
    idade: number,
    email: string,
    salario: number,
    materiaEscolar: any,
    tempoEmpresa: number,
) {
    console.log("======= Dados Professor: Universidade XPTO ========");
    console.log("Nome................: " + nome);
    console.log("Sobrenome...........: " + sobrenome);
    console.log("Idade...............: " + idade);
    console.log("Salário.............: R$ " + salario);
    console.log("Matéria do Curso....: " + materiaEscolar);
    console.log("Tempo de Empresa....: " + tempoEmpresa + " anos.");
    
}

dadosProfessor("Mariano", "Ricciardino", 35, "marianoricci@teste.com", 3500, [], 5);