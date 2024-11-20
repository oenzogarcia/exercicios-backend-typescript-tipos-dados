const palavra: string = 'programador top';

const soletrar = (palavra: string): string => {
    let palavraSoletrada: string = '';

    for (const letra of palavra) {
        if (letra !== ' ') {
            palavraSoletrada += `-${letra}`;
        }
    }

    return palavraSoletrada.slice(1);

    // return palavra.split('').join('-');
}

console.log(soletrar(palavra));