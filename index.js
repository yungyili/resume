const express = require('express');
const app = express();


app.use(express.static('public'));

// 2. Express will serve up index.html file
// if it doesn't recognize the route
const path = require('path');
app.get('*', (req, res)=>{
  res.sendFile(
    path.resolve(
      __dirname,
      'public','index.html'
    ));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log("Listening on port", PORT));
