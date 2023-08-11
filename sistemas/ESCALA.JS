function escalaPorFormula(formula='TSTTTTS') {
    let contador = 0;
    let resultado = [0];
    for (v of formula) {
        if (v === 'T') {
            contador += 2;
            resultado.push(contador);
        } else if (v === 'S') {
            contador += 1;
            resultado.push(contador);
        }
    }
    return resultado;
}

console.log(escalaPorFormula());