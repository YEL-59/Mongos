import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//const express = require('express')
//const mongoose = require('mongoose');


const app = express()
const port = 5000
//databaseconnection
async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log('successful connection!')
    }catch(err){
        console.log(`Failed to connect database`,err)
    }
   
  
   
  }
  main()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})