class Pessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, cpf, matricula, turma) {
        super(nome, idade, cpf);
        this.matricula = matricula;
        this.turma = turma;
    }

    estudar() {
        return `${this.nome} está trabalhando com a ${this.turma}.`;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, cpf, disciplina) {
        super(nome, idade, cpf);
        this.disciplina = disciplina;
    }

    ensinar() {
        return `${this.nome} está estudando ${this.disciplina}.`;
    }
}

const aluno1 = new Aluno("Enéas Carneiro", 68, "123.456.789-00", "A123", "Turma de Direito");
const professor1 = new Professor("Luz", 17, "987.654.321-00", "Direito");

console.log(aluno1.apresentar());
console.log(aluno1.estudar());
console.log(professor1.apresentar());
console.log(professor1.ensinar());
