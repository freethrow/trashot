const download = require('image-downloader')
 
// Download to a directory and save with the original filename
const options = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/John_Stockton.jpg',
  dest: './images/stockton.jpg'                 
}
 
 
download.image(options)
  .then(({ filename, image }) => {
    console.log('File saved to', filename)
  })
  .catch((err) => {
    console.error(err)
  });

