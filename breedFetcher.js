const request = require("request");
const args = process.argv.slice(2);






request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body)=>{
  
  if (error) {
    console.log(error.code);
    return;
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log('Breed not found');
    return;
  } else {
    console.log(data[0].description);
  }
});