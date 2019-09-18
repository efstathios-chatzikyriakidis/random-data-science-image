const fs = require('fs');
const http = require('http');
const mime = require('mime-types')
const path = require('path');

const PORT = process.env.PORT || 8000

http.createServer(function (req, res) {
  images_directory_path = 'images'

  image_file_names = fs.readdirSync(images_directory_path)

  chosen_image_file_name = image_file_names[Math.floor(Math.random() * image_file_names.length)]

  random_image_data = fs.readFileSync(path.join(images_directory_path, chosen_image_file_name));

  res.writeHead(200, {'Content-Type': mime.lookup(chosen_image_file_name) });

  res.end(random_image_data, 'binary');
}).listen(PORT, () => console.log(`Listening on ${ PORT }`));