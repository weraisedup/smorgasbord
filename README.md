# Smorgasbord

To start both the server and the client at the same time, execute:
```
docker-compose up
```
or, if you want to launch it in the background, execute:
```
docker-compose up -d
```
you can bring a running docker-compose event down with:
```
docker-compose stop
```
If you don't have Docker installed, either utilize npm (seen below) or download Docker Desktop for your OS.
This will run them in parallel after building the images.

If you want to execute them separately, or just hate docker, you can still cd into `/backend` and `/frontend` and do:
```
npm start
``` 
in each location.

The React App is visible at http://localhost:5000.

