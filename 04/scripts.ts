const computador: { produto: string, lote: number, ano: number, qtd: number } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 42
};

const gerarEtiquetas = (computador: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    const etiquetas: string[] = [];

    for (let i = 1; i <= computador.qtd; i++) {
        const numeroFormatado: string = i.toString().padStart(3, '0')
        etiquetas.push(`${computador.lote}-${computador.ano}-${numeroFormatado}`);
    }

    return etiquetas;
}

console.log(gerarEtiquetas(computador));