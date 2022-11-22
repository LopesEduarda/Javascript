function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    return salarioHora;
}

console.log(ganhoPorHora(3000, 176));
/*
O valor por hora do salário seria: 17.045454545454547. Mas, como estamos falando de um valor monetário, esse número deveria ter apenas duas casas decimais. Isto é, o que queremos é arredondar esse resultado para reduzir as casas decimais.

Como estamos utilizando o JavaScript, já existe um método da classe Math que arredonda os números, a Math.round().
*/