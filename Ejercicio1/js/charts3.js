// Global variables for charts
var chart2;

am4core.ready(function () {
  // *** CHARTDIV ***
  // Grafico de crecimiento poblacional a traves del tiempo
  // Themes begin
  am4core.useTheme(am4themes_moonrisekingdom);
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  chart2 = am4core.create("chartdiv2", am4charts.XYChart);

  // Increase contrast by taking evey second color
  chart2.colors.step = 2;

  // Add data
  chart2.data = [
    { date: "2020", muertesHomicidios: 9500000, muerteAccidente: 9500000 },
    { date: "2021", muertesHomicidios: 9520000, muerteAccidente: 9515321 },
    { date: "2022", muertesHomicidios: 9576140, muerteAccidente: 9552100 },
    { date: "2023", muertesHomicidios: 9596788, muerteAccidente: 9558798 },
    { date: "2024", muertesHomicidios: 9610000, muerteAccidente: 9571000 },
    { date: "2025", muertesHomicidios: 9612354, muerteAccidente: 9582100 },
    { date: "2026", muertesHomicidios: 9625000, muerteAccidente: 9600478 },
  ];

  // Create axes
  var dateAxis = chart2.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 50;

  // Create series
  function createAxisAndSeries(field, name, opposite, bullet) {
    var valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
    if (chart2.yAxes.indexOf(valueAxis) != 0) {
      valueAxis.syncWithAxis = chart2.yAxes.getIndex(0);
    }

    var series = chart2.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.yAxis = valueAxis;
    series.name = name;
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.tensionX = 0.8;
    series.showOnInit = true;

    var interfaceColors = new am4core.InterfaceColorSet();

    switch (bullet) {
      case "triangle":
        var bullet = series.bullets.push(new am4charts.Bullet());
        bullet.width = 12;
        bullet.height = 12;
        bullet.horizontalCenter = "middle";
        bullet.verticalCenter = "middle";

        var triangle = bullet.createChild(am4core.Triangle);
        triangle.stroke = interfaceColors.getFor("background");
        triangle.strokeWidth = 2;
        triangle.direction = "top";
        triangle.width = 12;
        triangle.height = 12;
        break;
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

  createAxisAndSeries("muertesHomicidios", "Suicidios", false, "circle");
  createAxisAndSeries("muerteAccidente", "Muertes violentas", true, "triangle");

  // Add legend
  chart2.legend = new am4charts.Legend();

  // Add cursor
  chart2.cursor = new am4charts.XYCursor();
}); // end am4core.ready()
