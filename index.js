const mongoose = require('mongoose');
const councils = require('./routes/councils');
const councilAreas = require('./routes/councilAreas');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/geodata', { useNewUrlParser: true })
    .then(async () => {
        console.log('Connected to MongoDB...');
    })
    .catch(err => console.error('Fail to connect to MongoDB...', err));

app.use(express.json());
app.use('/api/councils', councils);
app.use('/api/council-areas', councilAreas);


app.listen(port, () => console.log(`Listening on port ${port}...`));