const express = require('express');
const app = express();
require('dotenv').config();
const axios = require('axios');
const port = 3000;



app.get('/', (req, res) => {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;
    axios.get(apiUrl)
      .then(response => {
        const data = response.data;
        res.send(`<h1>${data.title}</h1><img src="${data.url}" alt="NASA APOD">`);
      })
      .catch(error => {
        console.log(error);
        res.send('An error occurred.');
      });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

  