Description

Our zip file contains documents of our final report and poster in the DOC folder as well as all of the code we used, a demo, and access to our visualization in the CODE folder. The CODE file is broken into the full, functioning visualization code in the folder visualization and the data processing and analysis code in the toy-ex-data-processing folder.

We give a full example of how we collected, processed, and analyzed our data in the toy-ex-data-processing folder, but we only show our visualization on the complete data. This is because: (1) the data is very large and takes many hours to analyze, and (2) our visualization only makes sense with the full dataset due to the nature of our clustering visualizations. 

Data

The Reddit submissions and comments data is publicly available through Google BigQuery: https://bigquery.cloud.google.com/dataset/fh-bigquery:reddit_comments and https://bigquery.cloud.google.com/dataset/fh-bigquery:reddit_posts. To access the full dataset for our project, please follow instructions in CODE < toy-ex-data-processing < 00-GettingData < Data_Collection.txt.

Installation

The code used in our project was run in python and Jupyter notebook. The packages that we used are csv, glob, hlda.Sampler.HierarchalLDA, IPython.core.display (HTML, display), ipywidgets.widgets, nltk (tokenize.word_tokenize, corpus.stopwords, stem.porter.PorterStemmer), numpy, os.path, pandas, pylab, string, sys, textblob.TextBlob, and wordcloud.Wordcloud.

Running the Jupyter notebook "Reddit hLDA.ipynb" in CODE/*FinalSubmissionCode/03-AnalysisCode will import the prior listed packages with the exception of the hLDA package. We modified the hLDA package to be able to run in python 3 given that the package was originally written in python 2. The modified package is included in the hlda folder (CODE/*FinalSubmissionCode/03-AnalysisCode/hlda).

Execution

First, navigate to CODE/*FinalSubmissionCode/01-DataCleaningCode and run comment_submission_processing.py. This produces word banks consisting of comments and submissions posted in the "democrats" and "Republican" subreddits related to the government shutdown that occured in December 2018 as well as comment and submission counts csv files that record the number of relevant comments and submissions. These files serve as the input for the notebook "Reddit hLDA.ipynb" in CODE/*FinalSubmissionCode/03-Analysis Code. This notebook outputs word clouds for the two subreddits as well as runs hLDA on the two wordbanks. Additionally, the notebook performs TextGlob subjectivity analysis and NLTK sentiment analysis that is used in conjunction with subreddit meta data (number of subscribers, etc) to create our visualizations. Creation of visualization is not performed as part of our demo.

To view the full visualization, please open the CODE< visualization < index.html file in Firefox. If there are issues with screen size, please zoom out. 



