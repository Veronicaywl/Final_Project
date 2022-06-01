# NYC Restaurant Analysis

## Table of Contents
- [Google slides link](#google-slides-link)
- [Reason for selected topic](#reason-for-selected-topic) 
- [Description of the source of data](#description-of-the-source-of-data)
- [Database](#database)
- [Questions to Answer with the Data](#questions-to-answer-with-the-data)
- [Data Exploration](#data-exploration)
- [ERD](#erd)
- [Machine learning model](#machine-learning-model)
    - [Preliminary data preprocessing, feature engineering and feature selection](#preliminary-data-preprocessing-feature-engineering-and-feature-selection)
        - [About the data](#about-the-data)
        - [Feature engineering, selection, and model tweaking](#feature-engineering-selection-and-model-tweaking)
        - [Data preprocessing](#data-preprocessing)
    - [Description of how data was split into training and testing data, and data standardization](#description-of-how-data-was-split-into-training-and-testing-data-and-data-standardization)
    - [Explanation of model choice, including limitations and benefits](#explanation-of-model-choice-including-limitations-and-benefits)
    - [Explanation of changes in model choice](#explanation-of-changes-in-model-choice)
    - [Description of how we have trained the model and the additional training](#description-of-how-we-have-trained-the-model-and-the-additional-training)
    - [Description of current accuracy score](#description-of-current-accuracy-score)
- [Tools](#tools)
- [Dashboard link](#dashboard-link)
- [Tableau link](#tableau-link)
- [Reference Resources](#reference-resources)
- [Summary](#Summary )
- [Team Members](#team-members)


### Google slides link:
[Google Slides](https://docs.google.com/presentation/d/11oTL0XQdANk1oRAHP2maSfnjSAKa4D0l4QkrQKRJAZk/edit#slide=id.g129db8187be_0_64)

### Reason for selected topic: 
In this project, we came out with a hypothesis that if there are any correlation with the higher income areas should received a better health inspection grade. We would like to find out if the incomes level within an area may effect the the health inspection grade for the local restaurant. 

## Description of the source of data:
We looked at datasets on NYC DOH Restaurant Inspections provided by Kaggle. We settled on this dataset provided at kaggle for it contains many of the variables we were interested in, such as DBA, borough, cuisine description, and grade that we wish to look at in order to figure out the predictability of developing restaurant inspection grade based on these variables. 

Data Resources: [NYC Restaurant Inspection](https://www.kaggle.com/datasets/new-york-city/nyc-inspections?select=DOHMH_New_York_City_Restaurant_Inspection_Results.csv) & 
[NYC- Precovid Restaurant Data](https://www.kaggle.com/datasets/nathaliekelley/nyc-precovid-restaurant-data?select=Pre_restaurants.csv)

## Data Exploration
Utilizing pandas, we read in the two CSV files we would be using for our analysis and dropped any columns that were not necessary for our data visualization, analysis, and machine learning. We then dropped any null values and exported the cleaned data into CSV files. The two cleaned datasets were joined to see what it would potentially look like when we joined them in our PostgreSQL database. We then drop duplicates from the database.
After joining the two datasets in PostgreSQL we exported the final dataset we would be using for the rest of our analysis. This dataset was similar to the one we created through pandas and contained no null values or duplicates.


## Questions to Answer with the Data

Finding correlation of the higher income areas would received a better health inspection grade.

## Database
After cleaning the two datasets ['NYC Restaurant Inspection' and 'NYC-Precovid Restaurant Data'] using Python and Jupyter Notebook, the datasets were connected over to pgAdmin4 via SQLAlchemy to be stored in postgreSQL. 
 
* A database containing 'NYC Restaurant Inspection' data was created with the following columns: 'DBA', 'BOROUGH', 'STREET', 'ZIPCODE', 'CUISINE_DESCRIPTION', 'SCORE', and "GRADE'. 
* A second database using the 'NYC-Precovid Restaurant' dataset was created with the following columns: 'DBA', 'STREET', and 'INCOME_LEVEL'.  The two databases were then inner joined via the 'DBA' and 'STREET' columns as presented in the ERD diagram. After the merge, duplicate rows were removed. 
* The final dataset was generated with the following specific attributes: 'DBA', 'STREET', 'INCOME_LEVEL', 'BOROUGH', 'ZIPCODE', 'CUISINE_DESCRIPTION', 'SCORE', and 'GRADE'.
* We use sqlAlchemy to connect our database in postgres and pull the joined data frame to use in  machine learning model.

#### ERD
![ERD](https://github.com/Veronicaywl/Final_Project/blob/main/SQL_database/SQL_images/ERD_NYC_restaurants_final.png)


## Machine learning model:

### Preliminary data preprocessing, feature engineering and feature selection:

#### About the data:
The dataset has been preprocessed, split, and has been used to train and test supervised machine learning models in [ML_model_NormalizedStandardized_0](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/ML_experiments/ML_model_NormalizedStandardized_0.ipynb).

The data has categorical and numerical variables. The categorical variables include ‘DBA’, ‘STREET’, 'INCOME_LEVEL’, ‘BOROUGH’, ‘CUISINE_DESCRIPTION’, and ‘GRADE’. ‘ZIPCODE’ was converted into a ‘string’ data type, and hence became a categorical variable too. ‘SCORE’ is a numerical variable. The ‘GRADE’ variable consists of ‘A’, ‘B’, ‘C’, ‘N’, ‘P’, and ‘Z’ unique values. However, since we do not know what ‘N’ and ‘Z’ signify and ‘P’ signifies ‘pending’, we have dropped ‘N’, ‘P’, and ‘Z’ from our dataset to prepare a more reliable model.

#### Feature engineering, selection, and model tweaking:
Initially we experimented with ‘DBA’, ‘STREET’, INCOME_LEVEL’, ‘BOROUGH’, ‘CUISINE_DESCRIPTION’, ‘ZIPCODE’, and ‘SCORE’ as features variables, and ‘GRADE’ as our target variable. However, we later experimented with various combinations of features variables to determine which ones are most significant when it comes to our model. We are trying to build a model that can predict whether or not a restaurant will get a ‘high’ grade given our features variables. 

We removed 'SCORE' from our features variables since 'SCORE' is akin to 'GRADE'. 'GRADE' is created by gradations made over 'SCORE' values, which basically denotes the number of points you lose off your restaurant. 'SCORE' and 'GRADE' then are inversely related. In fact, 'SCORE' could work as a target variable too. The experiments we ran (can be found here in [ML_experiments](https://github.com/Veronicaywl/Final_Project/tree/main/ML_model/ML_experiments) folder) were: 

. [Model 2](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/ML_experiments/ML_model_NormalizedStandardized_2.ipynb) : 'INCOME_LEVEL’ and ‘ZIPCODE’ against ‘GRADE’; 

. [Model 3](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/ML_experiments/ML_model_NormalizedStandardized_3.ipynb) : 'INCOME_LEVEL’, ‘ZIPCODE’ and ‘BOROUGH’ against ‘GRADE’;

. [Model 4](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/ML_experiments/ML_model_NormalizedStandardized_4.ipynb) : 'INCOME_LEVEL’, ‘ZIPCODE’ and ‘CUISINE_DESCRIPTION’ against ‘GRADE’;

. [Model 5](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/ML_experiments/ML_model_NormalizedStandardized_5.ipynb) : 'INCOME_LEVEL’, ‘ZIPCODE’, 'BOROUGH’ and ‘CUISINE_DESCRIPTION’ against ‘GRADE’;

#### Data preprocessing:
The preliminary data preprocessing included normalization of the categorical variables ‘DBA’, ‘STREET’, ‘ZIPCODE’, and ‘CUISINE_DESCRIPTION’. These specific categorical variables were picked out from the rest since these have rare (or uncommon) unique values enough that if left as is, would make the dataset to wide to work with. A density plot was used for each of these variables, to identify where the value counts ‘fall off’ and the threshold thus set in that particular region. The thresholds selected for these variables are as follows: 5 for ‘DBA’, 30 for ‘STREET’, 200 for ‘ZIPCODE’, and 250 for ‘CUISINE_DESCRIPTION’. The rare values were bucketed into the ‘other’ category, to help normalize the uneven distribution. A categorical variable ‘CUISINE_DESCRITPION’s rare values and density plot prior to normalization is shown below:

!['CUISINE_DESCRIPTION' variable has rare unique values](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/Images/CUISINE_DESC_rare_values.png)

!['CUISINE_DESCRIPTION' variable has an uneven distribution prior to normalization](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/Images/CUSINE_DESC_uneven_distribution.png)

The encoding process included encoding the ‘GRADE’ variable into a ‘high’ and ‘low’ grade: grade ‘high’ comprised grades ‘A’ and ‘B’, whereas grade ‘low’ comprised grade ‘C’. This was followed by running a OneHotEncoder on all the categorical variables in our data.

As shown by the results from these model experiments too, it makes most sense to use 'INCOME_LEVEL’ and ‘ZIPCODE’ as our features variables. [ML_model_NormalizedStandardized_2](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/ML_experiments/ML_model_NormalizedStandardized_2.ipynb) contains our choice selection of features variables and target variable. 

Theoretically too, one can hypothesize how income level and zipcode may have an effect on the grade a restuarant receives. We choose 'ZIPCODE'' as a marker of geographical locality, and not 'STREET' or 'BOROUGH' since they are too specific or too general a markers - Zipcode captures just the right level of geographical distinctness for our purposes. 'DBA' (doing business as) denotes the restaurant or restaurant chain name, and we surmise that will not have any considerable, if any, effect on the outcomes. ‘CUISINE_DESCRIPTION’ is left out as well for we hypothesize that the type of cuisine may not have any effect on the grade that restaurant gets either.  

### Description of how data was split into training and testing data, and data standardization:

The data was then split into training and testing data (75% training and 25% testing data). About 75% of the data (i.e. the training data) was used for training (or ‘fitting’) the models, and the remaining 25% data (i.e. the testing data) was used for testing each model. After the data split, if there were any numerical variables in the data, they were standardized. We standardize after we split the data, and not before, because we do not want to include the testing values into the scale. 
The data we are working with is tabular and not raw (i.e. has no natural language data or images therein), so supervised machine learning models run well on it. 

### Explanation of model choice, including limitations and benefits:

The different supervised machine learning models tried on our data include resampling and ensemble learning models. The resampling models used on the data include: Naive Random Oversampling, SMOTE Oversampling, Cluster Centroids Undersampling, and SMOTEENN which combines over- and under-sampling techniques. 

Naive Random Oversampling and SMOTE Oversampling ‘oversample’ the minority class so the data values are on par with the majority class. The resample gives us 5598 ‘high’ and 5598 ‘low’ grades to run the ML model on. We experimented with Cluster Centroids Undersampling as well, which ‘undersamples’ the majority class down to equal the number of values in the minority class: this gives us 159 ‘high’ and 159 ‘low’ grades to run the ML model on. The SMOTEENN resampling method combines over and under sampling techniques by ‘oversampling’ the minority class to equate the number of data values in the majority class, followed by ‘undersampling’ by eliminating the data values that happen to fall in the neighborhood of both classes. This technique gave us 1780 ‘high’ and 773 ‘low’ grades to run the ML model on. The ensemble learning models used on the data include Random Forest Classifier, Balanced Random Forest Classifier, and Easy Ensemble AdaBoost Classifier, each utilizing 5598 'high' and 159 'low'.


From among these models, the best model turns out to be the Random Forest Classifier, which has an accuracy score of 0.97. 

![Classification Report for Random Forest Classifier](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/Images/confusion_matrix.png)


### Explanation of changes in model choice:
Our model chosen is the same as last week's - Random Forest Classifier - which yields the best results. However, there is some change in the features variables used in this model: we re-selected our features variables down to only two: 'INCOME_LEVEL’ and ‘ZIPCODE’. The target variable remains same as before: 'GRADE'.
Initially we were working with ‘DBA’, ‘STREET’, 'INCOME_LEVEL’, ‘BOROUGH’, ‘CUISINE_DESCRIPTION’, ‘ZIPCODE’, and ‘SCORE’ as features variables, and ‘GRADE’ as our target variable. The re-selection of features variables is explained in detail above in the section titled "Feature engineering, selection, and model tweaking".
[ML_model_NormalizedStandardized_2](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/ML_experiments/ML_model_NormalizedStandardized_2.ipynb) contains our model from this week. 

### Description of how we have trained the model and the additional training:
In order to improve this model, we can try binning 'GRADE' another way: instead of placing 'A' and 'B' in 'high' grade and 'C' only in 'low' grade, we can bin 'A' into 'high' grade and 'B' and 'C' into 'low' grade. Yet another way to refine our results is to use 'SCORE' instead of 'GRADE' and make multiple classes out of the target variable of 'SCORE', and then run our models against that target variable. 

### Description and explanation of model's confusion matrix including final accuracy score:

Our best model is Random Forest Classifier with an accuracy score of  0.97. A Random Forest Classifier involves training each weak learner on a subset of the data and then bases its result on the consensus reached by these weak learners together. A Random Forest Classifier model can, however, miss out the variability in the data. However, if the model’s number of estimators and  the depth is sufficient, it should perform quite well. The confusion matrix for this model can be seen below:

![Confusion matrix for Random Forest Classifier](https://github.com/Veronicaywl/Final_Project/blob/main/ML_model/Images/confusion_matrix.png)

The model's precision to predict 'high' grades is 0.97, whereas its precision to predict 'low' grades is 0.00.
The model's recall (or sensitivity) for 'high' grades is 1.00, whereas recall for 'low' grades is 0.00.



## Visualization
Plot some useful maps based on income level in the areas and showing the grades that spreading amoung in the local area. 
- Creating a heatmap showing the average scores by cuisine in different borough.
- Plot a Geo map to indicate the grades that restaurants received in five borough.
- An interactive dashboard using javascript , html, css , bootstrap where we can filter New York city restaurant  data by zip code, income level, grade, borough and cuisine, separately and also in different combination. 
- Use plotly and javascript to make interactive graph to visualize mean grading score by cuisine in different zip code.
- Using plotly we visualize different ML model to see which model give us the better accuracy score.


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
- HTML
- CSS
- Bootstrap



### Dashboard link:
The [Dashboard](https://docs.google.com/presentation/d/1pMOhrs9x0gpjzY27lDiT6kX4VvVU2djwglDEqmNtXrU/edit#slide=id.g11c86ef9d0d_0_0)
 provides detail about the tools and elements that we used to create the dashboad.

This is the webpage that we build after data analysit [NYC Restaurant Analysis Dashboard](https://veronicaywl.github.io/dashboard/).


### Tableau link: 

[Dashboard](https://public.tableau.com/app/profile/yawen.liang/viz/NYC_Restaurant_Analysis/Dashboard1)

[GeoMap based on Income](https://public.tableau.com/app/profile/yawen.liang/viz/NYC_Restaurant_Analysis/Story1)

[Heat Map](https://public.tableau.com/app/profile/yawen.liang/viz/GeoMapbasedonincome/HeatMapbyCuisine?publish=yes)

[Story](https://public.tableau.com/app/profile/yawen.liang/viz/NYC_Restaurant_Analysis/Story1)

## Summary 

![ML_Accuracy](https://github.com/Veronicaywl/Final_Project/blob/Nishat_2/ML_model/Images/ML_Accuracy.png)

Accuracy score was obtained and visualize to compared which Machine Learning Model performs best with our data. Random Forest Classifier was the best model to predict grade from a specific zip code and income level.



### Reference Resources
[Letter Grading for Restaurant](https://www1.nyc.gov/site/doh/business/food-operators/letter-grading-for-restaurants.page) ; 
[Inspection Cycle Overview](https://www1.nyc.gov/assets/doh/downloads/pdf/rii/inspection-cycle-overview.pdf) ; 

### Team Members

* Jessica Berrios | [GitHub](https://github.com/jwhberrios) | [LinkedIn](https://www.linkedin.com/in/jwhberrios/)

* Joon Su Choi | [GitHub](https://github.com/Joon-Su-Choi) | [LinkedIn](https://www.linkedin.com/in/joon-su-choi-498b87227/)

* Nishat Sultana | [GitHub](https://github.com/NishatSultana3538) | [LinkedIn](https://www.linkedin.com/in/nishat78/)

* Soha Tariq | [GitHub](https://github.com/SohaT7) | [LinkedIn](https://www.linkedin.com/in/soha-tariq-5226143b/)

* Yawen Veronica Liang | [GitHub](https://github.com/Veronicaywl) | [LinkedIn](https://www.linkedin.com/in/yawen-liang/)

