const alunos = [
    { nome: 'Aline', nota: 7 },
    { nome: 'Ronaldo', nota: 5 },
    { nome: 'José', nota: 8 },
    { nome: 'Maria', nota: 4 },
    { nome: 'Nicole', nota: 6 },
];

// Vamos calcular a média das notas dos alunos
function calcularMedia(arrayDeAlunos) {
    // Usamos o método reduce para somar todas as notas
    const totalNotas = arrayDeAlunos.reduce((total, aluno) => total + aluno.nota, 0);

    // Agora, calculamos a média dividindo o total pela quantidade de alunos
    return totalNotas / arrayDeAlunos.length;
}

// Aqui, adicionamos status de aprovação e média geral aos alunos
function adicionarStatusAprovacao(arrayDeAlunos) {
    // Primeiro, calculamos a média das notas
    const media = calcularMedia(arrayDeAlunos);

    // Em seguida, usamos o método map para criar um novo array de alunos com status e média
    return arrayDeAlunos.map(aluno => ({
        ...aluno, // Mantemos as informações do aluno
        status: aluno.nota >= 6 ? 'Aprovado' : 'Reprovado', // Adicionamos o status de aprovação
        mediaGeral: media, // Adicionamos a média geral a cada aluno
    }));
}

// Vamos chamar a função para obter o novo array de alunos com status e média
const alunosComStatus = adicionarStatusAprovacao(alunos);

// Agora, exibimos o resultado no console
console.log(alunosComStatus);
