const path = require('path');

const fs = require('fs');

const express = require('express');

const mime = require('mime-types');

const PORT = process.env.PORT || 8000

const app = express();

app.get('/', function (req, res) {
  images_directory_path = 'data-science-images'

  image_file_names = fs.readdirSync(images_directory_path, { withFileTypes: true }).filter(o => !o.isDirectory()).map(o => o.name);

  chosen_image_file_name = image_file_names[Math.floor(Math.random() * image_file_names.length)]

  random_image_file_path = path.join(images_directory_path, chosen_image_file_name);

  random_image_data = fs.readFileSync(random_image_file_path);

  res.writeHead(200, {'Content-Type': mime.lookup(chosen_image_file_name) });

  res.end(random_image_data, 'binary');
});

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});