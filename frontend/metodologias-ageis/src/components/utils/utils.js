export const formatTableData = (data) => {
    const formattedData = [];
    data.map((data, key) => {
        formattedData.push(
            {
                id: key,
                relatorio: `${data.relatorio.sigla} (${data.relatorio.ano})`,
                resposta: data.submetrica.descricao,
                valor: data.valor
            }
        )
    });

    return formattedData;
};

export const formatChartData = (data) => {
    const formattedData = [];
    data.map(data => {
        formattedData.push(
            {
                group: data.submetrica.descricao,
                key: data.relatorio.sigla,
                value: data.valor
            }
        )
    });

    return formattedData;
};