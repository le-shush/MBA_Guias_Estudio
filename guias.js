// Datos de la página. Para actualizarla sólo se edita este archivo.
window.MBA = {
  // Estimado para cada guía nueva: $3,375 de las dos primeras ÷ 2. Úsalo como `costo` al agregar una guía.
  costoEstimadoPorGuia: 1687.5,
  donaciones: {
    recaudado: 0,   // MXN recibidos hasta ahora
    link: '',       // liga de pago; mientras esté vacía no se muestra el botón
  },
  guias: [
    {
      nombre: 'Análisis Financiero',
      desc: 'Razones financieras, DuPont, fuentes y usos, flujo de efectivo y práctica tipo examen. Incluye el Detective Financiero.',
      url: 'https://le-shush.github.io/DetectiveFinanciero_Dataviz/estudio.html',
      costo: 1930,
    },
    {
      nombre: 'Perspectivas Económicas Internacionales',
      desc: 'Crecimiento, flujos internacionales, política fiscal y monetaria, tipo de cambio, bancos y riesgo climático.',
      url: 'https://le-shush.github.io/PanoramaEconomico_Estudio/',
      costo: 2085,
    },
  ],
};
