# Final_Project
### Selected topic: NYC Restaurant Analysis

### Google slides link :
[Google Slides](https://docs.google.com/presentation/d/11oTL0XQdANk1oRAHP2maSfnjSAKa4D0l4QkrQKRJAZk/edit#slide=id.g129db8187be_0_64)

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
After cleaning the two datasets ['NYC Restaurant Inspection' and 'NYC-Precovid Restaurant Data'] using Python and Jupyter Notebook, the datasets were connected over to pgAdmin4 via SQLAlchemy to be stored in postgreSQL. 
 
* A database containing 'NYC Restaurant Inspection' data was created with the following columns: 'DBA', 'BOROUGH', 'STREET', 'ZIPCODE', 'CUISINE_DESCRIPTION', 'SCORE', and "GRADE'. 
* A second database using the 'NYC-Precovid Restaurant' dataset was created with the following columns: 'DBA', 'STREET', and 'INCOME_LEVEL'.  The two databases were then inner joined via the 'DBA' and 'STREET' columns as presented in the ERD diagram. After the merge, duplicate rows were removed. 
* The final dataset was generated with the following specific attributes: 'DBA', 'STREET', 'INCOME_LEVEL', 'BOROUGH', 'ZIPCODE', 'CUISINE_DESCRIPTION', 'SCORE', and 'GRADE'.
#### ERD
![ERD](https://github.com/Veronicaywl/Final_Project/blob/main/SQL_database/SQL_images/ERD_NYC_restaurants_final.png)

## Machine learning model:

### Preliminary data preprocessing, feature engineering and feature selection:

The data has categorical and numerical variables. The categorical variables include ‘DBA’, ‘STREET’, INCOME_LEVEL’, ‘BOROUGH’, ‘CUISINE_DESCRIPTION’, and ‘GRADE’. ‘ZIPCODE’ was converted into a ‘string’ data type, and hence became a categorical variable too. ‘SCORE’ is a numerical variable. The ‘GRADE’ variable consists of ‘A’, ‘B’, ‘C’, ‘N’, ‘P’, and ‘Z’ unique values. However, since we do not know what ‘N’ and ‘Z’ signify and ‘P’ signifies ‘pending’, we have dropped ‘N’, ‘P’, and ‘Z’ from our dataset to prepare a more reliable model.

Our features variables are as follows: ‘DBA’, ‘STREET’, INCOME_LEVEL’, ‘BOROUGH’, ‘CUISINE_DESCRIPTION’, ‘ZIPCODE’, and ‘SCORE’. Our target variable is ‘GRADE’. 
The features variables we chose signify geographical locality, income level of the area, and cuisine types. We are trying to build a model that can predict whether or not a restaurant will get a ‘high’ grade given these features variables. 

The preliminary data preprocessing included normalization of the categorical variables ‘DBA’, ‘STREET’, ‘ZIPCODE’, and ‘CUISINE_DESCRIPTION’. These specific categorical variables were picked out from the rest since these have rare (or uncommon) unique values enough that if left as is, would make the dataset to wide to work with. A density plot was used for each of these variables, to identify where the value counts ‘fall off’ and the threshold thus set in that particular region. The thresholds selected for these variables are as follows: 5 for ‘DBA’, 30 for ‘STREET’, 200 for ‘ZIPCODE’, and 250 for ‘CUISINE_DESCRIPTION’. The rare values were bucketed into the ‘other’ category, to help normalize the uneven distribution. A categorical variable ‘CUISINE_DESCRITPION’s rare values and density plot prior to normalization is shown below:

The encoding process included encoding the ‘GRADE’ variable into a ‘high’ and ‘low’ grade: grade ‘high’ comprised grades ‘A’ and ‘B’, whereas grade ‘low’ comprised grade ‘C’. This was followed by running a OneHotEncoder on all the categorical variables in our data.

### Description of how data was split into training and testing data, and data standardization:

The data was then split into training and testing data (75% training and 25% testing data). About 75% of the data (i.e. the training data) was used for training (or ‘fitting’) the models, and the remaining 25% data (i.e. the testing data) was used for testing each model. After the data split, the numerical variables in the data were standardized. We standardize after we split the data, and not before, because we do not want to include the testing values into the scale. 
The data we are working with is tabular and not raw (i.e. has no natural language data or images therein), so supervised machine learning models run well on it. 

### Explanation of model choice, including limitations and benefits:

The different supervised machine learning models tried on our data include resampling and ensemble learning models. The resampling models used on the data include: Naive Random Oversampling, SMOTE Oversampling, Cluster Centroids Undersampling, and SMOTEENN which combines over- and under-sampling techniques. 
Naive Random Oversampling and SMOTE Oversampling ‘oversample’ the minority class so the data values are on par with the majority class. The resample gives us 5598 ‘high’ and 5598 ‘low’ grades to run the ML model on. We experimented with Cluster Centroids Undersampling as well, which ‘undersamples’ the majority class down to equal the number of values in the minority class: this gives us 159 ‘high’ and 159 ‘low’ grades to run the ML model on. The SMOTEENN resampling method combines over and under sampling techniques by ‘oversampling’ the minority class to equate the number of data values in the majority class, followed by ‘undersampling’ by eliminating the data values that happen to fall in the neighborhood of both classes. This technique gave us 5008 ‘high’ and 5043 ‘low’ grades to run the ML model on. The ensemble learning models used on the data include: Random Forest Classifier, Balanced Random Forest Classifier, and Easy Ensemble AdaBoost Classifier.

From among these models, the best model turns out to be the Random Forest Classifier, which has an accuracy score of 0.96 (as compared to scores of about 0.43 to 0.69 for all the other models tried). A Random Forest Classifier  involves training each weak learner on a subset of the data and then bases its result on the consensus reached by these weak learners together. A Random Forest Classifier model can, however, miss out the variability in the data. However, if the model’s number of estimators and tree depth is sufficient, it should perform quite well. The confusion matrix for this model can be seen below:


## Visualization
Plot some useful maps based on income level in the areas and showing the grades that spreading amoung in the local area. 
- Creating a heatmap showing the average scores by cuisine in different borough.
- Plot a Geo map to indicate the grades that restaurants received in five borough.
- An interactive dashboard using javascript , html, css , bootstrap where we can filter New York city restaurant  data by zip code, income level, grade, borough and cuisine, separately and also in different combination. 
- Use plotly and javascript to make interactive graph to visualize mean grading score by cuisine in different zip code.


## Tools:

#### Creating Database
- PostgreSQL

#### Connecting to Database
- SQLAlchemy

#### Analyzing Data
- Pandas

#### Machine Learning
- Imbalanced-learn
- sklearn


#### Dashboard
- Tableau
- Javascript
- Plotly
- Flask
- HTML
- CSS
- Bootstrap
- Heroku



### Dashboard link :
[Dashboard](https://docs.google.com/presentation/d/1pMOhrs9x0gpjzY27lDiT6kX4VvVU2djwglDEqmNtXrU/edit#slide=id.g11c86ef9d0d_0_0)

[Click here to checkout our NYC Restaurant Analysis Webpage](https://veronicaywl.github.io/NYC_Dashboard/)

[Click here for NYC Restaurant Dashboard](https://veronicaywl.github.io/NYC_Restaurant_Plotly/)

![Dashboard_1](https://github.com/Veronicaywl/Final_Project/blob/main/Dashboard/Dashboard_1/static/images/Dashboard_1.png)


![plotly_Dashboard](https://github.com/Veronicaywl/Final_Project/blob/main/Dashboard/plotly_dashboard/plotly_dashboard.png)

### Tableau link : 

[Dashboard](https://public.tableau.com/app/profile/yawen.liang/viz/NYC_Restaurant_Analysis/Dashboard1)

[GeoMap based on Income](https://public.tableau.com/app/profile/yawen.liang/viz/GeoMapbasedonincome/GeoMap)

[Heat Map](https://public.tableau.com/app/profile/yawen.liang/viz/GeoMapbasedonincome/HeatMapbyCuisine?publish=yes)

[Story](https://public.tableau.com/app/profile/yawen.liang/viz/NYC_Restaurant_Analysis/Story1?publish=yes)

### Reference Resources
[Letter Grading for Restaurant](https://www1.nyc.gov/site/doh/business/food-operators/letter-grading-for-restaurants.page) ; 
[Inspection Cycle Overview](https://www1.nyc.gov/assets/doh/downloads/pdf/rii/inspection-cycle-overview.pdf) ; 



