const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const dotenv =require('dotenv');

//dot en configuration
dotenv.config() ;

// rest object
const app=express();

// middleware
app.use(cors()); //cross origins
app.use(express.json()); //accept json
app.use(morgan('dev')); 


app.get("/",(request,response)=>{
    return response.status(200).send("<h1>WELCOME TO NODE JS SERVER</h1>");
});

const PORT=process.env.PORT || 8081;

app.listen(PORT,()=>{
    console.log(`Server is Running ${PORT}`);
});