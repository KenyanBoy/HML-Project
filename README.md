# Union of European Football Associations (UEFA) Project
Week 18 - Group 1

![UEFA champions league](https://editorial.uefa.com/resources/0269-1267e78b6989-ccff720e93c4-1000/manchester_city_v_chelsea_fc_-_uefa_champions_league_final.jpeg)

This Project aims to Utilise EPL Player stats to build an EPL Dream team. By gathering multiple dataset statistics, the objective is to analyse, dissect and extract the important data to be readily available for useful application.


## Assignment structure
```
Huroku-Project
| 
|__ images/          
|   |__ 20-21_table.png![20-21_table](https://user-images.githubusercontent.com/80458900/126598712-e23c850f-c443-4881-9c93-f46ea2f63ed2.png)
|   |__ ChampionsLeague.PNG
|   |__ Chelswa_img1.jpg
|   |__ Manchester_City_img4.jpg
    |__ nav_bar_img.png
    |__ Paris_Saint_Germain_img3.jpg
    |__ Real_Madrid_img2.jpg
    |__ UEFA_clubs.PNG
|
|__ Resources/
|   |__ Team Data/
|      |__ chelsea_players.csv
|      |__ Footballteams.csv
|      |__ laliga_foreign_player_mminutes.csv
|      |__ manchester_play.csv
|   |__ premierleague_forign_player_minutes.csv
|   |__ psg_players.csv
|   |__ real_madrid_players.csv
|   |__ soccer_player_webscraping.ipynbv
|   |__ world_country_latitude_and_longitude_values.csv
|   
|   
|
|__ SQL/
|   |__ SQlite databse creation
|
|__ .gitignore 
|__ .ipynb
|__ Teams.ipynb
|__ README - Project Guidelines.md
|__ README - Project Proposal.md
|__ README.md
| 

```

## Usage

```
# Dependencies and Setup

from bs4 import BeautifulSoup
import requests
import pandas as pd
import json
from sqlalchemy import create_engine
from geojson import Feature, FeatureCollection, Point

```


## Data Sources:

|No|Source|Link|
|-|-|-|
|1|Kaggle|https://www.kaggle.com/varpit94/football-teams-rankings-stats|
|2|Kaggle|https://www.transfermarkt.co.uk/manchester-city/kader/verein/281/saison_id/2021|
|3|Kaggle|https://www.kaggle.com/rajatrc1705/english-premier-league202021|


## Datasets 

|No|Source|Link|
|-|-|-|
|1|pl_15-16.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/OriginalData/pl_15-16.csv|
|2|pl_16-17.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/OriginalData/pl_16-17.csv|
|3|pl_17-18.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/OriginalData/pl_17-18.csv|
|4|pl_18-19.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/OriginalData/pl_18-19.csv|
|5|Player_Stats.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/Player_Stats.csv|
|6|Player_complete_nationality.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/Player_complete_nationality.csv|
|7|defender_average.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/defender_average.csv|
|8|forward_average.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/forward_average.csv|
|9|goalkeeper_average.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/goalkeeper_average.csv|
|10|midfielder_average.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/midfielder_average.csv|
|11|player_stats_complete.csv|https://github.com/alysnow/ETL-Project/blob/main/Resources/player_stats_complete.csv|


## Project Task Breakdown:

![Javascript.PNG](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amcharts.com%2Fjavascript-maps%2F&psig=AOvVaw10IaYzBheyVDS-81Tbft4a&ust=1627023138649000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJj5-9-L9vECFQAAAAAdAAAAABAD)

1. Research
2. Acquire datasets
3. Clean datasets
    1. Jupyter notebook
    2. Create GeoJSON files
4. Create database SQL
    1. load dataframes
    2. upload them on app.js ustilising the Flask library



## Proposal

A copy of the Project proposal is located in the following link: []

## Contributors
- [@Sri](https://github.com/srivegunta)
- [@Ernest](https://github.com/KenyanBoy)
- [@Alvin](https://github.com/Alvin1359)
- [@Petra](https://github.com/PetraMoyle)
