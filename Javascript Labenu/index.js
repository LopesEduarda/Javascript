/*
1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
*/

const userAge = 20;
const bestFriendAge = 18;
console.log(userAge > bestFriendAge ? 'true' : 'false');
console.log('A diferença da idade entre os dois é:', userAge - bestFriendAge);


/*
2. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
*/

const nomeDoUsuario = 'Eduarda';
const emailDoUsuario = 'eduarda@gmail.com';
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda, ${nomeDoUsuario}!`);

/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.
*/

const favoriteFoods = ['Feijão', 'Pipoca', 'Japonês', 'Banana', 'Mingau de aveia'];
console.log(favoriteFoods);
console.log(
    `Essas são minhas comidas favoritas:
     ${favoriteFoods[0]}
     ${favoriteFoods[1]}
     ${favoriteFoods[2]}
     ${favoriteFoods[3]}
     ${favoriteFoods[4]}!
     `)

const userFavoriteFood = 'Hamburguer';
// comida favorita do usuário 

favoriteFoods.splice(1, 1, userFavoriteFood);
// primeiro parâmetro do slice: qual item vc quer remover
// segundo parâmetro do slice: quantos itens a partir do item que você mencionou anteriormente vc quer remover
// terceiro parâmetro do slice: o que você quer colocar no lugar do item que você removeu, qual a substituição
console.log(favoriteFoods);

const frase = 'Essas são as minhas comidas favoritas: ';
console.log(frase);

for (let i = 0; i < favoriteFoods.length; i++) { 
    console.log(favoriteFoods[i]);
}
