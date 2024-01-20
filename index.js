const express = require("express");
const config = require('./app/config');
const routes = require('./app/routes')
const sequelize = require('./app/database')
const app = express();

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', routes)

sequelize.sync().then(()=>{
    console.log("Synced DB")
}).catch((err)=>{
    console.log("Failed Synced DB: "+err.message)
})

app.listen(config.PORT, ()=>{
    console.log(`API Listening on Port ${config.PORT}`)
})