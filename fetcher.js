const request = require('request');
const fs = require('fs')
// read the CLI args
// log the URL and the local path
const URL = process.argv[2].toString()
const localPath = process.argv[3].toString()

console.log(URL)
console.log(localPath)

// make the http call
request(`${URL}`, (error, response, body) => {
  if (error) {
    console.error(error)
  }
  // once the call is made, write the respone to the path specified
  const content = body;
  fs.writeFile(`${localPath}`, content, err => {
    if (err) {
      console.error(error)
    }
  })
  // console log the size and the path
  let size = content.length
  console.log(`Downloaded and saved ${size} bytes to ${localPath}`)
});



