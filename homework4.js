var spec2 = "homework4.json";
var spec3 = "homework4.json";
vegaEmbed('#choropleth_map', spec2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#slider_viz', spec3).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);