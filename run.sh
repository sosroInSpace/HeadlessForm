#!/bin/bash

#start docker project
cd wordpress-backend
docker-compose up -d 
# docker mounted

echo "DOCKER IMAGE STARTED - importing sql"

cd ..

SQL=$(docker inspect --format="{{.Id}}" wordpress-backend_db_1)

#drop current db and create new one
docker exec $SQL mysql -u root -ppassword -e "drop schema wordpress; create schema wordpress;"
#import sql
docker exec -i $SQL mysql -u root --password=password wordpress < theme-sql.sql

echo "IMPORTED SQL"

echo "STARTING FRONT END"

cd wordpress-frontend
npm install
npm start