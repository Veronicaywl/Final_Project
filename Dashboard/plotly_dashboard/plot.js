var boroughName =NYCRestaurant .map(boroughName=> boroughName.borough);
var incomeLevel = NYCRestaurant .map(incomeLevel=> incomeLevel.income_level);
var gradingScore = NYCRestaurant .map(gradingScore=> parseInt(gradingScore.Score));

var trace = {
    x: boroughName,
    y: incomeLevel,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Income Level by Borough",
    xaxis: {title: "Borough" },
    yaxis: {title: "Income Level"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  var trace1 = {
    x: boroughName,
    y: incomeLevel,
    type: "pie"
  };
  var data = [trace1];
  var layout = {
    title: "Income Level by Borough pie chart",
   
  };
  Plotly.newPlot("plotArea", data, layout);