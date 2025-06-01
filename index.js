//  npm install : express ,dotenv ,mysql2, ejs ,body-parser

const port = process.env.PORT || 5000;
const express = require('express');
const app= express();
app.use(express.json());

const bodyParser=require('body-parser');
const path =require('path');
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views" , path.join(__dirname,"./views"));



const Login_R = require('./Routers/Login_R');
app.use('/',Login_R);

app.get( '/' , (req,res) =>{
    res.render( "homePage" , {} );
});

app.listen(port , () => {
    console.log(`Now Listening on port http://localhost:${port}`);
})