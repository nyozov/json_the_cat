const request = require("request");





const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body)=>{
  
    if (error) {
      callback(`Error: ${error}`, null);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback(null, `${breedName} breed not found`);
      return;
    } else {
      callback(null, data[0].description);
    }
  });


};
module.exports = { fetchBreedDescription };