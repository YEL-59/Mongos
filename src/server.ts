
import app from './app';
import mongoose from 'mongoose';

//const express = require('express')
//const mongoose = require('mongoose');



const port:number = 5000


//databaseconnection
async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log('successful connection!')

        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
    }catch(err){
        console.log(`Failed to connect database`,err)
    }
   
  
   
  }
  main()


