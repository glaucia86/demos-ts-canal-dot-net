/**
 * Arquivo: estudante.ts
 * Author: Glaucia Lemos
 * Data: 06/10/2017
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa1 = (function () {
    //Constructor Simples:
    function Pessoa1(nome, sobrenome, email, tipoCurso, status, mensalidade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.tipoCurso = tipoCurso;
        this.status = status;
        this.mensalidade = mensalidade;
    }
    //Método da Classe:
    Pessoa1.prototype.dadosPessoa = function () {
        console.log("Seja Bem-Vindo(a) a Universidade XPTO");
    };
    return Pessoa1;
}());
var Estudante = (function (_super) {
    __extends(Estudante, _super);
    function Estudante(nome, sobrenome, email, tipoCurso, status, mensalidade, saldoDevedor, numeroMatricula, endereco) {
        var _this = _super.call(this, nome, sobrenome, email, tipoCurso, status, mensalidade) || this;
        _this.saldoDevedor = saldoDevedor;
        _this.numeroMatricula = numeroMatricula;
        _this.endereco = endereco;
        return _this;
    }
    //Método da Classe: Estudante
    Estudante.prototype.dadosCompletosEstudante = function () {
        _super.prototype.dadosPessoa.call(this);
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
    };
    return Estudante;
}(Pessoa1));
var estudante = new Estudante("Luke", "Skywalker", "luke@teste.com.br", "Sistemas de Informação", true, 580.90, 45.00, 32759, "Av. Lúcio Costa 10000 - Rio de Janeiro");
estudante.dadosCompletosEstudante();
//# sourceMappingURL=estudante.js.map