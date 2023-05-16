const express = require("express");
const axios = require('axios');
const router = express.Router(); 

router.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
}) 
 

router.post("/image", async (req, res) => {
   var url =   req.body.url; 
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');
    // Adjust the type according to your image format
 
   res.set('Content-Type', response.headers['content-type']);

   
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
       "Access-Control-Allow-Methods",
       "POST, PUT, PATCH, GET, DELETE, OPTIONS"
   );
   res.header("Access-Control-Allow-Headers", "*");
   res.status(200).json(buffer);  
}) 
 
module.exports = router;