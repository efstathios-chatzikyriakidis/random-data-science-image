# random-data-science-image

A Heroku-based Node.js web application that provides random data science images.

## Running Locally

Make sure you have [Node.js 10.16.3](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone --recursive https://github.com/efstathios-chatzikyriakidis/data-science-images.git
$ cd random-data-science-image
$ npm install
$ npm start
```

Your app should now be running on [localhost:8000](http://localhost:8000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku ps:scale web=1
```
