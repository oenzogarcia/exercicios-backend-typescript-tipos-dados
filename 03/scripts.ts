const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const montarTabuada = (numeros: number[]): string => {
    let resultadoTabuada: string = '';
    let tabuada: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (const numero of numeros) {
        for (const numeroDaTabuada of tabuada) {
            let resultadoMultiplicacao: number = numero * numeroDaTabuada;
            resultadoTabuada += `${numero} x ${numeroDaTabuada} = ${resultadoMultiplicacao}\n`;
        }
        resultadoTabuada += '---------------\n';
    }

    return resultadoTabuada;
}

console.log(montarTabuada(numeros));