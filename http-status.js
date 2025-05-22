const express = require('express');
const app = express();
const port = 7000;

let names = [];

app.get('/', (req, res) => {
    res.status(200).send( { message: 'Hello, world!' } );
});

app.post('/', (req, res) => {
    const name = 'Eduarda';
    names.push(name);

    res.status(201).send( { message: 'Nome inserido com sucesso!', names})
})

app.delete('/:id', (req, res) => {
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})