// filtrar apenas as pessoas que tem apartamento e não preencheram o complemento

const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);
console.log(filtrados);