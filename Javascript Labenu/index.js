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

