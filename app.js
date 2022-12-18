const path = require('path');

const express = require('express');

const cors = require('cors')

const sequelize = require ('./util/database');

const bodyParser = require('body-parser'); 

const app = express();

app.use(cors()); 

const userRoutes = require('./routes/UserRoute');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use('/user', userRoutes);

sequelize.sync({force:true}).then(result =>{
    console.log("Server Started");
    app.listen(3000);
})
.catch(error =>{
    console.log(error)
})