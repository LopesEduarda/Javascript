// escolheremos alguma chave da lista de clientes e ordenar

const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }

    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });

  return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");
// chamamos a nossa função ordenar com a lista de clientes, e a propriedade pela qual queremos ordenar, ou seja, "nome"
console.log(ordenadoNome);
