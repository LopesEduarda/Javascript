// https://jsonplaceholder.typicode.com

/*
Recursos Disponíveis
Posts: /posts
Comentários: /comments
Álbuns: /albums
Fotos: /photos
To-dos: /todos
Usuários: /users
*/

const axios = require('axios');

const api_key = '26e0750e-a5e8-11ef-bb67-0242ac130003-26e07572-a5e8-11ef-bb67-0242ac130003';
const cidade = 'Florianópolis';

async function obterClimaPorCidade() {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api`
      );
      console.log('RESPONSE>', response.data)
    // const { temp } = response.data.main;
    // console.log(`A temperatura atual em ${cidade} é ${temp}°C.`);
  } catch (error) {
    // console.error('Erro ao obter dados:', error.response.data.message);
  }
}

obterClimaPorCidade();