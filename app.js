const express = require('express');

const {randomCatPost} = require('./cats/cat.controller')


const app = express();


// call random cat function
randomCatPost();



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server start ${PORT}`));