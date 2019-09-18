const path = require('path');

const fs = require('fs');

const express = require('express');

const mime = require('mime-types');

const { google } = require('reverse-image-search');

const PORT = process.env.PORT || 8000

const app = express();

app.get('/', function (req, res) {
  random_image_file_path = get_random_image_file_path()

  random_image_data = fs.readFileSync(random_image_file_path);

  res.writeHead(200, {'Content-Type': mime.lookup(random_image_file_path) });

  res.end(random_image_data, 'binary');
});

app.get('/experimentation', function (req, res) {
  random_image_file_path = get_random_image_file_path()

  google.searchByImageURL({
    imageFile: random_image_file_path
  }).then(result => {
    res.send(result);
  }).catch(err => {
    res.send(err);
  });
});

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});

function get_random_image_file_path() {
  images_directory_path = 'images'

  image_file_names = fs.readdirSync(images_directory_path)

  chosen_image_file_name = image_file_names[Math.floor(Math.random() * image_file_names.length)]

  return path.join(images_directory_path, chosen_image_file_name);
}