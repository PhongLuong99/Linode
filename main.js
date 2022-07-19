const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const server = express();

server.get('/echo-1', (req, res, next) => {
    res.status(200).json({
        id: 1,
        description: 'hello',
        name: 'phong'
    })
  })


const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log('JSON Server is running ${PORT}');
});