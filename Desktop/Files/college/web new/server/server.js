const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')

const AuthRoute = require('./routes/auth.route')

//to config .env to ./config/config.env
require('dotenv').config({
    path:'./config/config.env'
});

//connect to db
connectDB()




//app.use('/public',express.static('/static'));

app.use(bodyParser.json())

//config for dev
if(process.env.NODE_ENV === 'development')
{
    app.use(cors({//used to deal with react without probs
        origin: process.env.CLIENT_URL
    }))

    app.use(morgan('dev'))//gives info about each request
}


//to load all routes
const authRouter = require('./routes/auth.route')

//using the routes
app.use('/api/',authRouter);





app.use((req,res,next)=>{
    res.status(404).json({
        success:false,
        message:"Page not found"
    })
})



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> {
    console.log(`App listening on ${PORT}`);
});