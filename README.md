# Final_Project
### Selected topic:Cancer (Lung Cancer)

## Reason for selected topic: 
According to the World Health Organization (WHO), Cancer is one of the leading causes of death in the world. In tuhe United States, it is the second leading case of death just behind heart disease; where 1 in every 4 deaths is due to Cancer (CDC). Lung Cancer is the third most common Cancer in the United States (CDC).

## Description of the source of data:
We looked at datasets on lung cancer provided by CDC, NIH, and Kaggle to name a few. We settled on this dataset provided at data.world for it contains many of the variables we were interested in, such as smoking, anxiety, peer pressure, alcohol consumption, that we wish to look at in order to figure out the predictability of developing lung cancer based on these variables. 

## Questions to Answer with the Data

Finding correlation of lung cancer with income, health coverage, air pollution, neighborhoods, smoking, alcohol, population density, other factors (These factors are subject to change with datasets we find).

## Machine learning model:
* Train a machine learning model with existing datasets and predict the possibility of developing lung cancer.
* Model could predict death or rate of cancer for that particular year or geographic region
* The preliminary data includes columns that describe different factors that can influence lung cancer.  

* These features include the income, health coverage, air pollution, neighborhoods, smoking, alcohol, population density  etc.
* From all the features,we will choose the features that we believed would have the highest correlation with lung cancer..
* The data will be split into training and test data using the train_test_split function. We will use the default 75% to 25% split.
 

 Our sample size, as of yet, is small at 310. In order to overcomeissues that may arise out of a small sample size, we will run a SMOTEENN resampling model on it. SMOTEENN oversamples the data points, before undersampling to reach a sizeable sample size. This should give us a good sample size. 
Next, we run the fitting process on the training data (75%), followed by a testing of this model we created, using the testing data (25%).

 
FINAL FORM IS THE ONE BELOW:
 Our sample size, as of yet, is small at 310. In order to overcome the issues that may arise out of a small sample size during our analysis, we will run a SMOTEENN resampling model on it. SMOTEENN oversamples the data points (via the SMOTE algorithm), before undersampling (via the EEN algorithm)to reach a sizeable sample size. The SMOTE (Synthetic Minority Oversampling Technique) algorithm oversamples the minority class in our dataset. The EEN (Edited Nearest Neighbors) algorithm undersamples by editing out the data points that happen to fall into both classes in our dataset. This should give us a good sample size. 
 Next, we run the fitting process on the training data (75% of our resampled data) to create our machine learning model. This is followed by a testing of this model, using the testing data (25% of our resampled data).


## Visualization
A heat map for death rate changes over years selected. Showing the death rate amoung population with lung cancer in local area. 
- Creating a heatmap and story for presentation with Tableau
- Visualized the code with html, javascript and css. 


 Tools:
- Creating Database
- PostgreSQL
- Amazon Web Services (AWS)
- Connecting to Database
- Psycopg2
- Analyzing Data
- Pandas
- Machine Learning
- Imbalanced-learn
- Scikit-Learn
- Tensorflow
- Dashboard
- Tableau
- Javascript
- Flask
- HTML
- CSS
- Heroku


The presentation should tell a cohesive story about the project and include the following:
Selected topic
Reason the topic was selected
Description of the source of data
Questions the team hopes to answer with the data
Description of the data exploration phase of the project
Description of the analysis phase of the project
Technologies, languages, tools, and algorithms used throughout the project
Result of analysis
Recommendation for future analysis
Anything the team would have done differently

Location: New York
Possible Topics: Cancer (Lung Cancer)
Categories: income, health coverage, air pollution, neighborhoods, smoking, alcohol, population density
Sufficient number of observations for ML: 1,000+  data points per group

Decision Tree: What factors causing lung cancer

A heat map for death rate changes over years selected (visualization)

Model could predict death or rate of cancer for that particular year or geographic region


