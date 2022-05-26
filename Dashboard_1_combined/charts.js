function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
    
  }
  
  // Demographics Panel 
  function buildMetadata(sample ){
    d3.json("samples.json").then((data) => {
      var metadata = data.samples;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.zipcode == sample);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toLowerCase()}: ${value}`);
      });
  
    });
  }
  
  // 1. Create the buildCharts function.
  function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
      // 3. Create a variable that holds the samples array. 
      console.log(data);
      var samplesArray = data.samples;
      console.log(samplesArray);
    
      // 4. Create a variable that filters the samples for the object with the desired sample number.
      var selectIdSample = samplesArray.filter(data=> data.zipcode == sample);
      console.log(selectIdSample);
      //  5. Create a variable that holds the first sample in the array.
      var firstSample = selectIdSample[0];
      console.log(firstSample);
  
      // 6. Create variables that hold the zipcode, score, and cuisine.
      var Zipcode = firstSample.zipcode;
      var Score = firstSample.score;
      var Cuisine= firstSample.cuisine;
      console.log(Zipcode);
      console.log(Score);
      console.log(Cuisine);
      // 7. Create the yticks for the bar chart.
  
  
      var yticks = Score.slice(0,10).map(score => "score:" + score).reverse();
      console.log(yticks);

  
      // 8. Create the trace for the bar chart. 
      var barData = [{
        x: Cuisine.slice(0,10).reverse(),
        text: Score.slice(0,10).reverse(),
       
        type: "bar"
      }];
      // 9. Create the layout for the bar chart. 
      var barLayout = {
        title: "Top 10 Cuisine by score for selected Zip code",
        yaxis: {
          tickmode: "array",
          tickvals: [0,1,2,3,4,5,6,7,8,9],
          ticktext: yticks
        },
        annotations: [{
          xref: 'paper',
          yref: 'paper',
          x: 0.5,
          xanchor: 'center',
          y: -0.25,
          yanchor: 'center',
          text: 'The bar chart displays Top 10 Cuisine by score ',
          showarrow: false
        }]
      };

       
      
      // 10. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar", barData, barLayout, {responsive: true});
    

    // Bar and Bubble charts
// Create the buildCharts function.
//function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  //d3.json("samples.json").then((data) => {
    

    
    //Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
  
    
    var bubbleData = [{
      x: Cuisine,
      y: Score,
      text: Cuisine,
      mode: 'markers',
      marker:{
        size: Score,
        sizeref: 0.2,
        color: Score,
        colorscale: "Earth"
      },
      options: {
        responsive:true,
      }
     
    }];
    console.log(bubbleData);


    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Cuisine by score for selected Zip code',
      showlegend: false,
      xaxis: {title: "Cuisine", automargin: true},
      yaxis: {title: "Score",automargin: true},
      hovermode:'closest' 
    };
    console.log(bubbleLayout);

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout, {responsive: true}); 



// Create the buildChart function.
//function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  //d3.json("samples.json").then((data) => {
    //console.log(data);


    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata_SelId = data.metadata.filter(data => data.zipcode == sample);
    console.log(metadata_SelId);  

    // Create a variable that holds the first sample in the array.
  
    // 2. Create a variable that holds the first sample in the metadata array.

    // 3. Create a variable that holds the washing frequency.
    var cuisineScore = +metadata_SelId[0].score;
    // Create the yticks for the bar chart.
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: cuisineScore,
        title: { text: "Cuisine score for <b>selected Zip code"},
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: {
            range: [null, 10],
            tickmode: "array",
            tickvals: [0,2,4,6,8,10],
            ticktext: [0,2,4,6,8,10]
          },
          bar: {color: "green"},
          steps: [
            { range: [0, 2], color: "red" },
            { range: [2, 4], color: "orange" },
            { range: [4, 6], color: "yellow" },
            { range: [6, 8], color: "blue" },
            { range: [8, 10], color: "purple" }]
        }
      }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      autosize: true,
      annotations: [{
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        xanchor: 'center',
        y: 0,
        yanchor: 'center',
        text: "The gauge displays cuisine score for<br> selected Zip code",
        showarrow: false
      }]
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout, {responsive: true});
  });
}

 