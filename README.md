# Final_Project
### Selected topic: NYC Restaurant Analysis

### Reason for selected topic: 
In this project, we came out with a hypothesis that if there are any correlation with the higher income areas should received a better health inspection grade. We would like to find out if the incomes level within an area may effect the the health inspection grade for the local restaurant. 

## Description of the source of data:
We looked at datasets on NYC DOH Restaurant Inspections provided by Kaggle. We settled on this dataset provided at kaggle for it contains many of the variables we were interested in, such as DBA, borough, cuisine description, and grade that we wish to look at in order to figure out the predictability of developing restaurant inspection grade based on these variables. 

Data Resources: [NYC Restaurant Inspection](https://www.kaggle.com/datasets/new-york-city/nyc-inspections?select=DOHMH_New_York_City_Restaurant_Inspection_Results.csv) & 
[NYC- Precovid Restaurant Data](https://www.kaggle.com/datasets/nathaliekelley/nyc-precovid-restaurant-data?select=Pre_restaurants.csv)

## Description of the communication process:
We used several modes of communication to maintain efficient communication throughout. We used an initial meeting on Zoom to lay out our base plan for the project (potential topics, division of roles and responsibilities, ways to communicate as the project progresses) and created a shared Google Drive, where we shared potential datasets, word documents to jot down our initial plans, and related files. We used Slack to troubleshoot and communicate in between our Zoom meetings.


## Questions to Answer with the Data

Finding correlation of the higher income areas would received a better health inspection grade.

## Database
 A sample database was created (sample_database) using postgreSQL. A sample dataset (sample.csv) was generated with the following specific attributes pulled from the original dataset: Gender, Age, Smoking, Alcohol Consuming, and Lung Cancer diagnosis.

## Machine learning model:
* Train a machine learning model with existing datasets and predict the possibility of developing lung cancer.
* Model could predict death or rate of cancer for that particular year or geographic region
* The preliminary data includes columns that describe different factors that can influence lung cancer.  
* These features include the labeled input data that would include income, health coverage, air pollution, neighborhoods, smoking, alcohol, population density  etc.
* From all the features,we will choose the features that we believed would have the highest correlation with lung cancer..


We will determine which features have the most impact on the outcome by ranking the features using the feature_importances_ attribute, and then sorting them in a descending order. 
This will rank the features, starting with those that have the highest impact down to those which have the lowest or no impact on our outcome variable.


* The data will be split into training and test data using the train_test_split function. We will use the default 75% to 25% split.
 

 Our sample size, as of yet, is small at 310. In order to overcome the issues that may arise out of a small sample size during our analysis, we will run a SMOTEENN resampling model on it. SMOTEENN oversamples the data points (via the SMOTE algorithm), before undersampling (via the EEN algorithm)to reach a sizeable sample size. The SMOTE (Synthetic Minority Oversampling Technique) algorithm oversamples the minority class in our dataset. The EEN (Edited Nearest Neighbors) algorithm undersamples by editing out the data points that happen to fall into both classes in our dataset. This should give us a good sample size. 
 Next, we run the fitting process on the training data (75% of our resampled data) to create our machine learning model. This is followed by a testing of this model, using the testing data (25% of our resampled data).


## Visualization
Plot a geo map for income level areas and showing the grades that spreading  amoung in the local area. 
- Creating a heatmap and story for presentation with Tableau
- Visualized the code with html, javascript and css. 
- Ploting graph to show the correlations between income level and health inspection grades. 


### Tools:
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

Other things for consideration:
data_Location: New York

Categories: income, health coverage, air pollution, neighborhoods, smoking, alcohol, population density
Sufficient number of observations for ML: 1,000+  data points per group

Decision Tree: What factors causing lung cancer

A heat map for death rate changes over years selected (visualization)

Model could predict death or rate of cancer for that particular year or geographic region


