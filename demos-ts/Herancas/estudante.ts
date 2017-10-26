/**
 * Arquivo: estudante.ts
 * Author: Glaucia Lemos
 * Data: 06/10/2017
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */

 class Pessoa1 {

    //Constructor Simples:
    constructor(
        public nome: string,
        public sobrenome: string,
        public email: string,
        public tipoCurso: string,
        public status: boolean,
        private mensalidade: number
    ){}

    //Método da Classe:
    dadosPessoa() {
        console.log("Seja Bem-Vindo(a) a Universidade XPTO");
    }
 }

 class Estudante extends Pessoa1 {
     constructor(
         nome: string,
         sobrenome: string,
         email: string,
         tipoCurso: string,
         status: boolean,
         mensalidade: number,
         private saldoDevedor: number,
         public numeroMatricula: number,
         public endereco: string
     ){
         super(nome, sobrenome, email, tipoCurso, status, mensalidade);
     }

     //Método da Classe: Estudante
     dadosCompletosEstudante() {
        super.dadosPessoa();
        console.log("======= Dados Pessoa Universidade: XPTO ========");
        console.log("Nome.....................: " + this.nome);
        console.log("Sobrenome................: " + this.sobrenome);
        console.log("E-mail...................: " + this.email);
        console.log("Curso....................: " + this.tipoCurso);
        console.log("Status...................: " + this.status);
        //console.log("Mensalidade do Curso.....: R$ " + this.mensalidade); //somente acessível a classe Pessoa1 'private'
        console.log("Saldo Devedor............: R$ " + this.saldoDevedor);
        console.log("Número da Matrícula......: " + this.numeroMatricula);
        console.log("Endereço.................: " + this.endereco); 
     }
 }

let estudante = new Estudante("Luke", "Skywalker", "luke@teste.com.br", "Sistemas de Informação", true, 580.90, 45.00, 32759, "Av. Lúcio Costa 10000 - Rio de Janeiro");
estudante.dadosCompletosEstudante();