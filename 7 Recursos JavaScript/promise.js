// Promises - um recurso javascript para lidar com operações assíncronas
// Essa promise é como se fosse um objeto, e temos métodos príncipais: then e catch
// Then seria o método em que encadeamos operações
// Catch seria para pegar algum erro que possa ocorrer em algum then.

function loadSomeData() {
    return new Promise(function (resolve, reject) {
        // resolve finaliza uma promise, sinaliza que deu certo e passa pra frente essa primeira parte da promise
        // reject, quando algo dá errado, é possível rejeitar a promise e retornar um erro

        setTimeout(function () {
            const data = { id: 123, name: 'Eduarda' };
            resolve(data);
        }, 1000)
    });
}

loadSomeData().then(function (data) {
    console.log(data);
    return data;
}).then(function(newData) {
    console.log(`O nome é:`, newData.name);
}).catch(function (error) {
    console.log(error);
});
// vai executar o primeiro then, depois o segundo then, e então finalizar a promise