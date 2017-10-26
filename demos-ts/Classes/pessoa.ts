/**
 * Arquivo: pessoa.ts
 * Author: Glaucia Lemos
 * Data: 06/10/2017
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 *
 */

class Pessoa {
    
    //Propriedades da Classe:
    nome: string;
    sobrenome: string;
    email: string;
    tipoCurso: string;
    status: boolean;

    //Construtor Simples:
    constructor(nome: string, sobrenome: string, email: string, tipoCurso: string, status: boolean) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.tipoCurso = tipoCurso;
        this.status = status;
    }

    //Método da Classe:
    dadosPessoa() {
        console.log("======= Dados Pessoa Universidade: XPTO ========");
        console.log("Nome.....................: " + this.nome);
        console.log("Sobrenome................: " + this.sobrenome);
        console.log("E-mail...................: " + this.email);
        console.log("Curso....................: " + this.tipoCurso);
        console.log("Status...................: " + this.status);
    }
}

let pessoa = new Pessoa("Glaucia", "Lemos", "glaucia@teste.com.br", "Ciência da Computação", false);
pessoa.dadosPessoa();