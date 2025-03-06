class Pessoa {
    constructor(nome, idade, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        return `Nome: ${this.nome} | Idade: ${this.idade} | Endereço: ${this.endereco}`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, endereco, matricula) {
        super(nome, idade, endereco);
        this.matricula = matricula;
    }

    exibirMatricula() {
        return `Matrícula: ${this.matricula}`;
    }

    exibirInformacoes() {
        return `${super.exibirInformacoes()} | ${this.exibirMatricula()}`;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, endereco, disciplina) {
        super(nome, idade, endereco);
        this.disciplina = disciplina;
    }

    exibirDisciplina() {
        return `Disciplina: ${this.disciplina}`;
    }

    exibirInformacoes() {
        return `${super.exibirInformacoes()} | ${this.exibirDisciplina()}`;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, endereco, cargo) {
        super(nome, idade, endereco);
        this.cargo = cargo;
    }

    exibirCargo() {
        return `Cargo: ${this.cargo}`;
    }

    exibirInformacoes() {
        return `${super.exibirInformacoes()} | ${this.exibirCargo()}`;
    }
}

let pessoas = [];

function adicionarPessoa(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const endereco = document.getElementById('endereco').value;
    const tipo = document.getElementById('tipo').value;
    const infoExtra = document.getElementById('infoExtra').value;

    let novaPessoa;

    if (tipo === 'Aluno') {
        novaPessoa = new Aluno(nome, idade, endereco, infoExtra);
    } else if (tipo === 'Professor') {
        novaPessoa = new Professor(nome, idade, endereco, infoExtra);
    } else if (tipo === 'Funcionario') {
        novaPessoa = new Funcionario(nome, idade, endereco, infoExtra);
    }

    pessoas.push(novaPessoa);

    atualizarExibicao();

    document.getElementById('personForm').reset();
    mostrarMensagem('Pessoa adicionada com sucesso!');
}

function excluirPessoa(index) {
    pessoas.splice(index, 1);
    atualizarExibicao();
    mostrarMensagem('Pessoa excluída com sucesso!');
}

function atualizarExibicao() {
    const divPessoasInfo = document.getElementById('pessoasInfo');
    divPessoasInfo.innerHTML = '';

    pessoas.forEach((pessoa, index) => {
        const pessoaDiv = document.createElement('div');
        pessoaDiv.classList.add('person-info');
        pessoaDiv.innerHTML = `
            <h2>${pessoa.constructor.name}</h2>
            <p>${pessoa.exibirInformacoes()}</p>
            <button onclick="excluirPessoa(${index})">Excluir</button>
        `;
        divPessoasInfo.appendChild(pessoaDiv);
    });
}

function mostrarMensagem(mensagem) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = mensagem;
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}

document.getElementById('personForm').addEventListener('submit', adicionarPessoa);

