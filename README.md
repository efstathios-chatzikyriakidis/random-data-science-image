# random-data-science-image

A Node.js web application that provides random data science images.

## Running Locally

Make sure you have [Node.js 10.16.3](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone --recursive https://gitlab.com/efxa/random-data-science-image.git
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
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)