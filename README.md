### Pre-requisites



[Nodejs] needs to be installed

### Instructions to run flyclique application locally:
```sh
npm install
node server.js
```

### Instructions to deploying flyclique to heroku:


Login in to Heroku (You must have a heroku account to login and heroku toolbet installed on your machine.)
```sh
heroku login
```


If you want to add the heroku git repository instead, do the following:
```sh
heroku git:remote -a hu-map-leaflet-project
```

Add, Commit and Push files to Heroku Git Repository
```sh
git add .
git commit -m"Your message for adding and commiting files"
git push heroku master
```

If you want to open heroku based application url in the browser
```sh
heroku open
```

[Nodejs]:http://nodejs.org