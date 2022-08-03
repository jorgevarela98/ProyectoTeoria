var chart;

am4core.ready(function() {
  
  // *** CHARTDIV ***
  // Grafico de crecimiento poblacional a traves del tiempo
  // Themes begin
  am4core.useTheme(am4themes_dataviz);
  // Themes end

  // Create chart instance
  chart = am4core.create("chartdiv", am4charts.XYChart);

  // Increase contrast by taking evey second color
  chart.colors.step = 2;

  // Add data
  chart.data = [
    {date: '2020', crecimientoPoblacional: 9500000},
    {date: '2020', crecimientoPoblacional: 9500000},
    {date: '2021', crecimientoPoblacional: 9520000},
    {date: '2022', crecimientoPoblacional: 9576140},
    {date: '2023', crecimientoPoblacional: 9596788},
    {date: '2024', crecimientoPoblacional: 9610000},
    {date: '2025', crecimientoPoblacional: 9612354},
    {date: '2026', crecimientoPoblacional: 9625000}
  ];

  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 50;

  // Create series
  function createAxisAndSeries(field, name, opposite, bullet) {
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    if(chart.yAxes.indexOf(valueAxis) != 0){
      valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
    }
    
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.yAxis = valueAxis;
    series.name = name;
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.tensionX = 0.8;
    series.showOnInit = true;
    
    var interfaceColors = new am4core.InterfaceColorSet();
    
    switch(bullet) {
      case "triangle":
       
      default:
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.stroke = interfaceColors.getFor("background");
        bullet.circle.strokeWidth = 2;
        break;
    }
    
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.line.stroke = series.stroke;
    valueAxis.renderer.labels.template.fill = series.stroke;
    valueAxis.renderer.opposite = opposite;
  }

  createAxisAndSeries("crecimientoPoblacional", "Crecimiento Poblacional", false, "circle");

  // Add legend
  chart.legend = new am4charts.Legend();

  // Add cursor
  chart.cursor = new am4charts.XYCursor();

}); // end am4core.ready()