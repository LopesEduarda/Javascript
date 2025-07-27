const alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 5] },
    { nome: "Carlos", notas: [9, 9, 10] },
    { nome: "Duda", notas: [6, 7, 6] },
  ];

  for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    // criamos inicialmente uma variável aluno que recebe o objeto do array alunos na posição i
    // ou seja, na primeira iteração aluno será igual a { nome: "Ana", notas: [8, 7, 9] }
    // na segunda iteração aluno será igual a { nome: "Bruno", notas: [5, 6, 5] } e assim por diante
    // O for percorre o array alunos, e a cada iteração pega o objeto aluno na posição i
    // e executa o código dentro do bloco do for
    let somaNotas = 0;

    // enquanto houver notas dentro de aluno.notas, o for irá percorrer cada uma delas
    // e irá somar cada nota na variável somaNotas
    for (let j = 0; j < aluno.notas.length; j++) {
        somaNotas += aluno.notas[j];
        // aqui, aluno.notas[j] pega a nota na posição j do array notas do objeto aluno
        // e soma na variável somaNotas
    }

      const media = somaNotas / aluno.notas.length;
      // aqui, a média é calculada dividindo a soma das notas pela quantidade de notas
      // aluno.notas.length retorna a quantidade de notas do aluno
      // por exemplo, se aluno.notas for [8, 7, 9], aluno.notas.length será 3
    console.log(`A média de ${aluno.nome} é ${media.toFixed(2)}`);
  }