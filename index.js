const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/aditya', (req,res)=>{
    res.send('Mahi');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});