export const options = {
  title: 'Respostas por Relatório (Ano)',
  axes: {
    bottom: {
      title: 'Relatório (Ano)',
      mapsTo: 'key',
      scaleType: 'labels'
    },
    left: {
      mapsTo: 'value',
      title: 'Valor (%)',
      scaleType: 'linear'
    }
  },
  height: '600px'
};

export const loadingOptions = {
  title: 'Respostas por Relatório (Ano)',
  axes: {
    bottom: {
      title: 'Relatório (Ano)',
      mapsTo: 'key',
      scaleType: 'labels'
    },
    left: {
      mapsTo: 'value',
      title: 'Valor (%)',
      scaleType: 'linear'
    }
  },
  data: {
    loading: true
  },
  height: '600px'
};