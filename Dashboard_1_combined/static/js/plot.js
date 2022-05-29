// Create the accuracy score chart 
var barData_2 = [{
    x: ['Naive Random Oversampling', 'SMOTE Oversampling', 'Cluster Centroids Undersampling', 'SMOTEENN', 'Random Forest Classifier', 'Balanced random forest Classifier','Easy Ensamble AdaBoost Classifier'],
    y: [0.51, 0.65, 0.22, 0.92, 0.97, 0.52, 0.46],
    type: "bar"
  }];
  var barLayout_2 = {
    title: 'ML_Model Accuracy Score',
    font: {
        family: 'Raleway, sans-serif'
    },
    showlegend: false,
    // xaxis: {
    //     tickangle: -45
    // },
    yaxis: {
        title: 'Accuracy Score',
        zeroline: false,
        gridwidth: 2,
        tickformat: '.2f'
    },
    bargap: 0.1
  };
  
  Plotly.newPlot('barPlot', barData_2, barLayout_2, { responsive: true });
  