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
 A database containing the data from a restaurant inspection dataset and a income level dataset was created using postgreSQL. The dataset was generated with the following specific attributes pulled from the original datasets: Borough, income level, DBA, street, grade date, latitude, longitude, and income level.

## Machine learning model:

# THIS will be updated SOOONNNNN.

* Description of preliminary data preprocessing :

* Description of preliminary feature engineering and the preliminary feature selection including their decision making process:

* Description of how data was split into test and train sets:

* Explanation of model choice including limitations and benefit:



* Train a machine learning model with the merged dataset to observe if there is a correlation between the inspection grade of restaurants with the income level of the neighborhoods.
* This is a supervised machine learning model.


We will determine which features have the most impact on the outcome by ranking the features using the feature_importances_ attribute, and then sorting them in a descending order. 
This will rank the features, starting with those that have the highest impact down to those which have the lowest or no impact on our outcome variable.


* The data will be split into training and test data using the train_test_split function. We will use the default 75% to 25% split.
 

 Our sample size, as of yet, is small at 310. In order to overcome the issues that may arise out of a small sample size during our analysis, we will run a SMOTEENN resampling model on it. SMOTEENN oversamples the data points (via the SMOTE algorithm), before undersampling (via the EEN algorithm)to reach a sizeable sample size. The SMOTE (Synthetic Minority Oversampling Technique) algorithm oversamples the minority class in our dataset. The EEN (Edited Nearest Neighbors) algorithm undersamples by editing out the data points that happen to fall into both classes in our dataset. This should give us a good sample size. 
 Next, we run the fitting process on the training data (75% of our resampled data) to create our machine learning model. This is followed by a testing of this model, using the testing data (25% of our resampled data).


## Visualization
Plot some useful maps based on income level in the areas and showing the grades that spreading amoung in the local area. 
- Creating a heatmap showing the average scores by cuisine in different borough.
- Plot a Geo map to indicate the grades that restaurants received in five borough.
- Visualized the code with html, javascript and css. 
- Ploting graph to show the correlations between income level and health inspection grades. 
- An interactive dashboard using javascript , html, css , bootstrap where we can filter New York city restaurant  data by zip code, income level, grade, borough and cuisine, separately and also in different combination. 
- Use plotly and javascript to make interactive graph to visualize mean grading by cuisine in different zip code.


## Tools:

#### Creating Database
- PostgreSQL

#### Connecting to Database
- SQLAlchemy

#### Analyzing Data
- Pandas

#### Machine Learning
- Imbalanced-learn
- Scikit-Learn
- Tensorflow

#### Dashboard
- Tableau
- Javascript
- Plotly
- Flask
- HTML
- CSS
- Bootstrap
- Heroku


### Google slides link :
[Google Slides](https://docs.google.com/presentation/d/11oTL0XQdANk1oRAHP2maSfnjSAKa4D0l4QkrQKRJAZk/edit#slide=id.g129db848aba_0_10)


### Tableau link : 
[Average Score by Grades](https://public.tableau.com/app/profile/yawen.liang/viz/NYCRestaurantAnalysis_16524727144810/AvgScorebyGrades#1)

[GeoMap based on Income](https://public.tableau.com/app/profile/yawen.liang/viz/GeoMapbasedonincome/GeoMap)

[Heat Map](https://public.tableau.com/app/profile/yawen.liang/viz/GeoMapbasedonincome/HeatMapbyCuisine?publish=yes)

### Reference Resources
[Letter Grading for Restaurant](https://www1.nyc.gov/site/doh/business/food-operators/letter-grading-for-restaurants.page) ; 
[Inspection Cycle Overview](https://www1.nyc.gov/assets/doh/downloads/pdf/rii/inspection-cycle-overview.pdf) ; 



