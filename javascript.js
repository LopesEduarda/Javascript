function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    return salarioHora;
}

console.log(ganhoPorHora(3000, 200));