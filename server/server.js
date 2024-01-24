import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import axios from "axios";

const app =express();
const PORT=3001;

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/QuadB").then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log(error);
})
app.get("/top10results",async(req,res)=>{
    const response=await axios.get("https://api.wazirx.com/api/v2/tickers");
    const result=Object.values(response.data).slice(0,10);
    if(result){
        res.status(200).send({
            
            result
        })
    }
    else{
        res.status(500).send({
            success:false,
            message:"Failed",
        })
    }

})
app.listen(PORT,()=>{
    console.log("The server is running on PORT "+PORT);
})

