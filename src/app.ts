//DESAFIO 1

const employee: {name:string, code:number } = {
    name: 'John',
    code: 404
}

//DESAFIO 2

enum Profissao2 {
    Padeiro,
    Atriz
}

type Pessoa2 = {
    nome:string,
    idade: number,
    profissao: Profissao2
}

const mariana: Pessoa2 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao2.Atriz
}

const roberto: Pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao2.Padeiro
}

const laura: Pessoa2 = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao2.Atriz
}

const carlos: Pessoa2 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao2.Padeiro
}


//DESAFIO 3

let botaoAtualizar = document.getElementById('atualizar-saldo'); 
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => { 
    limparSaldo();
});