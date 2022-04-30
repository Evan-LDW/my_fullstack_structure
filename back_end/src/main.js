const express = require('express');
const path = require('path');
const cors = require('cors');
const ip = require('ip');

const app = express();
const address = ip.address();
const port = 9099;

app.use(cors({origin: '*'}));
app.use(express.static(path.join(__dirname, "../build")))
app.get('/*',function (req,res) { 
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
 })

 app.listen(port, address, () => { 
     console.log(`Now My Server Start at : \n http://${address}:${port}`);
  })
