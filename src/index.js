const express = require('express');
const cors = require('cors');
const axios = require('axios');


const app = express();
const port = 5000;
const router = require("./routes/index"); 
 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:true})); 
  
app.use("/", router);  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
