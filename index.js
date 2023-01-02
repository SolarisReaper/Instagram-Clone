const express = require('express');
const app = express();

const userUpload = require('./routes/index')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Alllow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Alllow-Methos', 'GET, POST, PATCH, DELETE');

    next();
});

app.use('/user', userUpload)

app.listen(3001, ()=>{
    console.log('Server running at 3001')
})
