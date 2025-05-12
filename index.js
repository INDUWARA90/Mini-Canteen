const express=require('express');
const cors=require('cors');

const PORT=8000;
const app=express();

// middleware
app.use(cors()); //cross origins
app.use(express.json()); //accept json


app.get("/",(request,response)=>{
    return response.status(200).send("<h1>WELCOME TO NODE JS SERVER</h1>");
});


app.listen(PORT,()=>{
    console.log(`Server is Running ${PORT}`);
});