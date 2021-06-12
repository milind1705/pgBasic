const express = require('express');
const { message } = require('statuses');
const testRouter = require('./app/routes/tutorial.route')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:false }));

const db = require('./app/models');
db.sequelize.sync();


app.get('/', (req, res) => {
    res.json({message: "'we are going to work on postgress'"})
});

app.use('/', testRouter)





app.listen(5000, () => {
    console.log('servr is connected to port 5000')
})