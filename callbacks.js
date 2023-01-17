const nomes = ["Maria Eduarda", "Jhonnatan", "Aline"];

nomes.forEach(function (nome) {
    console.log(nome);
});

nomes.forEach((nome) => {
    console.log(nome);
});

function imprimeNome(nome) {
    console.log(nome);
};

nomes.forEach(imprimeNome);
// é possível criar a função separada e depois chamá-la no forEach