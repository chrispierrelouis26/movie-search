const express = require('express');
const axios = require('axios');
//parses data into json format
const cors = require('cors');
const {json} = require('body-parser');
const {apiURL, apiKey} = require('../config')




//intialize server

const app = express();
const port = 3001;

//bring in middlewares 
app.use(cors());
app.use(json());



// end points
app.get('/api/movies', (req, res, next)=> {
    //making axios call in server to actual api
    axios.get(`${apiURL}/movie/popular${apiKey}`).then(response => {
        res.status(200).json(response.data)
    })
})



console.log(apiURL, apiKey);
app.listen(port, ()=> {
    console.log(`Server is listening on ${port}`);
})




