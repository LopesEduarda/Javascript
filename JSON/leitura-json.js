const dados = require("./cliente.json");
// Require é uma função que o nosso ambiente node nos fornece para puxar o código de algum outro lugar
// Nesse momento ele está puxando um arquivo JSON e transformando num objeto usável
console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
// transformar JSON em string 

console.log(typeof clienteEmString);
// string

// é mais simples usar textos na tecnologia do que objetos. por isso a importancia de transformar 
// json em objetos


const clienteEmObjeto = JSON.parse(clienteEmString);
console.log(clienteEmObjeto);
console.log(typeof clienteEmObjeto);
// transformar string de volta em objetos