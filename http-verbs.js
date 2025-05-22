const express = require('express');
const app = express();
const port = 7000;

let users = [
  { id: 1, name: "Maria", email: "maria@example.com" },
  { id: 2, name: "João", email: "joao@example.com" },
];


app.get('/', (req, res) => {
    res.send(users);
});


app.post('/', (req, res) => {
    const newUser = [
        { id: 3, name: 'Patrick', email: 'patrick@example.com' }
    ];

    res.status(201).send( { message: 'usuário criado com sucesso!', newUser } );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})