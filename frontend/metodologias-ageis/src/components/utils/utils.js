export const formatTableData = (data) => {
    const formattedData = []
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
    // console.log(formattedData);
    return formattedData;
};
